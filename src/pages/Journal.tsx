import React, { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { NewspaperIcon } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { JournalCard } from '../components/cards/JournalCard'
import { EmptyState } from '../components/ui/EmptyState'
import { Reveal } from '../components/ui/Reveal'
import { CtaBanner } from '../components/sections/CtaBanner'
import { articles, journalCategories } from '../data/journal'
import { images } from '../data/images'
import { useSeo } from '../hooks/useSeo'

export function Journal() {
  useSeo({
    title: 'The Journal — Tanzania Travel Stories & Guides',
    description:
      'Migration updates from our guides, the best time to visit Tanzania, Kilimanjaro route comparisons, packing guides and notes from the field.',
    image: images.migrationWide,
  })

  const [params, setParams] = useSearchParams()
  const category = params.get('category') ?? 'All'

  const results = useMemo(
    () => (category === 'All' ? articles : articles.filter((a) => a.category === category)),
    [category],
  )

  const [featured, ...rest] = results

  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Notes from the field"
        description="Written by the guides and designers who spend their weeks in the parks, on the mountain and on the coast."
        image={images.migrationWide}
        imageAlt="Columns of wildebeest moving across the Serengeti beneath storm clouds and shafts of golden light"
        trail={[{ label: 'Home', to: '/' }, { label: 'Journal' }]}
        compact
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-shell px-5 py-14 lg:px-8 lg:py-20">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
            {journalCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setParams(c === 'All' ? {} : { category: c }, { replace: true })}
                aria-pressed={category === c}
                className={`rounded-pill border px-4 py-2 text-[13px] font-medium transition-[background-color,border-color,color] duration-200 ease-premium ${
                  category === c
                    ? 'border-gold bg-gold/15 text-gold-dark'
                    : 'border-hairline bg-surface text-stone hover:border-gold/50 hover:text-espresso'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {results.length === 0 ? (
            <div className="mt-10">
              <EmptyState
                icon={<NewspaperIcon className="h-6 w-6" />}
                title="No stories in this category yet."
                description="Our guides publish new field notes each month. Try another category in the meantime."
                actionLabel="Read all stories"
                actionTo="/journal"
              />
            </div>
          ) : (
            <>
              <div className="mt-10">
                <Reveal>
                  <JournalCard article={featured} featured />
                </Reveal>
              </div>
              {rest.length > 0 && (
                <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((article, i) => (
                    <Reveal key={article.id} as="li" delay={Math.min(i, 5) * 0.05} className="h-full">
                      <JournalCard article={article} />
                    </Reveal>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </section>

      <CtaBanner
        headline="Reading is the first stage of the trip"
        copy="When you're ready to turn it into dates and a route, a Tanzania travel designer is here."
        subject="Journal enquiry"
      />
    </>
  )
}
