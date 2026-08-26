import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import {
  BriefcaseIcon,
  BellIcon,
  MapIcon,
  ImageIcon,
  LogOutIcon,
  ClockIcon,
} from 'lucide-react'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { EmptyState } from '../components/ui/EmptyState'
import { DestinationCard } from '../components/cards/DestinationCard'
import { TourCard } from '../components/cards/TourCard'
import { ExperienceCard } from '../components/cards/ExperienceCard'
import { JournalCard } from '../components/cards/JournalCard'
import { useAccount } from '../contexts/AccountContext'
import { useWishlist } from '../contexts/WishlistContext'
import { destinations } from '../data/destinations'
import { tours } from '../data/tours'
import { experiences } from '../data/experiences'
import { articles } from '../data/journal'
import { useSeo } from '../hooks/useSeo'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export function MyTrips() {
  useSeo({
    title: 'My Trips',
    description: 'Saved journeys, enquiry history, trip status and notifications in one place.',
  })

  const { user, signOut, enquiries, notifications } = useAccount()
  const { items } = useWishlist()

  if (!user) return <Navigate to="/sign-in" replace />

  const savedDestinations = destinations.filter((d) => items.some((i) => i.id === d.id))
  const savedTours = tours.filter((t) => items.some((i) => i.id === t.id))
  const savedExperiences = experiences.filter((e) => items.some((i) => i.id === e.id))
  const savedArticles = articles.filter((a) => items.some((i) => i.id === a.id))

  return (
    <div className="bg-ivory">
      <div className="mx-auto max-w-shell px-5 py-12 lg:px-8 lg:py-16">
        <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'My Trips' }]} />

        <header className="mt-6 flex flex-col gap-5 border-b border-hairline pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-eyebrow font-semibold uppercase text-gold">Traveller profile</p>
            <h1 className="mt-3 font-display text-hero text-espresso">Karibu, {user.name}.</h1>
            <p className="mt-2 text-[15px] text-stone">
              {user.email} · {user.country}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/plan-my-trip">Start a new enquiry</Button>
            <Button variant="secondary" onClick={signOut}>
              <LogOutIcon className="h-4 w-4" aria-hidden="true" />
              Sign out
            </Button>
          </div>
        </header>

        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Saved items', value: items.length, icon: BriefcaseIcon },
            { label: 'Enquiries', value: enquiries.length, icon: MapIcon },
            { label: 'Unread updates', value: notifications.filter((n) => !n.read).length, icon: BellIcon },
            { label: 'Trip photos', value: 0, icon: ImageIcon },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 rounded-card border border-hairline bg-surface p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/12 text-gold" aria-hidden="true">
                <stat.icon className="h-5 w-5" />
              </span>
              <div>
                <dt className="text-[13px] text-stone">{stat.label}</dt>
                <dd className="font-display text-[24px] leading-none text-espresso">{stat.value}</dd>
              </div>
            </div>
          ))}
        </dl>

        <section aria-labelledby="enquiry-history" className="mt-16">
          <h2 id="enquiry-history" className="font-display text-[26px] text-espresso">
            Enquiry history
          </h2>
          {enquiries.length === 0 ? (
            <div className="mt-6">
              <EmptyState
                icon={<MapIcon className="h-6 w-6" />}
                title="No trips planned yet."
                description="When you send an enquiry, it appears here with its reference and status so you can follow the conversation."
                actionLabel="Plan My Trip"
                actionTo="/plan-my-trip"
              />
            </div>
          ) : (
            <ul className="mt-6 space-y-4">
              {enquiries.map((enquiry) => (
                <li
                  key={enquiry.id}
                  className="flex flex-col gap-4 rounded-card border border-hairline bg-surface p-6 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-display text-[20px] text-espresso">{enquiry.subject}</span>
                      <Badge tone="green">{enquiry.status}</Badge>
                    </div>
                    <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-stone">
                      <span className="inline-flex items-center gap-1.5">
                        <ClockIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                        Sent {formatDate(enquiry.submittedAt)}
                      </span>
                      <span>Ref {enquiry.reference}</span>
                      <span>{enquiry.travelWindow}</span>
                      <span>{enquiry.travellers} travellers</span>
                    </p>
                    {enquiry.tripTypes.length > 0 && (
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {enquiry.tripTypes.map((t) => (
                          <li key={t} className="rounded-pill border border-hairline px-3 py-1 text-[12px] text-stone">
                            {t}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <p className="text-[13px] text-stone sm:max-w-[220px] sm:text-right">
                    A travel designer replies within 24 hours. We&rsquo;ll notify you here.
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section aria-labelledby="my-notifications" className="mt-16">
          <h2 id="my-notifications" className="font-display text-[26px] text-espresso">
            Notifications
          </h2>
          {notifications.length === 0 ? (
            <div className="mt-6">
              <EmptyState
                icon={<BellIcon className="h-6 w-6" />}
                title="You're all caught up."
                description="Migration updates, enquiry replies and new journal stories will arrive here."
                actionLabel="Read the Journal"
                actionTo="/journal"
              />
            </div>
          ) : (
            <ul className="mt-6 divide-y divide-hairline overflow-hidden rounded-card border border-hairline bg-surface">
              {notifications.map((n) => (
                <li key={n.id}>
                  <Link to={n.href} className="flex gap-3 p-5 transition-colors duration-200 ease-premium hover:bg-ivory">
                    {!n.read && <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />}
                    <span className={n.read ? 'pl-5' : ''}>
                      <span className="block text-[15px] font-medium text-espresso">{n.title}</span>
                      <span className="mt-1 block text-[14px] leading-relaxed text-stone">{n.body}</span>
                      <span className="mt-1.5 block text-[12px] uppercase tracking-[0.1em] text-stone/70">
                        {n.timestamp}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section aria-labelledby="saved-items" className="mt-16">
          <h2 id="saved-items" className="font-display text-[26px] text-espresso">
            Saved
          </h2>
          {items.length === 0 ? (
            <div className="mt-6">
              <EmptyState
                icon={<BriefcaseIcon className="h-6 w-6" />}
                title="You haven't saved any journeys yet."
                description="Start exploring Tanzania and save the places that call to you."
                actionLabel="Explore Tanzania"
                actionTo="/destinations"
              />
            </div>
          ) : (
            <div className="mt-6 space-y-12">
              {savedDestinations.length > 0 && (
                <div>
                  <h3 className="text-eyebrow font-semibold uppercase text-gold">Destinations</h3>
                  <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {savedDestinations.map((d) => (
                      <li key={d.id} className="h-full">
                        <DestinationCard destination={d} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {savedTours.length > 0 && (
                <div>
                  <h3 className="text-eyebrow font-semibold uppercase text-gold">Journeys</h3>
                  <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {savedTours.map((t) => (
                      <li key={t.id} className="h-full">
                        <TourCard tour={t} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {savedExperiences.length > 0 && (
                <div>
                  <h3 className="text-eyebrow font-semibold uppercase text-gold">Experiences</h3>
                  <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {savedExperiences.map((e) => (
                      <li key={e.id} className="h-full">
                        <ExperienceCard experience={e} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {savedArticles.length > 0 && (
                <div>
                  <h3 className="text-eyebrow font-semibold uppercase text-gold">Stories</h3>
                  <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {savedArticles.map((a) => (
                      <li key={a.id} className="h-full">
                        <JournalCard article={a} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </section>

        <section aria-labelledby="trip-memories" className="mt-16">
          <h2 id="trip-memories" className="font-display text-[26px] text-espresso">
            After your trip
          </h2>
          <div className="mt-6">
            <EmptyState
              icon={<ImageIcon className="h-6 w-6" />}
              title="Your memories will live here."
              description="Once you have travelled with us, your itinerary, photos and trip notes stay in this space so you can return to them — and share them if you choose."
              actionLabel="See the traveller gallery"
              actionTo="/gallery"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
