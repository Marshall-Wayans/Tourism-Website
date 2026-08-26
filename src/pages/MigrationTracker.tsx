import React, { useState } from 'react'
import { InfoIcon, MapPinIcon } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { SectionHeading } from '../components/ui/Typography'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { Reveal } from '../components/ui/Reveal'
import { CtaBanner } from '../components/sections/CtaBanner'
import { migrationMonths } from '../data/migration'
import { images } from '../data/images'
import { useEnquiry } from '../contexts/EnquiryContext'
import { useSeo } from '../hooks/useSeo'

export function MigrationTracker() {
  useSeo({
    title: 'Great Migration Tracker — Where the Herds Are, Month by Month',
    description:
      'A month-by-month guide to where the wildebeest herds typically move across the Serengeti ecosystem, from the Ndutu calving grounds to the Mara River crossings.',
    image: images.migrationWide,
  })

  const { openEnquiry } = useEnquiry()
  const currentIndex = new Date().getMonth()
  const [selected, setSelected] = useState(currentIndex)
  const active = migrationMonths[selected]

  return (
    <>
      <PageHero
        eyebrow="Migration tracker"
        title="Following two million animals around one ecosystem"
        description="The migration has no timetable. It follows rain and grass. This is where the herds usually are, month by month — and how we position you to meet them."
        image={images.migrationWide}
        imageAlt="Long columns of wildebeest moving across the Serengeti beneath storm clouds and shafts of golden light"
        trail={[{ label: 'Home', to: '/' }, { label: 'Migration tracker' }]}
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-shell px-5 py-14 lg:px-8 lg:py-16">
          <div className="flex gap-4 rounded-card border border-clay/25 bg-clay/[0.06] p-6">
            <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-clay" aria-hidden="true" />
            <p className="text-[15px] leading-relaxed text-stone">
              These are typical seasonal patterns, not a schedule. Herd movements shift with rainfall, grass quality
              and river levels, and can vary by weeks in either direction. Our field team updates this page as they
              report from the plains.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="tracker-heading" className="bg-surface">
        <div className="mx-auto max-w-shell px-5 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            id="tracker-heading"
            eyebrow="Month by month"
            title="Choose a month"
            description="Select a month to see where the herds are typically found and what that means for your trip."
          />

          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Select a month">
            {migrationMonths.map((m, i) => (
              <button
                key={m.month}
                type="button"
                onClick={() => setSelected(i)}
                aria-pressed={selected === i}
                className={`rounded-pill border px-4 py-2 text-[13px] font-medium transition-[background-color,border-color,color] duration-200 ease-premium ${
                  selected === i
                    ? 'border-gold bg-gold/15 text-gold-dark'
                    : 'border-hairline bg-ivory text-stone hover:border-gold/50 hover:text-espresso'
                }`}
              >
                {m.short}
                {i === currentIndex && <span className="sr-only"> (this month)</span>}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="relative overflow-hidden rounded-card border border-hairline bg-ivory p-6">
              <p className="text-eyebrow font-semibold uppercase text-gold">The ecosystem</p>
              <div className="relative mt-4 aspect-[4/5] w-full rounded-xl bg-[#EDE3D0]">
                <svg viewBox="0 0 100 125" className="absolute inset-0 h-full w-full" role="img" aria-label={`Approximate herd position in ${active.month}: ${active.region}`}>
                  <path
                    d="M20 12 L72 8 L86 40 L78 78 L58 112 L28 108 L14 70 Z"
                    fill="#F4EEE1"
                    stroke="#B8894A"
                    strokeWidth="0.6"
                    strokeDasharray="2 1.5"
                  />
                  <path d="M30 22 L70 30" stroke="#1F6E52" strokeWidth="0.6" opacity="0.5" />
                  <path d="M22 58 L80 52" stroke="#1F6E52" strokeWidth="0.6" opacity="0.35" />
                  <text x="50" y="20" textAnchor="middle" fontSize="3.4" fill="#6B6459">
                    Mara River
                  </text>
                  <text x="30" y="50" textAnchor="middle" fontSize="3.4" fill="#6B6459">
                    Grumeti
                  </text>
                  <text x="54" y="96" textAnchor="middle" fontSize="3.4" fill="#6B6459">
                    Ndutu / southern plains
                  </text>
                  <circle
                    cx={active.position.x}
                    cy={active.position.y}
                    r="7"
                    fill="#B8894A"
                    opacity="0.22"
                    className="transition-all duration-300 ease-premium"
                  />
                  <circle
                    cx={active.position.x}
                    cy={active.position.y}
                    r="2.6"
                    fill="#C1562F"
                    className="transition-all duration-300 ease-premium"
                  />
                </svg>
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-stone">
                Schematic only — an indication of where the front of the migration usually sits within the Serengeti
                ecosystem in {active.month}.
              </p>
            </div>

            <div className="rounded-card border border-hairline bg-ivory p-7">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-[30px] leading-tight text-espresso">{active.month}</h3>
                {selected === currentIndex && <Badge tone="green">This month</Badge>}
              </div>
              <p className="mt-3 inline-flex items-center gap-2 text-[14px] font-medium text-gold-dark">
                <MapPinIcon className="h-4 w-4" aria-hidden="true" />
                {active.region}
              </p>
              <p className="mt-5 font-display text-[22px] leading-snug text-espresso">{active.headline}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-stone">{active.detail}</p>

              <dl className="mt-7 space-y-4 border-t border-hairline pt-6">
                <div>
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold">What stands out</dt>
                  <dd className="mt-1 text-[15px] leading-relaxed text-stone">{active.highlight}</dd>
                </div>
                <div>
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold">Best for</dt>
                  <dd className="mt-1 text-[15px] leading-relaxed text-stone">{active.bestFor}</dd>
                </div>
              </dl>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button onClick={() => openEnquiry(`Migration safari in ${active.month}`)}>
                  Ask About Availability
                </Button>
                <Button to="/safaris/serengeti-migration-safari" variant="secondary">
                  View the migration safari
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="year-heading" className="bg-ivory">
        <div className="mx-auto max-w-shell px-5 py-16 lg:px-8 lg:py-20">
          <SectionHeading id="year-heading" eyebrow="The full loop" title="A year on the plains" />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {migrationMonths.map((m, i) => (
              <Reveal key={m.month} as="li" delay={Math.min(i, 5) * 0.04} className="h-full">
                <button
                  type="button"
                  onClick={() => setSelected(i)}
                  className={`flex h-full w-full flex-col rounded-card border p-5 text-left transition-[border-color,box-shadow,transform] duration-300 ease-premium hover:-translate-y-1 hover:shadow-card ${
                    selected === i ? 'border-gold bg-gold/[0.07]' : 'border-hairline bg-surface hover:border-gold/40'
                  }`}
                >
                  <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold">{m.month}</span>
                  <span className="mt-2 font-display text-[19px] leading-snug text-espresso">{m.headline}</span>
                  <span className="mt-2 text-[14px] leading-relaxed text-stone">{m.region}</span>
                </button>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBanner
        headline="Be in the right part of the Serengeti"
        copy="Send us your dates and we'll tell you honestly where the herds are likely to be — and where to sleep to reach them."
        subject="Migration safari enquiry"
      />
    </>
  )
}
