import React from 'react'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { company } from '../data/company'
import { useSeo } from '../hooks/useSeo'

const content = {
  privacy: {
    title: 'Privacy',
    intro:
      'This page describes how enquiry and account information is handled. The final policy will be supplied by the client and reviewed against the applicable data protection legislation before launch.',
    sections: [
      {
        heading: 'What we collect',
        body: 'The information you give us in an enquiry or planner form — name, email, phone or WhatsApp number, travel dates, traveller numbers and the notes you write about the trip you want.',
      },
      {
        heading: 'Why we collect it',
        body: 'To design and quote your trip, to answer your questions, and to keep in touch about the journey you have asked about. Nothing more.',
      },
      {
        heading: 'Saved items and accounts',
        body: 'Your saved list and demo account are stored in your own browser on this device. Clearing your browser storage removes them. A production build would store account data securely on the server with your consent.',
      },
      {
        heading: 'Newsletter',
        body: 'If you subscribe, we send migration updates, seasonal availability notes and travel stories. Every email will include a one-click unsubscribe link.',
      },
      {
        heading: 'Placeholder notice',
        body: 'Data controller details, retention periods, third-party processors and the contact address for data requests are placeholders pending client confirmation.',
      },
    ],
  },
  terms: {
    title: 'Terms',
    intro:
      'These terms are a placeholder. Booking conditions, cancellation terms, payment schedules, insurance requirements and liability limits will be supplied by the client and reviewed legally before launch.',
    sections: [
      {
        heading: 'Enquiries',
        body: 'Submitting an enquiry through this site places no obligation on you and does not constitute a booking. No payment is requested through this website.',
      },
      {
        heading: 'Itineraries',
        body: 'Every itinerary on this site is illustrative. Routes, camps, park access and internal flights are subject to availability, park regulations and conditions on the ground.',
      },
      {
        heading: 'Wildlife and weather',
        body: 'Wildlife movements, including the Great Migration, cannot be guaranteed. Our guidance describes typical seasonal patterns, not certainties.',
      },
      {
        heading: 'Mountain climbs',
        body: 'Summit success depends on health, acclimatisation and conditions. Guides may require descent at any point on safety grounds, and that decision is final.',
      },
      {
        heading: 'Placeholder notice',
        body: 'Company registration, licensing, insurance and financial protection details will be published here once supplied.',
      },
    ],
  },
}

export function Legal({ kind }: { kind: 'privacy' | 'terms' }) {
  const page = content[kind]

  useSeo({
    title: page.title,
    description: page.intro.slice(0, 155),
  })

  return (
    <div className="bg-ivory">
      <div className="mx-auto max-w-3xl px-5 py-14 lg:py-20">
        <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: page.title }]} />
        <h1 className="mt-6 font-display text-hero text-espresso">{page.title}</h1>
        <p className="mt-5 text-[17px] leading-relaxed text-stone">{page.intro}</p>

        <div className="mt-10 space-y-9">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-[24px] text-espresso">{section.heading}</h2>
              <p className="mt-2.5 text-[16px] leading-relaxed text-stone">{section.body}</p>
            </section>
          ))}
        </div>

        <p className="mt-12 rounded-card border border-hairline bg-surface p-6 text-[14px] leading-relaxed text-stone">
          Questions about this page can go to{' '}
          <a href={`mailto:${company.email}`} className="font-medium text-gold hover:text-gold-dark">
            {company.email}
          </a>
          .
        </p>
      </div>
    </div>
  )
}
