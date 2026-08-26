import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ClockIcon, UsersIcon, MapPinIcon, CheckIcon, MessageCircleIcon } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { Button } from '../components/ui/Button'
import { Badge, Rating } from '../components/ui/Badge'
import { WishlistButton } from '../components/ui/WishlistButton'
import { SectionHeading } from '../components/ui/Typography'
import { TourCard } from '../components/cards/TourCard'
import { Reveal } from '../components/ui/Reveal'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { NotFound } from './NotFound'
import { tours, getTour } from '../data/tours'
import { destinations } from '../data/destinations'
import { company } from '../data/company'
import { useEnquiry } from '../contexts/EnquiryContext'
import { useSeo } from '../hooks/useSeo'

export function TourDetail() {
  const { slug = '' } = useParams()
  const tour = getTour(slug)
  const { openEnquiry } = useEnquiry()

  useSeo({
    title: tour ? `${tour.title} — ${tour.duration} in Tanzania` : 'Journey not found',
    description: tour?.description ?? 'Tailor-made Tanzania journeys designed around each traveller.',
    image: tour?.heroImage,
  })

  if (!tour) return <NotFound />

  const related = tours.filter((t) => t.id !== tour.id && t.category === tour.category).slice(0, 3)
  const tourDestinations = tour.destinations
    .map((s) => destinations.find((d) => d.slug === s))
    .filter((d): d is (typeof destinations)[number] => Boolean(d))

  return (
    <>
      <PageHero
        eyebrow={tour.category}
        title={tour.title}
        description={tour.description}
        image={tour.heroImage}
        imageAlt={tour.imageAlt}
        trail={[{ label: 'Home', to: '/' }, { label: 'Safaris', to: '/safaris' }, { label: tour.title }]}
        meta={
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-white/85">
            <span className="inline-flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-gold" aria-hidden="true" />
              {tour.duration}
            </span>
            <span className="inline-flex items-center gap-2">
              <UsersIcon className="h-4 w-4 text-gold" aria-hidden="true" />
              {tour.groupSize}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPinIcon className="h-4 w-4 text-gold" aria-hidden="true" />
              {tour.location}
            </span>
            <Badge tone="gold">{tour.badge}</Badge>
          </div>
        }
        actions={
          <>
            <Button size="lg" onClick={() => openEnquiry(`Journey: ${tour.title}`)}>
              Enquire About This Journey <span aria-hidden="true">→</span>
            </Button>
            <Button size="lg" variant="light" onClick={() => openEnquiry(`Tailor: ${tour.title}`)}>
              Tailor This Trip
            </Button>
            <WishlistButton
              id={tour.id}
              kind="tour"
              label={tour.title}
              variant="inline"
              className="border-white/50 text-white hover:border-white hover:bg-white hover:text-espresso"
            />
          </>
        }
      />

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-shell gap-14 px-5 py-16 lg:grid-cols-[1.6fr_1fr] lg:px-8 lg:py-20">
          <div>
            <h2 className="font-display text-section text-espresso">Overview</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-stone">{tour.overview}</p>

            <h2 className="mt-14 font-display text-section text-espresso">Day by day</h2>
            <ol className="mt-8 space-y-0">
              {tour.itinerary.map((day, i) => (
                <li key={day.day} className="relative flex gap-6 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-[12px] font-semibold text-gold-dark"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    {i < tour.itinerary.length - 1 && <span className="mt-1 w-px flex-1 bg-hairline" aria-hidden="true" />}
                  </div>
                  <div className="pb-2">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold">{day.day}</p>
                    <h3 className="mt-1 font-display text-[20px] text-espresso">{day.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-stone">{day.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="mt-14 font-display text-section text-espresso">What&rsquo;s included</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {tour.included.map((item) => (
                <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed text-stone">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-savannah" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-14 font-display text-section text-espresso">Practical information</h2>
            <dl className="mt-5 divide-y divide-hairline border-y border-hairline">
              {tour.practical.map((row) => (
                <div key={row.label} className="grid gap-1 py-4 sm:grid-cols-[200px_1fr]">
                  <dt className="text-[14px] font-medium text-espresso">{row.label}</dt>
                  <dd className="text-[15px] leading-relaxed text-stone">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-card border border-hairline bg-surface p-7 shadow-card">
              <h2 className="font-display text-[22px] text-espresso">Highlights</h2>
              <ul className="mt-4 space-y-3">
                {tour.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-[14px] leading-relaxed text-stone">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>

              {tourDestinations.length > 0 && (
                <div className="mt-6 border-t border-hairline pt-5">
                  <p className="text-eyebrow font-semibold uppercase text-gold">Where you go</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {tourDestinations.map((d) => (
                      <li key={d.id}>
                        <Link
                          to={`/destinations/${d.slug}`}
                          className="inline-flex rounded-pill border border-hairline px-3 py-1.5 text-[13px] text-espresso transition-colors duration-200 ease-premium hover:border-gold hover:text-gold-dark"
                        >
                          {d.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6 border-t border-hairline pt-5">
                <Rating value={tour.rating} label="guide rating" />
                <Button className="mt-5" fullWidth onClick={() => openEnquiry(`Availability: ${tour.title}`)}>
                  Request Availability
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
                  Ask a quick question
                </Button>
                <p className="mt-3 text-center text-[12.5px] text-stone">{company.responseTime}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="related-tours" className="bg-surface">
          <div className="mx-auto max-w-shell px-5 py-20 lg:px-8">
            <SectionHeading id="related-tours" eyebrow="You might also like" title="Related journeys" />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t, i) => (
                <Reveal key={t.id} as="li" delay={i * 0.05} className="h-full">
                  <TourCard tour={t} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      <TestimonialsSection limit={3} />
    </>
  )
}
