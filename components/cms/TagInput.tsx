'use client'

import { useState } from 'react'

type TagInputProps = {
  label: string
  description?: string
  tags: string[]
  onChange: (tags: string[]) => void
  placeholder?: string
  availableOptions?: string[]
}

function normalizeTag(value: string) {
  return value.trim()
}

export default function TagInput({
  label,
  description,
  tags,
  onChange,
  placeholder = 'Type a tag and press Enter',
  availableOptions = [],
}: TagInputProps) {
  const [draft, setDraft] = useState('')

  function addTag(value: string) {
    const nextTag = normalizeTag(value)
    if (!nextTag) {
      return
    }

    if (tags.some((tag) => tag.toLowerCase() === nextTag.toLowerCase())) {
      setDraft('')
      return
    }

    onChange([...tags, nextTag])
    setDraft('')
  }

  function removeTag(value: string) {
    onChange(tags.filter((tag) => tag !== value))
  }

  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-sm font-semibold text-[#30505b]">{label}</h3>
        {description && <p className="mt-1 text-sm text-[#6e7d84]">{description}</p>}
      </div>

      {availableOptions.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {availableOptions.map((option) => {
            const active = tags.some((tag) => tag.toLowerCase() === option.toLowerCase())
            return (
              <button
                key={option}
                type="button"
                onClick={() => {
                  if (active) {
                    removeTag(tags.find((tag) => tag.toLowerCase() === option.toLowerCase()) ?? option)
                    return
                  }

                  addTag(option)
                }}
                className={`rounded-full border px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? 'border-[#30505b] bg-[#30505b] text-white'
                    : 'border-gray-200 bg-white text-[#30505b] hover:border-[#30505b] hover:bg-[#f4f8fa]'
                }`}
              >
                {option}
              </button>
            )
          })}
        </div>
      )}

      <div className="rounded-3xl border border-gray-200 bg-white p-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-2 rounded-full bg-[#eef6fb] px-3 py-2 text-sm font-semibold text-[#30505b]"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="text-[#6e7d84] transition hover:text-red-600"
                aria-label={`Remove ${tag}`}
              >
                ×
              </button>
            </span>
          ))}

          <input
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ',') {
                event.preventDefault()
                addTag(draft)
              } else if (event.key === 'Backspace' && !draft && tags.length) {
                event.preventDefault()
                removeTag(tags[tags.length - 1])
              }
            }}
            onBlur={() => addTag(draft)}
            className="min-w-[12rem] flex-1 border-none bg-transparent px-2 py-2 text-sm text-[#30505b] outline-none"
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  )
}
