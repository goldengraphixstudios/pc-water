import type { Author } from '@/lib/cms/authors'
import { authorDisplayName } from '@/lib/cms/authors'
import { socialProfiles } from '@/lib/social-links'

const FacebookIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0022 12z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.41-10.4a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h4v12H3v-12zM9.5 8.98h3.83v1.64h.05a4.2 4.2 0 013.78-2.08c4.04 0 4.79 2.66 4.79 6.12v6.32h-4v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-4v-12z" />
  </svg>
)

const XIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.9 2H22l-7.1 8.1L23.2 22h-6.5l-5.1-6.6L5.8 22H2.7l7.6-8.7L1.2 2h6.6l4.6 6.1L18.9 2zm-1.1 18.2h1.7L7.3 3.7H5.5l12.3 16.5z" />
  </svg>
)

const MailIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.9 5.3a2 2 0 002.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

/**
 * Author card + share row + follow row, shown beneath the article body.
 */
export default function ArticleFooterMeta({
  author,
  url,
  title,
}: {
  author: Author
  url: string
  title: string
}) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareTargets = [
    {
      label: 'Share on LinkedIn',
      short: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      Icon: LinkedInIcon,
    },
    {
      label: 'Share on Facebook',
      short: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      Icon: FacebookIcon,
    },
    {
      label: 'Share on X',
      short: 'X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      Icon: XIcon,
    },
    {
      label: 'Share by email',
      short: 'Email',
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      Icon: MailIcon,
    },
  ]

  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      {/* Author */}
      <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-[#F4F6F8] p-6 sm:flex-row sm:items-start">
        <span
          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#30505b] text-base font-black text-white"
          aria-hidden="true"
        >
          {author.initials}
        </span>
        <div className="min-w-0">
          <p className="mb-0.5 text-[11px] font-bold uppercase tracking-wider text-[#3e91ce]">Written by</p>
          <p className="text-base font-black text-[#30505b]">{authorDisplayName(author)}</p>
          <p className="mb-2 text-sm font-semibold text-gray-500">{author.role}</p>
          <p className="text-sm leading-relaxed text-gray-600">{author.bio}</p>
        </div>
      </div>

      {/* Share + follow */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wider text-gray-400">Share this article</p>
          <div className="flex flex-wrap gap-2">
            {shareTargets.map(({ label, short, href, Icon }) => (
              <a
                key={short}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2 text-xs font-semibold text-[#30505b] transition-colors hover:border-[#3e91ce] hover:text-[#3e91ce]"
              >
                <Icon />
                <span className="hidden sm:inline">{short}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wider text-gray-400">Follow PC Water</p>
          <div className="flex flex-wrap gap-2">
            <a
              href={socialProfiles.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PC Water Infrastructure on Facebook"
              className="inline-flex items-center gap-2 rounded-full bg-[#0d1b2a] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#30505b]"
            >
              <FacebookIcon />
              Facebook
            </a>
            <a
              href={socialProfiles.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PC Water Infrastructure on Instagram"
              className="inline-flex items-center gap-2 rounded-full bg-[#0d1b2a] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#30505b]"
            >
              <InstagramIcon />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
