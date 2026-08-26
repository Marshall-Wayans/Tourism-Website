import React from 'react'
import { Link } from 'react-router-dom'
import { ClockIcon, UsersIcon, MapPinIcon } from 'lucide-react'
import { Badge, Rating } from '../ui/Badge'
import { WishlistButton } from '../ui/WishlistButton'
import type { Tour } from '../../types'

export function TourCard({ tour, eager = false }: { tour: Tour; eager?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-hairline bg-surface shadow-card transition-[box-shadow,transform] duration-300 ease-premium hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={tour.heroImage}
          alt={tour.imageAlt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.06]"
        />
        <div className="absolute left-4 top-4">
          <Badge tone="dark">{tour.badge}</Badge>
        </div>
        <div className="absolute right-4 top-4 z-10">
          <WishlistButton id={tour.id} kind="tour" label={tour.title} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] text-stone">
          <span className="inline-flex items-center gap-1.5">
            <ClockIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {tour.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <UsersIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {tour.groupSize}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPinIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {tour.location}
          </span>
        </div>

        <h3 className="mt-3 font-display text-[22px] leading-snug text-espresso">
          <Link
            to={`/safaris/${tour.slug}`}
            className="transition-colors duration-200 ease-premium after:absolute after:inset-0 after:content-[''] hover:text-gold-dark"
          >
            {tour.title}
          </Link>
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-stone">{tour.description}</p>

        <div className="mt-auto pt-5">
          <div className="border-t border-hairline pt-4">
            <div className="flex items-center justify-between gap-4">
              <Rating value={tour.rating} />
              <span className="relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-transform duration-200 ease-premium group-hover:translate-x-0.5">
                View Itinerary
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
