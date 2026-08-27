import type { Author } from '@/lib/cms/authors'
import { authorDisplayName } from '@/lib/cms/authors'

/**
 * Compact byline for the article hero.
 */
export default function ArticleByline({
  author,
  light = false,
}: {
  author: Author
  light?: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xs font-black ${
          light ? 'bg-[#3e91ce] text-white' : 'bg-[#30505b] text-white'
        }`}
        aria-hidden="true"
      >
        {author.initials}
      </span>
      <span className="leading-tight">
        <span className={`block text-sm font-bold ${light ? 'text-white' : 'text-[#30505b]'}`}>
          {authorDisplayName(author)}
        </span>
        <span className={`block text-xs ${light ? 'text-gray-400' : 'text-gray-500'}`}>{author.role}</span>
      </span>
    </div>
  )
}
