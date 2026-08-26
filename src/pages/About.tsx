import React from 'react'
import AboutImage from '../assets/About.jpg'
import { PageHero } from '../components/sections/PageHero'
import { SectionHeading } from '../components/ui/Typography'
import { Button } from '../components/ui/Button'
import { TrustStrip } from '../components/sections/TrustStrip'
import { StatBand } from '../components/sections/StatBand'
import { CtaBanner } from '../components/sections/CtaBanner'
import { Reveal } from '../components/ui/Reveal'
import { company } from '../data/company'
import { useSeo } from '../hooks/useSeo'

export function About() {
  useSeo({
    title: 'Our Story — A Tanzanian Travel Studio in Arusha',
    description:
      'Amani Tanzania is a locally owned travel studio based in Arusha, designing safaris, treks, island escapes and cultural journeys with Tanzanian guides.',
    image: AboutImage,
  })

  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Born in Arusha, at the foot of Mount Meru"
        description={company.statement}
        image={AboutImage}
        imageAlt="A Tanzanian safari experience in the beautiful landscapes of Tanzania"
        trail={[
          { label: 'Home', to: '/' },
          { label: 'About' },
        ]}
      />

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-shell gap-14 px-5 py-16 lg:grid-cols-[1.5fr_1fr] lg:px-8 lg:py-20">
          
          <div>
            <h2 className="font-display text-section text-espresso">
              Why we started
            </h2>

            <p className="mt-5 text-[17px] leading-relaxed text-stone">
              Almost every traveller who lands at Kilimanjaro International
              Airport has booked their trip through someone who has never slept
              in the Serengeti. We started {company.name} to change where that
              decision is made — with the guides, drivers, cooks and mountain
              crews who actually run these journeys.
            </p>

            <p className="mt-4 text-[17px] leading-relaxed text-stone">
              Amani means peace in Swahili. It is the feeling we want a trip to
              leave behind: nothing rushed, nothing staged, no group of forty on
              a fixed departure. One traveller, one route, built around what
              they came for.
            </p>

            <h2 className="mt-12 font-display text-section text-espresso">
              How we work
            </h2>

            <ul className="mt-5 space-y-4">
              {[
                'You speak to a designer, not a call centre. The same person stays with your trip from the first email to the day you fly home.',
                'Itineraries start as conversations. Nothing here is fixed — the routes on this site are starting points.',
                'Our guides and mountain crew are employed through the low season, not only when the parks are busy.',
                'We work with the same lodges, camps and communities year after year, so we can tell you what a place is genuinely like.',
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[15px] leading-relaxed text-stone"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-card border border-hairline bg-surface p-6">
              <p className="text-[14px] leading-relaxed text-stone">
                <span className="font-medium text-espresso">
                  A note on this page:
                </span>{' '}
                founding date, company history, registration details and awards
                are placeholders until the client supplies them. We do not
                publish credentials we cannot verify.
              </p>
            </div>
          </div>

          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <img
              src={AboutImage}
              alt="A Tanzanian safari experience"
              loading="lazy"
              decoding="async"
              className="aspect-[3/4] w-full rounded-card object-cover shadow-card"
            />

            <div className="mt-6 rounded-card border border-hairline bg-surface p-6">
              <p className="font-display text-[20px] text-espresso">
                Meet the people behind the trips
              </p>

              <p className="mt-2 text-[14px] leading-relaxed text-stone">
                Guide profiles are published as each team member confirms their
                own details.
              </p>

              <Button
                to="/guides"
                className="mt-5"
                variant="secondary"
                size="sm"
              >
                Meet the guides
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <TrustStrip />

      <StatBand />

      <section className="bg-surface">
        <div className="mx-auto max-w-shell px-5 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Watch our story"
            title="A film is on the way"
            description="A short film shot across the northern circuit, Kilimanjaro and Zanzibar will live here once the client supplies the footage. Until then, the Journal is the closest thing to walking the plains with our guides."
            action={
              <Button to="/journal" variant="secondary">
                Read the Journal
              </Button>
            }
          />
        </div>
      </section>

      <CtaBanner subject="About — general enquiry" />
    </>
  )
}