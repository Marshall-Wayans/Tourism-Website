import React from 'react'
import { Link } from 'react-router-dom'
import { WishlistButton } from '../ui/WishlistButton'
import { Badge } from '../ui/Badge'
import type { Article } from '../../types'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function JournalCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-card border border-hairline bg-surface shadow-card transition-[box-shadow,transform] duration-300 ease-premium hover:-translate-y-1 hover:shadow-lift ${
        featured ? 'lg:flex-row' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? 'aspect-[16/10] lg:aspect-auto lg:w-1/2' : 'aspect-[16/10]'}`}>
        <img
          src={article.image}
          alt={article.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.05]"
        />
        <div className="absolute left-4 top-4">
          <Badge tone="dark">{article.category}</Badge>
        </div>
        <div className="absolute right-4 top-4 z-10">
          <WishlistButton id={article.id} kind="article" label={article.title} />
        </div>
      </div>
      <div className={`flex flex-1 flex-col p-6 ${featured ? 'lg:justify-center lg:p-10' : ''}`}>
        <p className="text-[12px] uppercase tracking-[0.12em] text-stone">
          {formatDate(article.date)} · {article.readTime}
        </p>
        <h3 className={`mt-3 font-display leading-snug text-espresso ${featured ? 'text-[28px]' : 'text-[21px]'}`}>
          <Link
            to={`/journal/${article.slug}`}
            className="transition-colors duration-200 ease-premium after:absolute after:inset-0 after:content-[''] hover:text-gold-dark"
          >
            {article.title}
          </Link>
        </h3>
        <p className="mt-2.5 text-[14px] leading-relaxed text-stone">{article.excerpt}</p>
        <div className="mt-auto pt-5">
          <span className="relative z-10 inline-flex items-center gap-1.5 border-t border-hairline pt-4 text-sm font-medium text-gold transition-transform duration-200 ease-premium group-hover:translate-x-0.5">
            Read the story
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </article>
  )
}
