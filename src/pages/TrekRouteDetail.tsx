import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShieldCheckIcon, BackpackIcon, ThermometerSunIcon, MessageCircleIcon } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { WishlistButton } from '../components/ui/WishlistButton'
import { SectionHeading } from '../components/ui/Typography'
import { Reveal } from '../components/ui/Reveal'
import { NotFound } from './NotFound'
import { trekRoutes, getRoute } from '../data/trekking'
import { company } from '../data/company'
import { useEnquiry } from '../contexts/EnquiryContext'
import { useSeo } from '../hooks/useSeo'

export function TrekRouteDetail() {
  const { slug = '' } = useParams()
  const route = getRoute(slug)
  const { openEnquiry } = useEnquiry()

  useSeo({
    title: route ? `${route.name} — ${route.duration} trek` : 'Route not found',
    description: route?.character ?? 'Guided trekking routes on Kilimanjaro, Meru, Lengai and Hanang.',
    image: route?.heroImage,
  })

  if (!route) return <NotFound />

  const related = trekRoutes.filter((r) => r.id !== route.id && r.mountain === route.mountain).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={route.mountain}
        title={route.name}
        description={route.character}
        image={route.heroImage}
        imageAlt={route.imageAlt}
        trail={[{ label: 'Home', to: '/' }, { label: 'Trekking', to: '/trekking' }, { label: route.name }]}
        meta={
          <div className="flex flex-wrap gap-2">
            <Badge tone="gold">{route.duration}</Badge>
            <Badge tone="neutral">{route.difficulty}</Badge>
            <Badge tone={route.traffic === 'Low' ? 'green' : 'clay'}>{route.traffic} traffic</Badge>
          </div>
        }
        actions={
          <>
            <Button size="lg" onClick={() => openEnquiry(`Trek: ${route.name}`)}>
              Enquire About This Route <span aria-hidden="true">→</span>
            </Button>
            <WishlistButton
              id={route.id}
              kind="route"
              label={route.name}
              variant="inline"
              className="border-white/50 text-white hover:border-white hover:bg-white hover:text-espresso"
            />
          </>
        }
      />

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-shell gap-14 px-5 py-16 lg:grid-cols-[1.6fr_1fr] lg:px-8 lg:py-20">
          <div>
            <h2 className="font-display text-section text-espresso">Route overview</h2>
            <dl className="mt-6 grid gap-6 sm:grid-cols-2">
              {[
                { label: 'Duration', value: route.duration },
                { label: 'Difficulty', value: route.difficulty },
                { label: 'Scenery', value: route.scenery },
                { label: 'Acclimatisation', value: route.acclimatisation },
                { label: 'Trail traffic', value: `${route.traffic}` },
                { label: 'Best suited to', value: route.bestFor },
              ].map((row) => (
                <div key={row.label}>
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold">{row.label}</dt>
                  <dd className="mt-1.5 text-[15px] leading-relaxed text-stone">{row.value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-14 flex items-center gap-2 font-display text-section text-espresso">
              <ThermometerSunIcon className="h-6 w-6 text-gold" aria-hidden="true" />
              Climate zones
            </h2>
            <ol className="mt-5 flex flex-wrap gap-2">
              {route.climateZones.map((zone, i) => (
                <li
                  key={zone}
                  className="rounded-pill border border-hairline bg-surface px-4 py-2 text-[13.5px] text-espresso"
                >
                  <span className="mr-1.5 text-gold">{i + 1}</span>
                  {zone}
                </li>
              ))}
            </ol>

            <h2 className="mt-14 font-display text-section text-espresso">Day by day</h2>
            <ol className="mt-8">
              {route.itinerary.map((day, i) => (
                <li key={day.day} className="relative flex gap-6 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-[12px] font-semibold text-gold-dark"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    {i < route.itinerary.length - 1 && (
                      <span className="mt-1 w-px flex-1 bg-hairline" aria-hidden="true" />
                    )}
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold">{day.day}</p>
                    <h3 className="mt-1 font-display text-[20px] text-espresso">{day.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-stone">{day.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-14 grid gap-10 sm:grid-cols-2">
              <div>
                <h2 className="flex items-center gap-2 font-display text-[24px] text-espresso">
                  <ShieldCheckIcon className="h-5 w-5 text-savannah" aria-hidden="true" />
                  Safety on the mountain
                </h2>
                <ul className="mt-4 space-y-3">
                  {route.safety.map((s) => (
                    <li key={s} className="flex gap-2.5 text-[15px] leading-relaxed text-stone">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-savannah" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="flex items-center gap-2 font-display text-[24px] text-espresso">
                  <BackpackIcon className="h-5 w-5 text-gold" aria-hidden="true" />
                  Packing essentials
                </h2>
                <ul className="mt-4 space-y-3">
                  {route.packing.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[15px] leading-relaxed text-stone">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="mt-14 font-display text-[24px] text-espresso">How to prepare</h2>
            <ul className="mt-4 space-y-3">
              {route.preparation.map((p) => (
                <li key={p} className="flex gap-2.5 text-[15px] leading-relaxed text-stone">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-card border border-hairline bg-surface p-7 shadow-card">
              <h2 className="font-display text-[22px] text-espresso">Plan this climb</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-stone">
                Tell us your dates and walking background. If a longer variant of this route would serve you better,
                we will say so.
              </p>
              <Button className="mt-5" fullWidth onClick={() => openEnquiry(`Trek: ${route.name}`)}>
                Build My Kilimanjaro Trip
              </Button>
              <Button
                className="mt-3"
                fullWidth
                variant="secondary"
                href={company.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
                Ask on WhatsApp
              </Button>
              <p className="mt-3 text-center text-[12.5px] text-stone">{company.responseTime}</p>
              <div className="mt-6 border-t border-hairline pt-5">
                <Link to="/kilimanjaro-routes" className="text-sm font-medium text-gold hover:text-gold-dark">
                  Compare all Kilimanjaro routes →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="related-routes" className="bg-surface">
          <div className="mx-auto max-w-shell px-5 py-20 lg:px-8">
            <SectionHeading id="related-routes" eyebrow="Other ways up" title={`More ${route.mountain} routes`} />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.id} as="li" delay={i * 0.05}>
                  <Link
                    to={`/trekking/${r.slug}`}
                    className="group flex h-full flex-col rounded-card border border-hairline bg-ivory p-6 transition-[border-color,box-shadow,transform] duration-300 ease-premium hover:-translate-y-1 hover:border-gold/40 hover:shadow-card"
                  >
                    <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold">
                      {r.duration}
                    </span>
                    <span className="mt-2 font-display text-[21px] text-espresso">{r.name}</span>
                    <span className="mt-2 text-[14px] leading-relaxed text-stone">{r.character}</span>
                    <span className="mt-auto pt-5 text-sm font-medium text-gold">View route →</span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}
