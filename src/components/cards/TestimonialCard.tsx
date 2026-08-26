import React from 'react'
import { QuoteIcon, StarIcon } from 'lucide-react'
import type { Testimonial } from '../../types'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.theme
    .split(' ')
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('')

  return (
    <figure className="flex h-full flex-col rounded-card border border-hairline bg-surface p-7 shadow-card">
      <QuoteIcon className="h-7 w-7 text-gold/40" aria-hidden="true" />
      <div className="mt-4 flex" aria-label={`${testimonial.rating} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            className={i < testimonial.rating ? 'h-4 w-4 fill-gold text-gold' : 'h-4 w-4 text-hairline'}
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="mt-4 flex-1">
        <p className="font-display text-[19px] leading-snug text-espresso">{testimonial.theme}</p>
        <p className="mt-3 text-[14px] leading-relaxed text-stone">{testimonial.quote}</p>
      </blockquote>
      <figcaption className="mt-6 border-t border-hairline pt-5">
        <div className="flex items-center gap-3">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 font-display text-sm text-gold-dark"
            aria-hidden="true"
          >
            {initials}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[14px] font-medium text-espresso">{testimonial.guestName}</span>
            <span className="block truncate text-[13px] text-stone">
              {testimonial.country} · {testimonial.tripType}
            </span>
          </span>
        </div>
        {testimonial.placeholder && (
          <p className="mt-4 rounded-lg bg-ivory px-3 py-2 text-[12px] leading-relaxed text-stone">
            Placeholder card. Verified traveller reviews will replace this once permission is given.
          </p>
        )}
      </figcaption>
    </figure>
  )
}
