import React, { useMemo, useState } from 'react'
import { MapIcon } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { DestinationCard } from '../components/cards/DestinationCard'
import { CtaBanner } from '../components/sections/CtaBanner'
import { EmptyState } from '../components/ui/EmptyState'
import { Reveal } from '../components/ui/Reveal'
import { destinations } from '../data/destinations'
import { images } from '../data/images'
import { useSeo } from '../hooks/useSeo'

const FILTERS = [
  { label: 'All', match: () => true },
  { label: 'National parks', match: (c: string) => c === 'park' },
  { label: 'Mountains', match: (c: string) => c === 'mountain' },
  { label: 'Coast & islands', match: (c: string) => c === 'coast' || c === 'island' },
  { label: 'Culture & heritage', match: (c: string) => c === 'culture' },
]

const CIRCUITS = ['All circuits', 'Northern Circuit', 'Southern Circuit', 'Coast & Islands', 'Western Circuit']

export function Destinations() {
  useSeo({
    title: 'Tanzania Destinations — Parks, Mountains, Islands',
    description:
      'Serengeti, Ngorongoro, Tarangire, Ruaha, Kilimanjaro, Zanzibar, Pemba and Mafia — every Tanzanian destination we guide, with the best months to visit each.',
    image: images.serengeti,
  })

  const [filter, setFilter] = useState('All')
  const [circuit, setCircuit] = useState('All circuits')

  const results = useMemo(() => {
    const f = FILTERS.find((x) => x.label === filter) ?? FILTERS[0]
    return destinations.filter(
      (d) => f.match(d.category) && (circuit === 'All circuits' || d.circuit === circuit),
    )
  }, [filter, circuit])

  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Twelve landscapes, one country"
        description="Northern plains, southern wilderness, two great mountains and an archipelago in the Indian Ocean. Start with the places that pull at you."
        image={images.serengeti}
        imageAlt="The Serengeti plains at sunrise with scattered acacia trees and grazing herds"
        trail={[{ label: 'Home', to: '/' }, { label: 'Destinations' }]}
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-shell px-5 py-14 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-4 border-b border-hairline pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter destinations by type">
              {FILTERS.map((f) => (
                <button
                  key={f.label}
                  type="button"
                  onClick={() => setFilter(f.label)}
                  aria-pressed={filter === f.label}
                  className={`rounded-pill border px-4 py-2 text-[13px] font-medium transition-[background-color,border-color,color] duration-200 ease-premium ${
                    filter === f.label
                      ? 'border-gold bg-gold/15 text-gold-dark'
                      : 'border-hairline bg-surface text-stone hover:border-gold/50 hover:text-espresso'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <label htmlFor="circuit-filter" className="text-[13px] font-medium text-stone">
                Circuit
              </label>
              <select
                id="circuit-filter"
                value={circuit}
                onChange={(e) => setCircuit(e.target.value)}
                className="rounded-pill border border-hairline bg-surface px-4 py-2 text-[13px] text-espresso focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/25"
              >
                {CIRCUITS.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          <p className="mt-6 text-[14px] text-stone" aria-live="polite">
            {results.length} {results.length === 1 ? 'destination' : 'destinations'}
          </p>

          {results.length === 0 ? (
            <div className="mt-8">
              <EmptyState
                icon={<MapIcon className="h-6 w-6" />}
                title="Nothing matches that combination yet."
                description="Try another circuit, or tell a travel designer what kind of landscape you have in mind."
                actionLabel="Plan My Trip"
                actionTo="/plan-my-trip"
              />
            </div>
          ) : (
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((destination, i) => (
                <Reveal key={destination.id} as="li" delay={Math.min(i, 5) * 0.05} className="h-full">
                  <DestinationCard destination={destination} eager={i < 3} />
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CtaBanner subject="Destination enquiry" />
    </>
  )
}
