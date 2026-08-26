import React, { useMemo, useState } from 'react'
import { SparklesIcon } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { ExperienceCard } from '../components/cards/ExperienceCard'
import { CtaBanner } from '../components/sections/CtaBanner'
import { EmptyState } from '../components/ui/EmptyState'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/Typography'
import { experiences } from '../data/experiences'
import { images } from '../data/images'
import { useSeo } from '../hooks/useSeo'

const CATEGORIES = ['All', 'Adventure', 'Wildlife', 'Culture', 'Nature', 'Relaxation'] as const

export function Experiences() {
  useSeo({
    title: 'Signature Tanzania Experiences',
    description:
      'Balloon safaris over the Serengeti, night game drives, walking safaris, Hadzabe bush walks, Stone Town heritage walks and Materuni waterfalls.',
    image: images.balloon,
  })

  const [category, setCategory] = useState<string>('All')
  const results = useMemo(
    () => (category === 'All' ? experiences : experiences.filter((e) => e.category === category)),
    [category],
  )

  return (
    <>
      <PageHero
        eyebrow="Unmissable moments"
        title="The mornings people talk about years later"
        description="Short experiences we build into longer journeys — a dawn balloon flight, an after-dark drive, a walk with people who read the bush better than anyone."
        image={images.balloon}
        imageAlt="A hot air balloon drifting low over the Serengeti plains at dawn"
        trail={[{ label: 'Home', to: '/' }, { label: 'Experiences' }]}
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-shell px-5 py-14 lg:px-8 lg:py-20">
          <SectionHeading eyebrow="Browse" title="Signature experiences" />

          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter experiences by category">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
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

          <p className="mt-6 text-[14px] text-stone" aria-live="polite">
            {results.length} {results.length === 1 ? 'experience' : 'experiences'}
          </p>

          {results.length === 0 ? (
            <div className="mt-8">
              <EmptyState
                icon={<SparklesIcon className="h-6 w-6" />}
                title="Nothing in that category yet."
                description="Tell a travel designer what kind of moment you're after and we'll suggest something."
                actionLabel="Plan My Trip"
                actionTo="/plan-my-trip"
              />
            </div>
          ) : (
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((experience, i) => (
                <Reveal key={experience.id} as="li" delay={Math.min(i, 5) * 0.05} className="h-full">
                  <div id={experience.slug} className="h-full scroll-mt-28">
                    <ExperienceCard experience={experience} />
                  </div>
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CtaBanner
        headline="Add a moment like this to your journey"
        copy="Most of these slot into a wider itinerary. Tell us which ones matter and we'll build the days around them."
        subject="Experience enquiry"
      />
    </>
  )
}
