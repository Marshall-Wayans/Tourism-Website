import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { PlayIcon } from 'lucide-react'
import { images } from '../../data/images'
import { Button } from '../ui/Button'
import { Eyebrow } from '../ui/Typography'
import { HeroPlanner } from './HeroPlanner'

const EASE = [0.23, 1, 0.32, 1] as const

export function Hero() {
  const reduce = useReducedMotion()
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: EASE },
        }

  return (
    <section className="relative isolate flex min-h-[92vh] flex-col justify-end">
      <img
        src={images.heroElephants}
        alt="A herd of elephants walking in single file across golden Serengeti grassland at sunrise"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-espresso/85 via-espresso/45 to-espresso/10"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-espresso/70 to-transparent" aria-hidden="true" />

      <div className="mx-auto w-full max-w-shell px-5 pb-40 pt-36 sm:pb-44 lg:px-8 lg:pb-48">
        <motion.div className="max-w-2xl" {...fade(0.05)}>
          <Eyebrow tone="gold">Tanzania, yours to discover</Eyebrow>
        </motion.div>
        <motion.h1 className="mt-4 max-w-3xl font-display text-hero text-white" {...fade(0.12)}>
          Where the wild things still roam free.
        </motion.h1>
        <motion.p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/85" {...fade(0.2)}>
          From the endless plains of the Serengeti to the summit of Kilimanjaro and the shores of Zanzibar — safaris,
          treks and island escapes designed around you, led by the people who call Tanzania home.
        </motion.p>
        <motion.div className="mt-9 flex flex-wrap items-center gap-3" {...fade(0.28)}>
          <Button to="/safaris" size="lg">
            Explore Safaris <span aria-hidden="true">→</span>
          </Button>
          <Button to="/about" size="lg" variant="light">
            <PlayIcon className="h-4 w-4 fill-current" aria-hidden="true" />
            Watch Our Story
          </Button>
        </motion.div>
      </div>

      <HeroPlanner />
    </section>
  )
}
