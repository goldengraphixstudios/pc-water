'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useEditor, EditorContent, type Editor } from '@tiptap/react'
import { Node as TiptapNode } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import { TextStyle } from '@tiptap/extension-text-style'
import { createSupabasePublicClient } from '@/lib/supabase/public'

// ── Upload helper ──────────────────────────────────────────────────────────────

async function uploadImageToSupabase(file: File): Promise<string | null> {
  const supabase = createSupabasePublicClient()
  if (!supabase) return null
  const fileName = `posts/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '-')}`
  const { data, error } = await supabase.storage.from('cms-media').upload(fileName, file, {
    contentType: file.type || 'image/jpeg',
    upsert: false,
  })
  if (error || !data) return null
  const { data: urlData } = supabase.storage.from('cms-media').getPublicUrl(data.path)
  return urlData.publicUrl
}

// ── ArticleBlock node ──────────────────────────────────────────────────────────
// Captures every special article HTML element (pull-stat, divider, FAQ, CTA,
// photo-grid, quotable, lead paragraph) and stores the raw outerHTML as an atom
// node so TipTap never mangles the markup.  The NodeView renders the actual HTML
// visually (matching the live article page) with a delete button on hover.

const ArticleBlock = TiptapNode.create({
  name: 'articleBlock',
  group: 'block',
  atom: true,
  priority: 200, // fire parseHTML rules BEFORE Paragraph (100) and Blockquote (100)

  addAttributes() {
    return { html: { default: '' } }
  },

  parseHTML() {
    const grab = (el: HTMLElement) => ({ html: el.outerHTML })
    return [
      { tag: 'p.article-lead',              getAttrs: (d: HTMLElement | string) => grab(d as HTMLElement) },
      { tag: 'div.article-divider',         getAttrs: (d: HTMLElement | string) => grab(d as HTMLElement) },
      { tag: 'div.article-pull-stat',       getAttrs: (d: HTMLElement | string) => grab(d as HTMLElement) },
      { tag: 'div.article-photo-grid',      getAttrs: (d: HTMLElement | string) => grab(d as HTMLElement) },
      { tag: 'div.article-faq-item',        getAttrs: (d: HTMLElement | string) => grab(d as HTMLElement) },
      { tag: 'div.article-cta',             getAttrs: (d: HTMLElement | string) => grab(d as HTMLElement) },
      { tag: 'blockquote.article-quotable', getAttrs: (d: HTMLElement | string) => grab(d as HTMLElement) },
    ]
  },

  // renderHTML is used by getHTML() — store raw html in a data attr;
  // getEditorHTML() post-processes these back to real article markup.
  renderHTML({ node }) {
    return ['div', { 'data-ab': '', 'data-ab-html': node.attrs.html as string }]
  },

  addNodeView() {
    return ({ node, editor, getPos }) => {
      const wrapper = document.createElement('div')
      wrapper.className = 'ab-wrapper'
      wrapper.setAttribute('contenteditable', 'false')

      const preview = document.createElement('div')
      preview.innerHTML = (node.attrs.html as string) || ''
      wrapper.appendChild(preview)

      // ×  delete button — appears on hover
      const btn = document.createElement('button')
      btn.type = 'button'
      btn.className = 'ab-delete'
      btn.title = 'Remove block'
      btn.innerHTML =
        '<svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>' +
        '</svg>'
      btn.addEventListener('mousedown', (e) => {
        e.preventDefault()
        if (typeof getPos === 'function') {
          const pos = getPos()
          if (pos !== undefined) {
            editor.chain().deleteRange({ from: pos, to: pos + node.nodeSize }).run()
          }
        }
      })
      wrapper.appendChild(btn)

      return {
        dom: wrapper,
        contentDOM: null,
        update(updatedNode) {
          if (updatedNode.type.name !== 'articleBlock') return false
          preview.innerHTML = (updatedNode.attrs.html as string) || ''
          return true
        },
      }
    }
  },
})

// ── Reconstruct clean article HTML ────────────────────────────────────────────
// TipTap serialises ArticleBlock nodes as <div data-ab data-ab-html="…">.
// This function replaces those placeholders with the original markup.

function getEditorHTML(editor: Editor): string {
  if (typeof document === 'undefined') return editor.getHTML()
  const div = document.createElement('div')
  div.innerHTML = editor.getHTML()
  div.querySelectorAll('[data-ab]').forEach((el) => {
    const html = (el as HTMLElement).dataset.abHtml || ''
    const t = document.createElement('template')
    t.innerHTML = html
    el.replaceWith(t.content)
  })
  return div.innerHTML
}

// ── Special block templates ────────────────────────────────────────────────────

const SPECIAL_BLOCKS = [
  {
    label: 'Lead paragraph',
    html: '<p class="article-lead">Lead paragraph text here.</p>',
  },
  {
    label: 'Section divider',
    html: '<div class="article-divider"><span>Section heading</span></div>',
  },
  {
    label: 'Pull stat',
    html: '<div class="article-pull-stat"><span class="stat-num">5×</span><span class="stat-label">Stat description here</span></div>',
  },
  {
    label: 'Photo grid (2-col)',
    html: '<div class="article-photo-grid"><figure><img src="" alt=""/><figcaption>Caption for image 1</figcaption></figure><figure><img src="" alt=""/><figcaption>Caption for image 2</figcaption></figure></div>',
  },
  {
    label: 'Quotable',
    html: '<blockquote class="article-quotable"><p>Quotable passage text here.</p></blockquote>',
  },
  {
    label: 'FAQ item',
    html: '<div class="article-faq-item"><p class="faq-q">Question text</p><p class="faq-a">Answer text</p></div>',
  },
  {
    label: 'CTA block',
    html: '<div class="article-cta"><p>CTA description text.</p><a href="/contact" class="cta-btn">Button text</a></div>',
  },
]

// ── Toolbar button ─────────────────────────────────────────────────────────────

function ToolbarBtn({
  onClick,
  active,
  title,
  children,
}: {
  onClick: () => void
  active?: boolean
  title: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onMouseDown={(e) => {
        e.preventDefault()
        onClick()
      }}
      title={title}
      className={`h-7 px-2 rounded text-[13px] font-medium transition-colors flex items-center gap-1 ${
        active
          ? 'bg-[#3e91ce] text-white'
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
      }`}
    >
      {children}
    </button>
  )
}

function Sep() {
  return <div className="w-px h-5 bg-slate-200 mx-0.5 flex-shrink-0" />
}

// ── Toolbar ────────────────────────────────────────────────────────────────────

function Toolbar({
  editor,
  onImageUpload,
}: {
  editor: Editor
  onImageUpload: (file: File) => Promise<void>
}) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [blockMenuOpen, setBlockMenuOpen] = useState(false)
  const [linkDialogOpen, setLinkDialogOpen] = useState(false)
  const [linkUrl, setLinkUrl] = useState('')
  const blockMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (blockMenuRef.current && !blockMenuRef.current.contains(e.target as Node)) {
        setBlockMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Insert a special block directly as an articleBlock node — never goes through
  // HTML parsing so the markup is preserved exactly.
  function insertSpecialBlock(html: string) {
    editor.commands.insertContent({ type: 'articleBlock', attrs: { html } })
    setBlockMenuOpen(false)
  }

  function handleLinkSubmit() {
    if (!linkUrl.trim()) {
      editor.chain().focus().unsetLink().run()
    } else {
      editor.chain().focus().setLink({ href: linkUrl.trim() }).run()
    }
    setLinkDialogOpen(false)
    setLinkUrl('')
  }

  function openLinkDialog() {
    const existing = editor.getAttributes('link').href
    setLinkUrl(existing ?? '')
    setLinkDialogOpen(true)
  }

  return (
    <div className="sticky top-0 z-10 bg-white border-b border-slate-200 px-3 py-1.5 flex flex-wrap items-center gap-0.5">
      {/* Paragraph / headings */}
      <ToolbarBtn
        onClick={() => editor.chain().focus().setParagraph().run()}
        active={editor.isActive('paragraph')}
        title="Paragraph"
      >
        P
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        active={editor.isActive('heading', { level: 2 })}
        title="Heading 2"
      >
        H2
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        active={editor.isActive('heading', { level: 3 })}
        title="Heading 3"
      >
        H3
      </ToolbarBtn>

      <Sep />

      {/* Inline formatting */}
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleBold().run()}
        active={editor.isActive('bold')}
        title="Bold"
      >
        <strong>B</strong>
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleItalic().run()}
        active={editor.isActive('italic')}
        title="Italic"
      >
        <em>I</em>
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleStrike().run()}
        active={editor.isActive('strike')}
        title="Strikethrough"
      >
        <span className="line-through">S</span>
      </ToolbarBtn>

      <Sep />

      {/* Lists */}
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        active={editor.isActive('bulletList')}
        title="Bullet list"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
        List
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        active={editor.isActive('orderedList')}
        title="Numbered list"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20h14M7 12h14M7 4h14M3 20v-2m0 2h2m-2 0H1M3 12H1m2 0v-2m0 2h2M3 4H1m2 0V2m0 2h2" />
        </svg>
        1.
      </ToolbarBtn>

      <Sep />

      {/* Blockquote / HR */}
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        active={editor.isActive('blockquote')}
        title="Blockquote"
      >
        &ldquo;
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        active={false}
        title="Horizontal rule"
      >
        ―
      </ToolbarBtn>

      <Sep />

      {/* Link */}
      <ToolbarBtn onClick={openLinkDialog} active={editor.isActive('link')} title="Link">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
        Link
      </ToolbarBtn>

      {/* Image upload */}
      <ToolbarBtn onClick={() => fileInputRef.current?.click()} active={false} title="Insert image">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        Image
      </ToolbarBtn>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={async (e) => {
          const file = e.target.files?.[0]
          if (file) await onImageUpload(file)
          e.target.value = ''
        }}
      />

      <Sep />

      {/* Special blocks dropdown */}
      <div className="relative" ref={blockMenuRef}>
        <ToolbarBtn
          onClick={() => setBlockMenuOpen((v) => !v)}
          active={blockMenuOpen}
          title="Insert special block"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Block
        </ToolbarBtn>
        {blockMenuOpen && (
          <div className="absolute top-full left-0 mt-1 z-50 bg-white border border-slate-200 rounded-lg shadow-lg py-1 min-w-[180px]">
            {SPECIAL_BLOCKS.map((block) => (
              <button
                key={block.label}
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault()
                  insertSpecialBlock(block.html)
                }}
                className="w-full text-left px-3 py-1.5 text-[13px] text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                {block.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Link dialog */}
      {linkDialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
          onMouseDown={() => {
            setLinkDialogOpen(false)
            setLinkUrl('')
          }}
        >
          <div
            className="bg-white rounded-xl border border-slate-200 shadow-xl p-5 w-[380px]"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <p className="text-sm font-semibold text-slate-700 mb-3">Insert / edit link</p>
            <input
              autoFocus
              type="url"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  handleLinkSubmit()
                }
                if (e.key === 'Escape') {
                  setLinkDialogOpen(false)
                  setLinkUrl('')
                }
              }}
              placeholder="https://..."
              className="field mb-3"
            />
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                onClick={() => {
                  setLinkDialogOpen(false)
                  setLinkUrl('')
                }}
                className="px-3 py-1.5 rounded-lg text-[13px] text-slate-500 hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              {editor.isActive('link') && (
                <button
                  type="button"
                  onClick={() => {
                    editor.chain().focus().unsetLink().run()
                    setLinkDialogOpen(false)
                    setLinkUrl('')
                  }}
                  className="px-3 py-1.5 rounded-lg text-[13px] text-red-500 hover:bg-red-50 transition-colors"
                >
                  Remove
                </button>
              )}
              <button
                type="button"
                onClick={handleLinkSubmit}
                className="px-3 py-1.5 rounded-lg text-[13px] font-semibold bg-[#3e91ce] text-white hover:bg-[#2d7ab8] transition-colors"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Main export ────────────────────────────────────────────────────────────────

interface RichTextEditorProps {
  value: string
  onChange: (html: string) => void
  placeholder?: string
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = 'Write the full article here…',
}: RichTextEditorProps) {
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const isFirstMount = useRef(true)

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      // ArticleBlock must be listed first so its parseHTML rules have highest priority
      ArticleBlock,
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Image.configure({ inline: false, allowBase64: false }),
      Link.configure({ openOnClick: false, HTMLAttributes: { rel: 'noopener noreferrer' } }),
      Placeholder.configure({ placeholder }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      TextStyle,
    ],
    content: value,
    onUpdate({ editor }) {
      onChange(getEditorHTML(editor))
    },
    editorProps: {
      attributes: {
        // article-content = all article CSS; ProseMirror.article-content overrides max-width
        class: 'outline-none min-h-[400px] p-5 article-content',
      },
      handleDrop(view, event, _slice, moved) {
        if (moved) return false
        const files = event.dataTransfer?.files
        if (!files?.length) return false
        const imageFiles = Array.from(files).filter((f) => f.type.startsWith('image/'))
        if (!imageFiles.length) return false
        event.preventDefault()
        imageFiles.forEach(async (file) => {
          setUploading(true)
          setUploadError(null)
          try {
            const url = await uploadImageToSupabase(file)
            if (url) {
              const { schema } = view.state
              const node = schema.nodes.image?.create({ src: url, alt: file.name })
              if (node) {
                const transaction = view.state.tr.insert(view.state.selection.from, node)
                view.dispatch(transaction)
              }
            } else {
              setUploadError('Image upload failed')
            }
          } catch {
            setUploadError('Image upload failed')
          } finally {
            setUploading(false)
          }
        })
        return true
      },
      handlePaste(view, event) {
        const items = event.clipboardData?.items
        if (!items) return false
        const imageItems = Array.from(items).filter((item) => item.type.startsWith('image/'))
        if (!imageItems.length) return false
        event.preventDefault()
        imageItems.forEach(async (item) => {
          const file = item.getAsFile()
          if (!file) return
          setUploading(true)
          setUploadError(null)
          try {
            const url = await uploadImageToSupabase(file)
            if (url) {
              const { schema } = view.state
              const node = schema.nodes.image?.create({ src: url, alt: 'Pasted image' })
              if (node) {
                const transaction = view.state.tr.replaceSelectionWith(node)
                view.dispatch(transaction)
              }
            } else {
              setUploadError('Image upload failed')
            }
          } catch {
            setUploadError('Image upload failed')
          } finally {
            setUploading(false)
          }
        })
        return true
      },
    },
  })

  // Sync external value changes (e.g. parent resets content)
  useEffect(() => {
    if (!editor) return
    if (isFirstMount.current) {
      isFirstMount.current = false
      return
    }
    editor.commands.setContent(value, { emitUpdate: false })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const handleImageUpload = useCallback(
    async (file: File) => {
      if (!editor) return
      setUploading(true)
      setUploadError(null)
      try {
        const url = await uploadImageToSupabase(file)
        if (url) {
          editor.chain().focus().setImage({ src: url, alt: file.name }).run()
        } else {
          setUploadError('Image upload failed')
        }
      } catch {
        setUploadError('Image upload failed')
      } finally {
        setUploading(false)
      }
    },
    [editor],
  )

  if (!editor) return null

  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      <Toolbar editor={editor} onImageUpload={handleImageUpload} />

      {uploading && (
        <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 border-b border-blue-100 text-[12px] text-blue-600">
          <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Uploading image…
        </div>
      )}
      {uploadError && (
        <div className="px-4 py-2 bg-red-50 border-b border-red-100 text-[12px] text-red-600">
          {uploadError}
        </div>
      )}

      <EditorContent editor={editor} />
    </div>
  )
}
