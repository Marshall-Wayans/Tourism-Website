import React from 'react'
import { Link } from 'react-router-dom'
import { HeartIcon, Trash2Icon } from 'lucide-react'
import { SectionHeading } from '../components/ui/Typography'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { EmptyState } from '../components/ui/EmptyState'
import { Button } from '../components/ui/Button'
import { DestinationCard } from '../components/cards/DestinationCard'
import { TourCard } from '../components/cards/TourCard'
import { ExperienceCard } from '../components/cards/ExperienceCard'
import { JournalCard } from '../components/cards/JournalCard'
import { useWishlist } from '../contexts/WishlistContext'
import { destinations } from '../data/destinations'
import { tours } from '../data/tours'
import { experiences } from '../data/experiences'
import { articles } from '../data/journal'
import { trekRoutes } from '../data/trekking'
import { useSeo } from '../hooks/useSeo'

export function Wishlist() {
  useSeo({
    title: 'Saved Journeys',
    description: 'The Tanzanian places, journeys, experiences and stories you have saved.',
  })

  const { items, clear } = useWishlist()

  const savedDestinations = destinations.filter((d) => items.some((i) => i.id === d.id))
  const savedTours = tours.filter((t) => items.some((i) => i.id === t.id))
  const savedExperiences = experiences.filter((e) => items.some((i) => i.id === e.id))
  const savedArticles = articles.filter((a) => items.some((i) => i.id === a.id))
  const savedRoutes = trekRoutes.filter((r) => items.some((i) => i.id === r.id))

  return (
    <div className="bg-ivory">
      <div className="mx-auto max-w-shell px-5 py-12 lg:px-8 lg:py-16">
        <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'Saved' }]} />

        <div className="mt-6">
          <SectionHeading
            eyebrow="Your list"
            title="Saved journeys"
            description="Everything you have hearted, kept on this device. Sign in to sync it to your account."
            action={
              items.length > 0 ? (
                <Button variant="ghost" size="sm" onClick={clear}>
                  <Trash2Icon className="h-4 w-4" aria-hidden="true" />
                  Clear all
                </Button>
              ) : undefined
            }
          />
        </div>

        {items.length === 0 ? (
          <div className="mt-12">
            <EmptyState
              icon={<HeartIcon className="h-6 w-6" />}
              title="Your Tanzania story starts here."
              description="Start exploring and save the places that call to you — parks, journeys, experiences and stories all live here."
              actionLabel="Explore Tanzania"
              actionTo="/destinations"
              secondary={
                <Button to="/build-my-trip" variant="secondary" size="md">
                  Build My Trip
                </Button>
              }
            />
          </div>
        ) : (
          <div className="mt-12 space-y-16">
            {savedDestinations.length > 0 && (
              <section aria-labelledby="saved-destinations">
                <h2 id="saved-destinations" className="font-display text-[26px] text-espresso">
                  Destinations
                </h2>
                <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {savedDestinations.map((d) => (
                    <li key={d.id} className="h-full">
                      <DestinationCard destination={d} />
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {savedTours.length > 0 && (
              <section aria-labelledby="saved-tours">
                <h2 id="saved-tours" className="font-display text-[26px] text-espresso">
                  Journeys
                </h2>
                <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {savedTours.map((t) => (
                    <li key={t.id} className="h-full">
                      <TourCard tour={t} />
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {savedRoutes.length > 0 && (
              <section aria-labelledby="saved-routes">
                <h2 id="saved-routes" className="font-display text-[26px] text-espresso">
                  Trekking routes
                </h2>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {savedRoutes.map((r) => (
                    <li key={r.id}>
                      <Link
                        to={`/trekking/${r.slug}`}
                        className="flex h-full flex-col rounded-card border border-hairline bg-surface p-6 transition-[border-color,transform] duration-200 ease-premium hover:-translate-y-0.5 hover:border-gold/40"
                      >
                        <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold">
                          {r.mountain} · {r.duration}
                        </span>
                        <span className="mt-2 font-display text-[20px] text-espresso">{r.name}</span>
                        <span className="mt-2 text-[14px] leading-relaxed text-stone">{r.character}</span>
                        <span className="mt-auto pt-4 text-sm font-medium text-gold">View route →</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {savedExperiences.length > 0 && (
              <section aria-labelledby="saved-experiences">
                <h2 id="saved-experiences" className="font-display text-[26px] text-espresso">
                  Experiences
                </h2>
                <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {savedExperiences.map((e) => (
                    <li key={e.id} className="h-full">
                      <ExperienceCard experience={e} />
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {savedArticles.length > 0 && (
              <section aria-labelledby="saved-articles">
                <h2 id="saved-articles" className="font-display text-[26px] text-espresso">
                  Stories
                </h2>
                <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {savedArticles.map((a) => (
                    <li key={a.id} className="h-full">
                      <JournalCard article={a} />
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="rounded-card border border-hairline bg-surface p-8 text-center">
              <h2 className="font-display text-[24px] text-espresso">Ready to turn this into a trip?</h2>
              <p className="mx-auto mt-2 max-w-lg text-[15px] leading-relaxed text-stone">
                Send your saved list to a travel designer and we&rsquo;ll shape it into a single itinerary.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button to="/plan-my-trip">Send my list to a designer</Button>
                <Button to="/my-trips" variant="secondary">
                  Go to My Trips
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
