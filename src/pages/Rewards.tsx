import React from 'react'
import { GiftIcon, UsersIcon, HeartHandshakeIcon } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { SectionHeading } from '../components/ui/Typography'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { CtaBanner } from '../components/sections/CtaBanner'
import { images } from '../data/images'
import { useEnquiry } from '../contexts/EnquiryContext'
import { useSeo } from '../hooks/useSeo'

const strands = [
  {
    icon: HeartHandshakeIcon,
    title: 'Returning travellers',
    body: 'If you have travelled with us before, your designer already knows your pace, your camps and what you missed last time. Returning travellers are matched with the same team wherever possible.',
  },
  {
    icon: UsersIcon,
    title: 'Introduce someone',
    body: 'Most of our travellers arrive through someone who has already been. When you introduce a friend, we look after them the way we looked after you — and we let you know when their trip is confirmed.',
  },
  {
    icon: GiftIcon,
    title: 'Small gestures, not discounts',
    body: 'Recognition here takes the form of thoughtful touches on the ground — a bush breakfast, a room upgrade where a camp can offer one, an extra guiding hour. Never a price promotion.',
  },
]

export function Rewards() {
  useSeo({
    title: 'For Returning Travellers',
    description:
      'How we recognise returning travellers and the people who introduce friends to Tanzania — through relationships and thoughtful touches, not discounts.',
    image: images.tileSafari,
  })

  const { openEnquiry } = useEnquiry()

  return (
    <>
      <PageHero
        eyebrow="Returning travellers"
        title="The second trip is always different"
        description="People who come back rarely want the same route again. This is how we look after travellers who return, and the friends they send our way."
        image={images.tileSafari}
        imageAlt="A guide and travellers watching a lioness cross in front of a safari vehicle at sunrise"
        trail={[{ label: 'Home', to: '/' }, { label: 'Returning travellers' }]}
        compact
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-shell px-5 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="How it works"
            title="A relationship, not a points scheme"
            description="There are no tiers, no balances and no expiry dates — and nothing here is a price promotion."
          />
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {strands.map((strand, i) => (
              <Reveal key={strand.title} as="li" delay={i * 0.06} className="h-full">
                <article className="flex h-full flex-col rounded-card border border-hairline bg-surface p-7">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/12 text-gold"
                    aria-hidden="true"
                  >
                    <strand.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-[21px] text-espresso">{strand.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-stone">{strand.body}</p>
                </article>
              </Reveal>
            ))}
          </ul>

          <div className="mt-12 rounded-card border border-hairline bg-surface p-8 text-center">
            <p className="mx-auto max-w-2xl text-[14px] leading-relaxed text-stone">
              The specific terms of the returning-traveller and referral programme will be published here once the
              client confirms them. We have not invented any commitments in the meantime.
            </p>
            <Button className="mt-6" onClick={() => openEnquiry('Returning traveller enquiry')}>
              Talk to your designer
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner
        headline="Coming back to Tanzania?"
        copy="Tell us where you have already been and we'll build you something that feels like a different country."
        subject="Returning traveller trip"
      />
    </>
  )
}
