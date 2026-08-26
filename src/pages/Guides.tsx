import React from 'react'
import { MapPinIcon, LanguagesIcon, AwardIcon } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { SectionHeading } from '../components/ui/Typography'
import { Reveal } from '../components/ui/Reveal'
import { CtaBanner } from '../components/sections/CtaBanner'
import { guides } from '../data/social'
import { images } from '../data/images'
import { useSeo } from '../hooks/useSeo'

export function Guides() {
  useSeo({
    title: 'Meet the Guides',
    description:
      'Tanzanian career naturalists, mountain guides and Zanzibari historians. Individual profiles are published as each guide confirms their details.',
    image: images.guide,
  })

  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="The person in the driver's seat"
        description="A safari is only as good as the guide. Everything else is arrangeable; judgement in the field is not."
        image={images.guide}
        imageAlt="A Tanzanian safari guide beside an open safari vehicle on the savannah at golden hour"
        trail={[{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'Guides' }]}
        compact
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-shell px-5 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Meet the guides"
            title="Profiles in progress"
            description="Each guide writes their own profile. Names, specialisms, years in the field and certifications appear here once confirmed — we will not invent credentials in the meantime."
          />

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map((guide, i) => (
              <Reveal key={guide.id} as="li" delay={i * 0.05} className="h-full">
                <article className="flex h-full flex-col rounded-card border border-hairline bg-surface p-6 shadow-card">
                  <span
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/12 font-display text-[20px] text-gold-dark"
                    aria-hidden="true"
                  >
                    ?
                  </span>
                  <h3 className="mt-5 font-display text-[19px] leading-snug text-espresso">{guide.name}</h3>
                  <p className="mt-1.5 text-[13px] font-medium uppercase tracking-[0.1em] text-gold">
                    {guide.specialty}
                  </p>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-stone">{guide.bio}</p>
                  <dl className="mt-5 space-y-2 border-t border-hairline pt-4 text-[13px] text-stone">
                    <div className="flex items-center gap-2">
                      <dt className="sr-only">Experience</dt>
                      <AwardIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                      <dd>{guide.experience} guiding</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <dt className="sr-only">Based in</dt>
                      <MapPinIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                      <dd>{guide.based}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <dt className="sr-only">Languages</dt>
                      <LanguagesIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                      <dd>{guide.languages}</dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        headline="Ask to be matched with a guide"
        copy="Tell us what you want from the trip — big cats, birds, mountains, history — and we'll pair you with the right person."
        subject="Guide matching enquiry"
      />
    </>
  )
}
