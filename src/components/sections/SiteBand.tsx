import React from 'react'
import { Reveal } from '../ui/Reveal'

const stats = [
  { value: '12', label: 'National parks & protected areas covered' },
  { value: '2,000+', label: 'Travellers guided since we began' },
  { value: '98%', label: 'Would recommend us to a friend' },
  { value: '15+', label: 'Years guiding Tanzania' },
]

export function StatBand() {
  return (
    <section aria-label="Amani Tanzania in numbers" className="bg-ivory">
      <div className="mx-auto max-w-shell px-5 py-16 lg:px-8 lg:py-20">
        <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06} className="relative">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span
                  aria-hidden="true"
                  className="block font-display text-[clamp(3rem,6vw,4.5rem)] leading-none text-gold/35"
                >
                  {stat.value}
                </span>
                <span className="mt-3 block max-w-[15rem] text-[14px] leading-relaxed text-stone">
                  <span className="font-medium text-espresso">{stat.value}</span> — {stat.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
