import React from 'react'
import { PageHero } from '../components/sections/PageHero'
import { SectionHeading } from '../components/ui/Typography'
import { DestinationCard } from '../components/cards/DestinationCard'
import { TourCard } from '../components/cards/TourCard'
import { ExperienceCard } from '../components/cards/ExperienceCard'
import { CtaBanner } from '../components/sections/CtaBanner'
import { Reveal } from '../components/ui/Reveal'
import { destinations } from '../data/destinations'
import { tours } from '../data/tours'
import { experiences } from '../data/experiences'
import { images } from '../data/images'
import { useSeo } from '../hooks/useSeo'

const COAST_SLUGS = ['zanzibar', 'pemba-island', 'mafia-island', 'bagamoyo', 'pangani']
const ISLAND_EXPERIENCE_IDS = ['sunset-dhow-cruise', 'spice-farm-tour', 'stone-town-walk']

export function Beach() {
  useSeo({
    title: 'Zanzibar, Pemba & Mafia — Tanzania Beach Holidays',
    description:
      'Stone Town, spice farms and white sand on Zanzibar, wall diving off Pemba, whale sharks at Mafia, plus the quieter coast at Bagamoyo and Pangani.',
    image: images.zanzibar,
  })

  const coast = COAST_SLUGS.map((slug) => destinations.find((d) => d.slug === slug)).filter(
    (d): d is (typeof destinations)[number] => Boolean(d),
  )
  const beachTours = tours.filter((t) => t.category === 'Beach' || t.category === 'Combination')
  const islandExperiences = experiences.filter((e) => ISLAND_EXPERIENCE_IDS.includes(e.id))

  return (
    <>
      <PageHero
        eyebrow="Beach & islands"
        title="Where the safari ends and the tide takes over"
        description="Zanzibar, Pemba and Mafia sit an hour's flight from the northern circuit — which is why so many Tanzanian journeys finish with salt water."
        image={images.zanzibar}
        imageAlt="A traditional wooden dhow sailing on turquoise water off a white sand Zanzibar beach"
        trail={[{ label: 'Home', to: '/' }, { label: 'Beach & islands' }]}
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-shell px-5 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="The archipelago"
            title="Islands and coastline"
            description="Each island has a different pace. Zanzibar for history and beaches, Pemba for diving, Mafia for whale sharks, and the mainland coast for almost nobody at all."
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coast.map((destination, i) => (
              <Reveal key={destination.id} as="li" delay={i * 0.05} className="h-full">
                <DestinationCard destination={destination} eager={i < 3} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-shell px-5 py-16 lg:px-8 lg:py-20">
          <SectionHeading eyebrow="On the water" title="Island experiences" />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {islandExperiences.map((experience, i) => (
              <Reveal key={experience.id} as="li" delay={i * 0.05} className="h-full">
                <ExperienceCard experience={experience} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-shell px-5 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Journeys"
            title="Trips that end on the coast"
            description="Pair the plains with the islands, or make the archipelago the whole trip."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beachTours.map((tour, i) => (
              <Reveal key={tour.id} as="li" delay={i * 0.05} className="h-full">
                <TourCard tour={tour} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        headline="End your Tanzania trip in the Indian Ocean"
        copy="Tell us how many days you have after the safari or the mountain, and we'll match the island to the pace you want."
        subject="Beach & islands enquiry"
      />
    </>
  )
}
