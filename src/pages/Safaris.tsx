import React, { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SearchXIcon } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { TourCard } from '../components/cards/TourCard'
import { CtaBanner } from '../components/sections/CtaBanner'
import { EmptyState } from '../components/ui/EmptyState'
import { SkeletonGrid } from '../components/ui/Skeleton'
import { Reveal } from '../components/ui/Reveal'
import { tours } from '../data/tours'
import { images } from '../data/images'
import { useSeo } from '../hooks/useSeo'

const TYPES = ['All', 'Safari', 'Trek', 'Beach', 'Culture', 'Combination'] as const
const DURATIONS = ['Any length', 'Up to 6 days', '7–9 days', '10 days or more'] as const

export function Safaris() {
  useSeo({
    title: 'Tanzania Safaris & Tailor-Made Journeys',
    description:
      'Serengeti migration safaris, Ngorongoro and Tarangire journeys, Kilimanjaro treks and Zanzibar combinations — every itinerary tailored, every enquiry answered by a designer.',
    image: images.migrationCrossing,
  })

  const [params, setParams] = useSearchParams()
  const [type, setType] = useState<string>(params.get('type') ?? 'All')
  const [duration, setDuration] = useState<string>('Any length')
  const [familyOnly, setFamilyOnly] = useState(params.get('family') === 'true')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 320)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    const next = new URLSearchParams()
    if (type !== 'All') next.set('type', type)
    if (familyOnly) next.set('family', 'true')
    setParams(next, { replace: true })
  }, [type, familyOnly, setParams])

  const results = useMemo(
    () =>
      tours.filter((tour) => {
        if (type !== 'All' && tour.category !== type) return false
        if (familyOnly && !tour.familyFriendly) return false
        if (duration === 'Up to 6 days' && tour.days > 6) return false
        if (duration === '7–9 days' && (tour.days < 7 || tour.days > 9)) return false
        if (duration === '10 days or more' && tour.days < 10) return false
        return true
      }),
    [type, duration, familyOnly],
  )

  return (
    <>
      <PageHero
        eyebrow="Safaris & journeys"
        title="Journeys built around what you came for"
        description="Every itinerary here is a starting point. Tell us what matters most and your designer reshapes it — the route, the pace, the camps, the season."
        image={images.migrationCrossing}
        imageAlt="Wildebeest crossing the Mara River in the northern Serengeti with water spraying around them"
        trail={[{ label: 'Home', to: '/' }, { label: 'Safaris' }]}
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-shell px-5 py-14 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-5 border-b border-hairline pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter journeys by type">
              {TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  aria-pressed={type === t}
                  className={`rounded-pill border px-4 py-2 text-[13px] font-medium transition-[background-color,border-color,color] duration-200 ease-premium ${
                    type === t
                      ? 'border-gold bg-gold/15 text-gold-dark'
                      : 'border-hairline bg-surface text-stone hover:border-gold/50 hover:text-espresso'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="duration-filter" className="text-[13px] font-medium text-stone">
                  Length
                </label>
                <select
                  id="duration-filter"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="rounded-pill border border-hairline bg-surface px-4 py-2 text-[13px] text-espresso focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/25"
                >
                  {DURATIONS.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>
              <label className="flex cursor-pointer items-center gap-2 text-[13px] font-medium text-stone">
                <input
                  type="checkbox"
                  checked={familyOnly}
                  onChange={(e) => setFamilyOnly(e.target.checked)}
                  className="h-4 w-4 rounded border-hairline text-gold focus:ring-gold/40"
                />
                Family friendly
              </label>
            </div>
          </div>

          <p className="mt-6 text-[14px] text-stone" aria-live="polite">
            {loading ? 'Loading journeys…' : `${results.length} ${results.length === 1 ? 'journey' : 'journeys'}`}
          </p>

          <div className="mt-8">
            {loading ? (
              <SkeletonGrid count={6} />
            ) : results.length === 0 ? (
              <EmptyState
                icon={<SearchXIcon className="h-6 w-6" />}
                title="We couldn't find a journey matching that search."
                description="Loosen a filter, or tell a travel designer what you have in mind — most of our trips start as a conversation rather than a listing."
                actionLabel="Plan My Trip"
                actionTo="/plan-my-trip"
              />
            ) : (
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {results.map((tour, i) => (
                  <Reveal key={tour.id} as="li" delay={Math.min(i, 5) * 0.05} className="h-full">
                    <TourCard tour={tour} eager={i < 3} />
                  </Reveal>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <CtaBanner subject="Safari enquiry" />
    </>
  )
}
