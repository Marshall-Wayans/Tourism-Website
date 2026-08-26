import React from 'react'
import { StarIcon } from 'lucide-react'
import { SectionHeading } from '../ui/Typography'
import { TestimonialCard } from '../cards/TestimonialCard'
import { TextLink } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { testimonials } from '../../data/social'

export function TestimonialsSection({ limit = 3 }: { limit?: number }) {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-ivory">
      <div className="mx-auto max-w-shell px-5 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Loved by travellers worldwide"
          title="In their words"
          description="Verified reviews will be published here as travellers give permission. Until then, these cards show the themes we hear most often — clearly marked as placeholders."
          action={<TextLink to="/testimonials">Read all reviews</TextLink>}
        />

        <div className="mt-6 flex items-center gap-3">
          <span className="flex" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-4 w-4 fill-gold text-gold" />
            ))}
          </span>
          <p className="text-[14px] text-stone">
            Aggregate rating pending — review totals will appear here once the company&rsquo;s review platform is
            connected.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, limit).map((t, i) => (
            <Reveal key={t.id} as="li" delay={i * 0.06} className="h-full">
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
