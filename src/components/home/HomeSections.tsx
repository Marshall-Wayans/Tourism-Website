import React from 'react'
import { SectionHeading } from '../ui/Typography'
import { Button, TextLink } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { TourCard } from '../cards/TourCard'
import { DestinationCard } from '../cards/DestinationCard'
import { ExperienceCard } from '../cards/ExperienceCard'
import { CategoryTile } from '../cards/CategoryTile'
import { tours } from '../../data/tours'
import { destinations } from '../../data/destinations'
import { experiences } from '../../data/experiences'
import { images } from '../../data/images'

const bestSellerIds = ['serengeti-migration-safari', 'ngorongoro-tarangire-explorer', 'kilimanjaro-machame-trek']
const featuredDestinationSlugs = [
  'serengeti-national-park',
  'ngorongoro-conservation-area',
  'tarangire-national-park',
  'mount-kilimanjaro',
  'lake-manyara-national-park',
  'zanzibar',
]
const signatureIds = [
  'hot-air-balloon-safari',
  'private-night-game-drive',
  'sunset-dhow-cruise',
  'walk-with-the-hadzabe',
]

export function BestSellers() {
  const selection = bestSellerIds
    .map((id) => tours.find((t) => t.id === id))
    .filter((t): t is (typeof tours)[number] => Boolean(t))

  return (
    <section aria-labelledby="best-sellers-heading" className="bg-surface">
      <div className="mx-auto max-w-shell px-5 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          id="best-sellers-heading"
          eyebrow="Best sellers"
          title="Popular Tours & Safaris"
          description="Our most-loved journeys, refined over years of guiding travellers through Tanzania's wild places."
          action={<TextLink to="/safaris">Browse all tours</TextLink>}
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {selection.map((tour, i) => (
            <Reveal key={tour.id} as="li" delay={i * 0.06} className="h-full">
              <TourCard tour={tour} eager={i === 0} />
            </Reveal>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <Button to="/safaris" variant="secondary" size="lg">
            Browse All Tours <span aria-hidden="true">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export function InspirationTiles() {
  const tiles = [
    {
      title: 'Safari Adventures',
      description: 'Classic game-drive and mobile-camping safaris across the northern circuit.',
      image: images.tileSafari,
      imageAlt: 'A lioness walking past a safari vehicle on the golden Serengeti plains at sunrise',
      to: '/safaris',
    },
    {
      title: 'Kilimanjaro & Meru Treks',
      description: 'Guided climbs on Marangu, Machame, Lemosho, Rongai and Umbwe.',
      image: images.tileTrek,
      imageAlt: 'Trekkers ascending a ridge on Mount Kilimanjaro above the clouds at dawn',
      to: '/trekking',
    },
    {
      title: 'Zanzibar & the Spice Islands',
      description: 'Beach time on Zanzibar, Pemba and Mafia, at whatever pace suits you.',
      image: images.tileIslands,
      imageAlt: 'A white sand Zanzibar beach with leaning palm trees and a wooden dhow on turquoise water',
      to: '/beach',
    },
    {
      title: 'Culture & Community',
      description: 'Time with Maasai, Hadzabe and Datoga communities, and Olduvai Gorge.',
      image: images.tileCulture,
      imageAlt: 'Maasai community members in red shukas walking across open savannah at golden hour',
      to: '/culture',
    },
  ]

  return (
    <section aria-labelledby="inspiration-heading" className="bg-ivory">
      <div className="mx-auto max-w-shell px-5 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          id="inspiration-heading"
          eyebrow="Travel inspiration"
          title="Find Your Kind of Journey"
          description="Four ways into Tanzania. Most travellers end up combining two."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile, i) => (
            <Reveal key={tile.title} as="li" delay={i * 0.05} className="h-full">
              <CategoryTile {...tile} className="aspect-[3/4] h-full" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function SignatureExperiences() {
  const selection = signatureIds
    .map((id) => experiences.find((e) => e.id === id))
    .filter((e): e is (typeof experiences)[number] => Boolean(e))

  return (
    <section aria-labelledby="signature-heading" className="bg-surface">
      <div className="mx-auto max-w-shell px-5 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          id="signature-heading"
          eyebrow="Unmissable moments"
          title="Signature Experiences"
          description="Short, singular moments we build into longer journeys."
          action={<TextLink to="/experiences">View all</TextLink>}
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {selection.map((experience, i) => (
            <Reveal key={experience.id} as="li" delay={i * 0.05} className="h-full">
              <ExperienceCard experience={experience} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function FeaturedDestinations() {
  const selection = featuredDestinationSlugs
    .map((slug) => destinations.find((d) => d.slug === slug))
    .filter((d): d is (typeof destinations)[number] => Boolean(d))

  return (
    <section aria-labelledby="featured-destinations-heading" className="bg-ivory">
      <div className="mx-auto max-w-shell px-5 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          id="featured-destinations-heading"
          eyebrow="Handpicked for you"
          title="Featured Destinations"
          description="Iconic places, chosen for their beauty, wonder and unforgettable wildlife."
          action={<TextLink to="/destinations">All destinations</TextLink>}
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {selection.map((destination, i) => (
            <Reveal key={destination.id} as="li" delay={i * 0.05} className="h-full">
              <DestinationCard destination={destination} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
