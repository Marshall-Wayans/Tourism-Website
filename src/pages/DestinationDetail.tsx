import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { CalendarIcon, MessageCircleIcon, PawPrintIcon } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { Button } from '../components/ui/Button'
import { Badge, Rating } from '../components/ui/Badge'
import { WishlistButton } from '../components/ui/WishlistButton'
import { SectionHeading } from '../components/ui/Typography'
import { TourCard } from '../components/cards/TourCard'
import { ExperienceCard } from '../components/cards/ExperienceCard'
import { DestinationCard } from '../components/cards/DestinationCard'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { Reveal } from '../components/ui/Reveal'
import { NotFound } from './NotFound'
import { destinations, getDestination } from '../data/destinations'
import { tours } from '../data/tours'
import { experiences } from '../data/experiences'
import { company } from '../data/company'
import { useEnquiry } from '../contexts/EnquiryContext'
import { useSeo } from '../hooks/useSeo'

export function DestinationDetail() {
  const { slug = '' } = useParams()
  const destination = getDestination(slug)
  const { openEnquiry } = useEnquiry()

  useSeo({
    title: destination ? `${destination.name} — When to Go & What to See` : 'Destination not found',
    description:
      destination?.intro.slice(0, 155) ??
      'Explore Tanzania destinations with a locally owned travel studio based in Arusha.',
    image: destination?.heroImage,
  })

  if (!destination) return <NotFound />

  const relatedTours = tours.filter((t) => t.destinations.includes(destination.slug))
  const relatedExperiences = experiences.filter((e) => destination.experiences.includes(e.id))
  const relatedDestinations = destination.related
    .map((s) => destinations.find((d) => d.slug === s))
    .filter((d): d is (typeof destinations)[number] => Boolean(d))

  return (
    <>
      <PageHero
        eyebrow={destination.region}
        title={`Discover ${destination.name}`}
        description={destination.tagline}
        image={destination.heroImage}
        imageAlt={destination.imageAlt}
        trail={[
          { label: 'Home', to: '/' },
          { label: 'Destinations', to: '/destinations' },
          { label: destination.name },
        ]}
        meta={
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="gold">{destination.circuit}</Badge>
            <Badge tone="neutral">{destination.adventureLevel} pace</Badge>
            {destination.familyFriendly && <Badge tone="green">Family friendly</Badge>}
          </div>
        }
        actions={
          <>
            <Button size="lg" onClick={() => openEnquiry(`Destination: ${destination.name}`)}>
              Enquire Now <span aria-hidden="true">→</span>
            </Button>
            <Button
              size="lg"
              variant="light"
              href={company.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
              Ask on WhatsApp
            </Button>
            <WishlistButton
              id={destination.id}
              kind="destination"
              label={destination.name}
              variant="inline"
              className="border-white/50 text-white hover:border-white hover:bg-white hover:text-espresso"
            />
          </>
        }
      />

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-shell gap-14 px-5 py-16 lg:grid-cols-[1.6fr_1fr] lg:px-8 lg:py-20">
          <div>
            <p className="font-display text-[22px] leading-relaxed text-espresso">{destination.intro}</p>

            <h2 className="mt-12 font-display text-section text-espresso">Why visit</h2>
            <ul className="mt-5 space-y-4">
              {destination.whyVisit.map((point) => (
                <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-stone">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            {destination.wildlife.length > 0 && (
              <>
                <h2 className="mt-12 font-display text-section text-espresso">What you might see</h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {destination.wildlife.map((animal) => (
                    <li
                      key={animal}
                      className="inline-flex items-center gap-1.5 rounded-pill border border-hairline bg-surface px-4 py-2 text-[13.5px] text-espresso"
                    >
                      <PawPrintIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                      {animal}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-card border border-hairline bg-surface p-7 shadow-card">
              <h2 className="font-display text-[22px] text-espresso">Best time to visit</h2>
              <ul className="mt-5 space-y-5">
                {destination.bestTime.map((slot) => (
                  <li key={slot.window}>
                    <p className="flex items-center gap-2 text-[14px] font-semibold text-espresso">
                      <CalendarIcon className="h-4 w-4 text-gold" aria-hidden="true" />
                      {slot.window}
                    </p>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-stone">{slot.note}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-7 border-t border-hairline pt-5">
                <Rating value={destination.rating} label="guide rating" />
                <Button
                  className="mt-5"
                  fullWidth
                  onClick={() => openEnquiry(`Destination: ${destination.name}`)}
                >
                  Tailor This Trip
                </Button>
                <p className="mt-3 text-center text-[12.5px] text-stone">{company.responseTime}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {relatedExperiences.length > 0 && (
        <section aria-labelledby="dest-experiences" className="bg-surface">
          <div className="mx-auto max-w-shell px-5 py-20 lg:px-8">
            <SectionHeading
              id="dest-experiences"
              eyebrow="Unmissable moments"
              title={`Experiences in ${destination.name}`}
            />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedExperiences.map((experience, i) => (
                <Reveal key={experience.id} as="li" delay={i * 0.05} className="h-full">
                  <ExperienceCard experience={experience} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {relatedTours.length > 0 && (
        <section aria-labelledby="dest-tours" className="bg-ivory">
          <div className="mx-auto max-w-shell px-5 py-20 lg:px-8">
            <SectionHeading id="dest-tours" eyebrow="Journeys that include it" title="Recommended tours" />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTours.map((tour, i) => (
                <Reveal key={tour.id} as="li" delay={i * 0.05} className="h-full">
                  <TourCard tour={tour} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {relatedDestinations.length > 0 && (
        <section aria-labelledby="dest-related" className="bg-surface">
          <div className="mx-auto max-w-shell px-5 py-20 lg:px-8">
            <SectionHeading
              id="dest-related"
              eyebrow="Nearby"
              title="Pairs well with"
              action={
                <Link to="/destinations" className="text-sm font-medium text-gold hover:text-gold-dark">
                  All destinations →
                </Link>
              }
            />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedDestinations.map((related, i) => (
                <Reveal key={related.id} as="li" delay={i * 0.05} className="h-full">
                  <DestinationCard destination={related} />
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
