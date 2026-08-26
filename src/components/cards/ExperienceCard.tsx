import React from 'react'
import { ClockIcon, MapPinIcon, ZapIcon } from 'lucide-react'
import { Badge, Rating } from '../ui/Badge'
import { WishlistButton } from '../ui/WishlistButton'
import { useEnquiry } from '../../contexts/EnquiryContext'
import type { Experience } from '../../types'

export function ExperienceCard({ experience }: { experience: Experience }) {
  const { openEnquiry } = useEnquiry()

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-hairline bg-surface shadow-card transition-[box-shadow,transform] duration-300 ease-premium hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={experience.image}
          alt={experience.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.06]"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <Badge tone="dark">{experience.category}</Badge>
          {experience.instantEnquiry && (
            <Badge tone="green" icon={<ZapIcon className="h-3 w-3" aria-hidden="true" />}>
              Instant Enquiry
            </Badge>
          )}
        </div>
        <div className="absolute right-4 top-4">
          <WishlistButton id={experience.id} kind="experience" label={experience.title} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] text-stone">
          <span className="inline-flex items-center gap-1.5">
            <ClockIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {experience.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPinIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {experience.location}
          </span>
        </div>
        <h3 className="mt-3 font-display text-[21px] leading-snug text-espresso">{experience.title}</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-stone">{experience.description}</p>
        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between gap-4 border-t border-hairline pt-4">
            <Rating value={experience.rating} />
            <button
              type="button"
              onClick={() => openEnquiry(`Experience: ${experience.title}`)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-transform duration-200 ease-premium hover:text-gold-dark focus-visible:translate-x-0.5"
            >
              Enquire
              <span aria-hidden="true">→</span>
              <span className="sr-only">about {experience.title}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
