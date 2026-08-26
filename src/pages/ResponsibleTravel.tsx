import React from 'react'
import { UsersIcon, LeafIcon, HandshakeIcon, TreePineIcon } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { SectionHeading } from '../components/ui/Typography'
import { CtaBanner } from '../components/sections/CtaBanner'
import { Reveal } from '../components/ui/Reveal'
import { images } from '../data/images'
import { useSeo } from '../hooks/useSeo'

const commitments = [
  {
    icon: UsersIcon,
    title: 'Local employment',
    body: 'Guides, drivers, cooks, porters and office staff are Tanzanian and employed year-round rather than only in the high season. Specific staffing numbers will be published once the client confirms them.',
  },
  {
    icon: HandshakeIcon,
    title: 'Community benefit',
    body: 'Cultural visit fees are paid directly to the host households and community funds. We can show travellers exactly where that money goes on request.',
  },
  {
    icon: LeafIcon,
    title: 'Conservation',
    body: 'Park and conservation fees fund the protection of the areas you visit. Any additional conservation partnerships or contributions will be listed here once formalised.',
  },
  {
    icon: TreePineIcon,
    title: 'Environmental practice',
    body: 'Refillable water in every vehicle, no single-use plastic bottles on safari or on the mountain, and strict pack-in pack-out on all treks.',
  },
]

const mountainCrew = [
  'Porter loads kept within KPAP-aligned weight limits',
  'Three meals a day and proper sleeping equipment for every crew member',
  'Wages agreed before the climb and paid in full regardless of summit outcome',
  'Crew provided with insulated jackets, boots and sleeping bags where needed',
]

export function ResponsibleTravel() {
  useSeo({
    title: 'Responsible Travel in Tanzania',
    description:
      'How we employ Tanzanians year-round, pay community fees directly, treat mountain crews fairly and reduce the environmental footprint of every trip.',
    image: images.tileCulture,
  })

  return (
    <>
      <PageHero
        eyebrow="Responsible travel"
        title="Tourism that reaches the people it depends on"
        description="Tanzania's parks and communities carry the cost of tourism as well as the benefit. Here is what we do about that — and what we have not yet formalised."
        image={images.tileCulture}
        imageAlt="Maasai community members walking across open savannah at golden hour"
        trail={[{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'Responsible travel' }]}
        compact
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-shell px-5 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Our commitments"
            title="Four things we hold ourselves to"
            description="Written plainly, without the language of certification schemes we have not joined."
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {commitments.map((c, i) => (
              <Reveal key={c.title} as="li" delay={i * 0.05} className="h-full">
                <article className="flex h-full gap-5 rounded-card border border-hairline bg-surface p-7">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-savannah/10 text-savannah"
                    aria-hidden="true"
                  >
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-[20px] text-espresso">{c.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-stone">{c.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-shell gap-12 px-5 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
          <Reveal>
            <img
              src={images.machame}
              alt="Trekkers and mountain crew crossing the Shira Plateau on Kilimanjaro"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-card object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display text-section text-espresso">How our mountain crews are treated</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-stone">
              Kilimanjaro runs on porters. How a company treats them is the clearest signal of how it operates
              everywhere else.
            </p>
            <ul className="mt-6 space-y-3">
              {mountainCrew.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-stone">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-savannah" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-7 rounded-card border border-hairline bg-ivory p-5 text-[14px] leading-relaxed text-stone">
              <span className="font-medium text-espresso">Placeholder:</span> formal partnership memberships,
              certifications and audited wage figures will be published here once the client supplies verified
              documentation. We would rather show a gap than a claim we cannot evidence.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        headline="Ask us anything about how we operate"
        copy="Wages, community fees, conservation contributions — if you want the detail before you travel, ask."
        subject="Responsible travel question"
      />
    </>
  )
}
