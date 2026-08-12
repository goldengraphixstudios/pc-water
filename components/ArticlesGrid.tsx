'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface Tag {
  slug: string
  name: string
}

interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  coverImageUrl?: string | null
  tags: Tag[]
  readTime?: string | null
  publishedAt?: string | null
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        href={`/resources/${article.slug}`}
        className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block h-full"
      >
        <div className="relative h-52 bg-gradient-to-br from-[#162538] via-[#30505b] to-[#3e91ce] overflow-hidden">
          {article.coverImageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={article.coverImageUrl}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-end p-4">
              <span className="text-white/20 text-5xl font-black leading-none select-none">PC</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/50 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="bg-[#2a72ad] text-white text-xs font-bold px-3 py-1 rounded-full">
              {article.tags[0]?.name ?? 'Insights'}
            </span>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-xs">
              {article.readTime ?? ''}
            </span>
            <span className="text-[#3e91ce] text-xs font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Read
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
          <h3 className="font-bold text-[#30505b] text-base mb-3 group-hover:text-[#3e91ce] transition-colors leading-snug">
            {article.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
        </div>
      </Link>
    </motion.div>
  )
}

export default function ArticlesGrid({ articles }: { articles: Article[] }) {
  const [activeTag, setActiveTag] = useState('All')

  const tags = useMemo(() => {
    const seen = new Set<string>()
    const all: string[] = ['All']
    for (const article of articles) {
      for (const tag of article.tags) {
        if (!seen.has(tag.name)) {
          seen.add(tag.name)
          all.push(tag.name)
        }
      }
    }
    return all
  }, [articles])

  const filtered = useMemo(
    () =>
      activeTag === 'All'
        ? articles
        : articles.filter((a) => a.tags.some((t) => t.name === activeTag)),
    [articles, activeTag]
  )

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeTag === tag
                ? 'bg-[#2a72ad] text-white shadow-md shadow-[#3e91ce]/30'
                : 'bg-white border border-gray-200 text-[#30505b] hover:border-[#3e91ce] hover:text-[#3e91ce]'
            }`}
          >
            {tag}
            {tag !== 'All' && (
              <span className={`ml-1.5 text-xs ${activeTag === tag ? 'text-white/70' : 'text-gray-400'}`}>
                ({articles.filter((a) => a.tags.some((t) => t.name === tag)).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTag}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.length > 0 ? (
            filtered.map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i} />
            ))
          ) : (
            <div className="col-span-3 text-center py-12 sm:py-16 text-gray-400">
              No articles in this category yet.
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
