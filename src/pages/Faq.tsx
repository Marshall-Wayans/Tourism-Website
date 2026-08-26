import React from 'react'
import { PageHero } from '../components/sections/PageHero'
import { SectionHeading } from '../components/ui/Typography'
import { Accordion } from '../components/ui/Accordion'
import { Button } from '../components/ui/Button'
import { CtaBanner } from '../components/sections/CtaBanner'
import { faqs } from '../data/culture'
import { images } from '../data/images'
import { useSeo } from '../hooks/useSeo'

export function Faq() {
  useSeo({
    title: 'Travel Tips, Tanzania FAQ & Kilimanjaro FAQ',
    description:
      'Visas, vaccinations, luggage limits, the best months to travel, and everything travellers ask us about climbing Kilimanjaro.',
    image: images.packing,
  })

  return (
    <>
      <PageHero
        eyebrow="Travel tips & FAQ"
        title="The practical questions, answered plainly"
        description="Everything travellers ask us before they commit. If your question is not here, ask a designer — we answer within 24 hours."
        image={images.packing}
        imageAlt="Flat lay of safari travel gear on warm linen including a leather duffel, binoculars, hat and notebook"
        trail={[{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'FAQ' }]}
        compact
      />

      <section id="tanzania" className="scroll-mt-24 bg-ivory">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:py-20">
          <SectionHeading eyebrow="Before you travel" title="Tanzania FAQ" />
          <div className="mt-8">
            <Accordion items={faqs.tanzania} idPrefix="faq-tz" />
          </div>
        </div>
      </section>

      <section id="kilimanjaro" className="scroll-mt-24 bg-surface">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:py-20">
          <SectionHeading
            eyebrow="The mountain"
            title="Kilimanjaro FAQ"
            description="Route choice, fitness, altitude and how our mountain crews are treated."
            action={
              <Button to="/kilimanjaro-routes" variant="secondary" size="sm">
                Compare routes
              </Button>
            }
          />
          <div className="mt-8">
            <Accordion items={faqs.kilimanjaro} idPrefix="faq-kili" />
          </div>
        </div>
      </section>

      <CtaBanner
        headline="Still deciding?"
        copy="Send your question to a Tanzania travel designer. No obligation, no sales pressure, no prices until you ask for them."
        subject="Travel question"
      />
    </>
  )
}
