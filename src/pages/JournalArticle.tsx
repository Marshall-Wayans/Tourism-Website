import React from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Badge } from '../components/ui/Badge'
import { WishlistButton } from '../components/ui/WishlistButton'
import { SectionHeading } from '../components/ui/Typography'
import { JournalCard } from '../components/cards/JournalCard'
import { CtaBanner } from '../components/sections/CtaBanner'
import { Reveal } from '../components/ui/Reveal'
import { NotFound } from './NotFound'
import { articles, getArticle } from '../data/journal'
import { useSeo } from '../hooks/useSeo'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function JournalArticle() {
  const { slug = '' } = useParams()
  const article = getArticle(slug)

  useSeo({
    title: article?.title ?? 'Story not found',
    description: article?.excerpt ?? 'Tanzania travel stories, guides and migration updates.',
    image: article?.image,
  })

  if (!article) return <NotFound />

  const related = articles.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 3)
  const more = related.length ? related : articles.filter((a) => a.id !== article.id).slice(0, 3)

  return (
    <>
      <article>
        <header className="bg-ivory">
          <div className="mx-auto max-w-3xl px-5 pb-10 pt-12 lg:pt-16">
            <Breadcrumbs
              trail={[{ label: 'Home', to: '/' }, { label: 'Journal', to: '/journal' }, { label: article.category }]}
            />
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge tone="gold">{article.category}</Badge>
              <span className="text-[13px] text-stone">
                {formatDate(article.date)} · {article.readTime} · {article.author}
              </span>
            </div>
            <h1 className="mt-5 font-display text-hero text-espresso">{article.title}</h1>
            <p className="mt-5 text-[18px] leading-relaxed text-stone">{article.excerpt}</p>
            <div className="mt-7">
              <WishlistButton id={article.id} kind="article" label={article.title} variant="inline" />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-5">
          <img
            src={article.image}
            alt={article.imageAlt}
            fetchPriority="high"
            decoding="async"
            className="aspect-[16/9] w-full rounded-card object-cover shadow-card"
          />
        </div>

        <div className="bg-ivory">
          <div className="mx-auto max-w-3xl px-5 py-14 lg:py-20">
            {article.content.map((block, i) => (
              <section key={i} className="mb-9 last:mb-0">
                {block.heading && (
                  <h2 className="mb-3 font-display text-[26px] leading-snug text-espresso">{block.heading}</h2>
                )}
                <p className="text-[17px] leading-[1.75] text-stone">{block.body}</p>
              </section>
            ))}

            <div className="mt-12 border-t border-hairline pt-6">
              <h2 className="text-eyebrow font-semibold uppercase text-gold">Tagged</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-pill border border-hairline bg-surface px-3.5 py-1.5 text-[13px] text-stone"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>

      <section aria-labelledby="more-stories" className="bg-surface">
        <div className="mx-auto max-w-shell px-5 py-20 lg:px-8">
          <SectionHeading id="more-stories" eyebrow="Keep reading" title="More from the Journal" />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((a, i) => (
              <Reveal key={a.id} as="li" delay={i * 0.05} className="h-full">
                <JournalCard article={a} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner subject={`Journal: ${article.title}`} />
    </>
  )
}
