import React from 'react'
import { images } from '../../data/images'
import { Button } from '../ui/Button'
import { useEnquiry } from '../../contexts/EnquiryContext'

export function CtaBanner({
  headline = 'Let us craft your next unforgettable journey',
  copy = "Speak with a Tanzania travel designer today and start planning a trip you'll treasure forever.",
  subject = 'Plan my trip',
}: {
  headline?: string
  copy?: string
  subject?: string
}) {
  const { openEnquiry } = useEnquiry()

  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={images.lionKopje}
        alt="A male lion sitting on a granite kopje in the Serengeti at sunset"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-espresso/70" aria-hidden="true" />
      <div className="mx-auto max-w-3xl px-5 py-24 text-center lg:py-28">
        <h2 className="font-display text-hero text-white">{headline}</h2>
        <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-white/80">{copy}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" onClick={() => openEnquiry(subject)}>
            Plan My Trip
          </Button>
          <Button size="lg" variant="light" onClick={() => openEnquiry('Request a callback')}>
            Request a Callback
          </Button>
        </div>
      </div>
    </section>
  )
}
