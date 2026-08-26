import React from 'react'
import { Hero } from '../components/home/Hero'
import { TrustStrip } from '../components/sections/TrustStrip'
import { StatBand } from '../components/sections/StatBand'
import {
  BestSellers,
  InspirationTiles,
  SignatureExperiences,
  FeaturedDestinations,
} from '../components/home/HomeSections'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { CtaBanner } from '../components/sections/CtaBanner'
import { images } from '../data/images'
import { useSeo } from '../hooks/useSeo'

export function Home() {
  useSeo({
    title: 'Tanzania Safaris, Kilimanjaro Treks & Zanzibar Journeys',
    description:
      'A Tanzanian-owned travel studio in Arusha designing Serengeti safaris, Kilimanjaro treks, Zanzibar escapes and cultural journeys around each traveller.',
    image: images.heroElephants,
    path: '/',
  })

  return (
    <>
      <Hero />
      <div className="h-[180px] bg-surface sm:h-[168px] lg:h-[70px]" aria-hidden="true" />
      <TrustStrip />
      <StatBand />
      <BestSellers />
      <InspirationTiles />
      <SignatureExperiences />
      <FeaturedDestinations />
      <TestimonialsSection />
      <CtaBanner />
    </>
  )
}
