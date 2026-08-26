import React, { useMemo, useState } from 'react'
import { InfoIcon } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { TestimonialCard } from '../components/cards/TestimonialCard'
import { SectionHeading } from '../components/ui/Typography'
import { Reveal } from '../components/ui/Reveal'
import { CtaBanner } from '../components/sections/CtaBanner'
import { testimonials } from '../data/social'
import { images } from '../data/images'
import { useSeo } from '../hooks/useSeo'

const FILTERS = ['All', 'Safari', 'Trek', 'Beach', 'Family', 'Honeymoon', 'Culture'] as const

export function Testimonials() {
  useSeo({
    title: 'Traveller Reviews',
    description:
      'Verified traveller reviews of Amani Tanzania safaris, Kilimanjaro treks and Zanzibar journeys. Published only with permission.',
    image: images.tileSafari,
  })

  const [filter, setFilter] = useState<string>('All')
  const results = useMemo(
    () => (filter === 'All' ? testimonials : testimonials.filter((t) => t.tripType === filter)),
    [filter],
  )

  return (
    <>
      <PageHero
        eyebrow="Loved by travellers worldwide"
        title="What travellers say"
        description="We publish reviews only when the traveller has given permission and the trip can be verified. Until then, these cards show the themes we hear most."
        image={images.tileSafari}
        imageAlt="Travellers watching a lioness walk past their safari vehicle on the golden plains"
        trail={[{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'Testimonials' }]}
        compact
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-shell px-5 py-16 lg:px-8 lg:py-20">
          <div className="mb-10 flex gap-4 rounded-card border border-gold/25 bg-gold/[0.07] p-6">
            <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
            <p className="text-[15px] leading-relaxed text-stone">
              Every card below is a placeholder describing a type of feedback, not a real review. Aggregate ratings and
              review counts will appear once the company&rsquo;s review platform is connected.
            </p>
          </div>

          <SectionHeading eyebrow="Filter" title="By trip type" />

          <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter reviews by trip type">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-pill border px-4 py-2 text-[13px] font-medium transition-[background-color,border-color,color] duration-200 ease-premium ${
                  filter === f
                    ? 'border-gold bg-gold/15 text-gold-dark'
                    : 'border-hairline bg-surface text-stone hover:border-gold/50 hover:text-espresso'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {results.map((t, i) => (
              <Reveal key={t.id} as="li" delay={Math.min(i, 5) * 0.05} className="h-full">
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner subject="Testimonials — enquiry" />
    </>
  )
}
