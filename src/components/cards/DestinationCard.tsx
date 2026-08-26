import React from 'react'
import { Link } from 'react-router-dom'
import { MapPinIcon } from 'lucide-react'
import { Rating } from '../ui/Badge'
import { WishlistButton } from '../ui/WishlistButton'
import type { Destination } from '../../types'

export function DestinationCard({ destination, eager = false }: { destination: Destination; eager?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-hairline bg-surface shadow-card transition-[box-shadow,transform] duration-300 ease-premium hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={destination.heroImage}
          alt={destination.imageAlt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.06]"
        />
        <div className="absolute right-4 top-4 z-10">
          <WishlistButton id={destination.id} kind="destination" label={destination.name} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="inline-flex items-center gap-1.5 text-[13px] text-stone">
          <MapPinIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
          {destination.region}
        </p>
        <h3 className="mt-2 font-display text-[22px] leading-snug text-espresso">
          <Link
            to={`/destinations/${destination.slug}`}
            className="transition-colors duration-200 ease-premium after:absolute after:inset-0 after:content-[''] hover:text-gold-dark"
          >
            {destination.name}
          </Link>
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-stone">{destination.tagline}</p>
        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between gap-4 border-t border-hairline pt-4">
            <Rating value={destination.rating} />
            <span className="relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-transform duration-200 ease-premium group-hover:translate-x-0.5">
              Discover
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
