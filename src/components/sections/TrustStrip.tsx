import React from 'react'
import { HomeIcon, CompassIcon, HeadphonesIcon, LeafIcon } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const pillars = [
  {
    icon: HomeIcon,
    title: 'Locally Owned, Locally Led',
    body: 'Tanzanian-owned and operated, born and based in Arusha.',
  },
  {
    icon: CompassIcon,
    title: 'Expert Guides',
    body: 'Career naturalists and mountain guides, many with 15+ years in the field.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 On-The-Ground Support',
    body: 'A real person reachable throughout every trip, not a call centre.',
  },
  {
    icon: LeafIcon,
    title: 'Responsible Travel',
    body: 'Community-first tourism that gives back to the parks and people you visit.',
  },
]

export function TrustStrip() {
  return (
    <section aria-label="Why travel with us" className="border-b border-hairline bg-surface">
      <div className="mx-auto grid max-w-shell gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 0.05} className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold" aria-hidden="true">
              <pillar.icon className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-display text-[18px] leading-snug text-espresso">{pillar.title}</span>
              <span className="mt-1.5 block text-[14px] leading-relaxed text-stone">{pillar.body}</span>
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
