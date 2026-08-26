import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/sections/PageHero'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { SectionHeading } from '../components/ui/Typography'
import { kilimanjaroRoutes } from '../data/trekking'
import { images } from '../data/images'
import { useEnquiry } from '../contexts/EnquiryContext'
import { useSeo } from '../hooks/useSeo'

const ATTRIBUTES = [
  { key: 'duration', label: 'Duration' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'traffic', label: 'Trail traffic' },
  { key: 'acclimatisation', label: 'Acclimatisation' },
  { key: 'scenery', label: 'Scenery' },
  { key: 'bestFor', label: 'Best suited to' },
] as const

export function KilimanjaroRoutes() {
  useSeo({
    title: 'Kilimanjaro Route Comparison — Machame, Lemosho, Marangu & More',
    description:
      'An honest comparison of the six Kilimanjaro routes: duration, difficulty, acclimatisation, scenery and trail traffic, from a Tanzanian mountain team.',
    image: images.kilimanjaro,
  })

  const { openEnquiry } = useEnquiry()
  const [selected, setSelected] = useState<string>(kilimanjaroRoutes[0].id)
  const activeRoute = kilimanjaroRoutes.find((r) => r.id === selected) ?? kilimanjaroRoutes[0]

  return (
    <>
      <PageHero
        eyebrow="Kilimanjaro"
        title="Which route should you climb?"
        description="Six ways to Uhuru Peak. The honest answer is that the number of nights you spend acclimatising matters more than the route you choose — but the routes are genuinely different."
        image={images.kilimanjaro}
        imageAlt="The snow-capped summit of Kilimanjaro rising above a sea of cloud at sunrise"
        trail={[{ label: 'Home', to: '/' }, { label: 'Trekking', to: '/trekking' }, { label: 'Route comparison' }]}
        compact
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-shell px-5 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Side by side"
            title="Route comparison"
            description="Scroll horizontally on smaller screens. No route guarantees a summit — days on the mountain and a slow pace do the work."
          />

          <div className="mt-10 overflow-x-auto rounded-card border border-hairline bg-surface">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <caption className="sr-only">Comparison of the six main Kilimanjaro trekking routes</caption>
              <thead>
                <tr className="border-b border-hairline bg-ivory/60">
                  <th scope="col" className="p-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-stone">
                    Route
                  </th>
                  {ATTRIBUTES.map((attr) => (
                    <th
                      key={attr.key}
                      scope="col"
                      className="p-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-stone"
                    >
                      {attr.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {kilimanjaroRoutes.map((route) => (
                  <tr key={route.id} className="border-b border-hairline last:border-0 align-top">
                    <th scope="row" className="p-5">
                      <Link
                        to={`/trekking/${route.slug}`}
                        className="font-display text-[19px] text-espresso transition-colors duration-200 ease-premium hover:text-gold-dark"
                      >
                        {route.name}
                      </Link>
                      <span className="mt-2 block text-[13px] leading-relaxed text-stone">{route.character}</span>
                    </th>
                    {ATTRIBUTES.map((attr) => (
                      <td key={attr.key} className="p-5 text-[14px] leading-relaxed text-stone">
                        {attr.key === 'traffic' ? (
                          <Badge tone={route.traffic === 'Low' ? 'green' : route.traffic === 'Moderate' ? 'gold' : 'clay'}>
                            {route.traffic}
                          </Badge>
                        ) : (
                          route[attr.key]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section aria-labelledby="route-detail-heading" className="bg-surface">
        <div className="mx-auto max-w-shell px-5 py-16 lg:px-8 lg:py-20">
          <SectionHeading id="route-detail-heading" eyebrow="Look closer" title="Pick a route to see the profile" />

          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Select a Kilimanjaro route">
            {kilimanjaroRoutes.map((route) => (
              <button
                key={route.id}
                type="button"
                onClick={() => setSelected(route.id)}
                aria-pressed={selected === route.id}
                className={`rounded-pill border px-4 py-2 text-[13px] font-medium transition-[background-color,border-color,color] duration-200 ease-premium ${
                  selected === route.id
                    ? 'border-gold bg-gold/15 text-gold-dark'
                    : 'border-hairline bg-ivory text-stone hover:border-gold/50 hover:text-espresso'
                }`}
              >
                {route.name}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-8 rounded-card border border-hairline bg-ivory p-7 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h3 className="font-display text-[26px] text-espresso">{activeRoute.name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-stone">{activeRoute.character}</p>
              <dl className="mt-6 space-y-4">
                <div>
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold">Acclimatisation</dt>
                  <dd className="mt-1 text-[14px] leading-relaxed text-stone">{activeRoute.acclimatisation}</dd>
                </div>
                <div>
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold">Best suited to</dt>
                  <dd className="mt-1 text-[14px] leading-relaxed text-stone">{activeRoute.bestFor}</dd>
                </div>
              </dl>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button to={`/trekking/${activeRoute.slug}`} variant="secondary" size="sm">
                  Full route detail
                </Button>
                <Button size="sm" onClick={() => openEnquiry(`Kilimanjaro: ${activeRoute.name}`)}>
                  Build My Kilimanjaro Trip
                </Button>
              </div>
            </div>
            <ol className="space-y-4">
              {activeRoute.itinerary.map((day, i) => (
                <li key={day.day} className="flex gap-4 rounded-xl border border-hairline bg-surface p-4">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/12 text-[12px] font-semibold text-gold-dark"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span>
                    <span className="block text-[14px] font-medium text-espresso">{day.title}</span>
                    <span className="mt-1 block text-[13.5px] leading-relaxed text-stone">{day.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}
