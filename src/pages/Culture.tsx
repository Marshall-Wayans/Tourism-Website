import React from 'react'
import { InfoIcon } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { SectionHeading } from '../components/ui/Typography'
import { Button } from '../components/ui/Button'
import { TourCard } from '../components/cards/TourCard'
import { CtaBanner } from '../components/sections/CtaBanner'
import { Reveal } from '../components/ui/Reveal'
import { cultureEntries } from '../data/culture'
import { tours } from '../data/tours'
import { images } from '../data/images'
import { useEnquiry } from '../contexts/EnquiryContext'
import { useSeo } from '../hooks/useSeo'

export function Culture() {
  useSeo({
    title: 'Tanzanian Culture — Maasai, Hadzabe, Datoga & Olduvai Gorge',
    description:
      'Community visits arranged directly with Maasai, Hadzabe and Datoga families, plus Olduvai Gorge — the Cradle of Mankind — in the Ngorongoro Conservation Area.',
    image: images.tileCulture,
  })

  const { openEnquiry } = useEnquiry()
  const culturalTours = tours.filter((t) => t.category === 'Culture')

  return (
    <>
      <PageHero
        eyebrow="Culture & heritage"
        title="The people whose land this is"
        description="Cultural visits go wrong when they are arranged for travellers rather than with communities. Everything here is agreed in advance, hosted by the community, and paid directly to them."
        image={images.tileCulture}
        imageAlt="Maasai community members in red shukas walking across open savannah at golden hour"
        trail={[{ label: 'Home', to: '/' }, { label: 'Culture' }]}
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-shell px-5 py-14 lg:px-8 lg:py-16">
          <div className="flex gap-4 rounded-card border border-gold/25 bg-gold/[0.07] p-6">
            <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
            <p className="text-[15px] leading-relaxed text-stone">
              These are living communities, not attractions. Visits happen at times the households choose, photography
              is always asked for first, and fees go directly to the people hosting you. If a visit does not suit a
              community on your dates, we will say so rather than arrange it anyway.
            </p>
          </div>
        </div>
      </section>

      {cultureEntries.map((entry, index) => (
        <section
          key={entry.id}
          id={entry.id}
          aria-labelledby={`culture-${entry.id}`}
          className={`scroll-mt-24 ${index % 2 === 0 ? 'bg-surface' : 'bg-ivory'}`}
        >
          <div className="mx-auto max-w-shell px-5 py-16 lg:px-8 lg:py-20">
            <div className={`grid gap-12 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <Reveal>
                <img
                  src={entry.image}
                  alt={entry.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full rounded-card object-cover shadow-card"
                />
              </Reveal>
              <Reveal delay={0.06}>
                <p className="text-eyebrow font-semibold uppercase text-gold">{entry.region}</p>
                <h2 id={`culture-${entry.id}`} className="mt-3 font-display text-section text-espresso">
                  {entry.name}
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-stone">{entry.summary}</p>
                <dl className="mt-7 space-y-5">
                  {entry.topics.map((topic) => (
                    <div key={topic.title}>
                      <dt className="font-display text-[18px] text-espresso">{topic.title}</dt>
                      <dd className="mt-1.5 text-[15px] leading-relaxed text-stone">{topic.body}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-7 rounded-xl border border-hairline bg-ivory px-4 py-3 text-[13.5px] leading-relaxed text-stone">
                  <span className="font-medium text-espresso">Visiting etiquette:</span> {entry.etiquette}
                </p>
                <Button className="mt-6" size="sm" onClick={() => openEnquiry(`Cultural visit: ${entry.name}`)}>
                  Ask about visiting
                </Button>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {culturalTours.length > 0 && (
        <section className="bg-surface">
          <div className="mx-auto max-w-shell px-5 py-16 lg:px-8 lg:py-20">
            <SectionHeading eyebrow="Journeys" title="Culture-led itineraries" />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {culturalTours.map((tour, i) => (
                <Reveal key={tour.id} as="li" delay={i * 0.05} className="h-full">
                  <TourCard tour={tour} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBanner
        headline="Travel that reaches the people who live here"
        copy="Tell us what you would like to understand, and we'll arrange it with the communities we work with year-round."
        subject="Cultural journey enquiry"
      />
    </>
  )
}
