import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { PhoneIcon, MessageCircleIcon, MailIcon, MapPinIcon, ClockIcon } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { EnquiryForm } from '../components/enquiry/EnquiryForm'
import { Button } from '../components/ui/Button'
import { company } from '../data/company'
import { destinations } from '../data/destinations'
import { images } from '../data/images'
import { useSeo } from '../hooks/useSeo'

export function PlanMyTrip() {
  useSeo({
    title: 'Plan My Trip — Speak to a Tanzania Travel Designer',
    description:
      'Tell us what you are dreaming about and a Tanzania travel designer will reply within 24 hours. No payment, no pressure, no prices until you ask.',
    image: images.lionKopje,
  })

  const [params] = useSearchParams()
  const destinationSlug = params.get('destination')
  const when = params.get('when')
  const travellers = params.get('travellers')
  const prefilled = destinations.find((d) => d.slug === destinationSlug)

  const subject = prefilled
    ? `Trip planner: ${prefilled.name}${when ? ` · ${when}` : ''}${travellers ? ` · ${travellers} travellers` : ''}`
    : 'Plan my Tanzania trip'

  return (
    <>
      <PageHero
        eyebrow="Plan my trip"
        title="Tell us what you're dreaming about"
        description="One designer, one conversation, one itinerary shaped around you. We reply within 24 hours — and we never ask for payment through this form."
        image={images.lionKopje}
        imageAlt="A male lion sitting on a granite kopje in the Serengeti at sunset"
        trail={[{ label: 'Home', to: '/' }, { label: 'Plan my trip' }]}
        compact
      />

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-shell gap-12 px-5 py-16 lg:grid-cols-[1.5fr_1fr] lg:px-8 lg:py-20">
          <div className="rounded-card border border-hairline bg-surface p-7 shadow-card lg:p-10">
            {prefilled && (
              <p className="mb-6 rounded-xl border border-gold/25 bg-gold/[0.07] px-4 py-3 text-[14px] text-stone">
                Starting from your planner search:{' '}
                <span className="font-medium text-espresso">{prefilled.name}</span>
                {when && <> · {when}</>}
                {travellers && <> · {travellers} travellers</>}
              </p>
            )}
            <h2 className="font-display text-section text-espresso">Send an enquiry</h2>
            <div className="mt-6">
              <EnquiryForm subject={subject} />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-card border border-hairline bg-surface p-7">
              <h2 className="font-display text-[22px] text-espresso">Rather talk?</h2>
              <p className="mt-2 text-[14px] leading-relaxed text-stone">
                Quick questions, trip planning, or help while you are already in Tanzania.
              </p>
              <div className="mt-5 space-y-3">
                <Button href={company.whatsappHref} target="_blank" rel="noreferrer" fullWidth>
                  <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </Button>
                <Button href={company.phoneHref} variant="secondary" fullWidth>
                  <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                  {company.phoneLabel}
                </Button>
              </div>
            </div>

            <div className="rounded-card border border-hairline bg-surface p-7">
              <h2 className="font-display text-[22px] text-espresso">Find us</h2>
              <ul className="mt-4 space-y-3.5 text-[14px] text-stone">
                <li className="flex gap-3">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {company.officeAddress}
                </li>
                <li className="flex gap-3">
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <a href={`mailto:${company.email}`} className="hover:text-espresso">
                    {company.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  Office hours to be confirmed · someone is reachable 24/7 during trips
                </li>
              </ul>
            </div>

            <div className="rounded-card border border-hairline bg-espresso p-7 text-ivory">
              <h2 className="font-display text-[22px]">Not sure where to start?</h2>
              <p className="mt-2 text-[14px] leading-relaxed text-ivory/75">
                Answer five quick questions and we&rsquo;ll suggest a direction for your trip.
              </p>
              <Button to="/build-my-trip" className="mt-5" fullWidth>
                Build My Trip
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
