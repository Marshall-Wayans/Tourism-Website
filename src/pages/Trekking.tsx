import React from 'react'
import { Link } from 'react-router-dom'
import { MountainSnowIcon, ClockIcon, ActivityIcon } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { SectionHeading } from '../components/ui/Typography'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { WishlistButton } from '../components/ui/WishlistButton'
import { Reveal } from '../components/ui/Reveal'
import { CtaBanner } from '../components/sections/CtaBanner'
import { trekRoutes } from '../data/trekking'
import { images } from '../data/images'
import { useSeo } from '../hooks/useSeo'

const MOUNTAINS = ['Kilimanjaro', 'Mount Meru', 'Ol Doinyo Lengai', 'Mount Hanang'] as const

export function Trekking() {
  useSeo({
    title: 'Kilimanjaro & Tanzania Trekking Routes',
    description:
      'Machame, Lemosho, Marangu, Rongai, Umbwe and the Northern Circuit on Kilimanjaro, plus Mount Meru, Ol Doinyo Lengai and Mount Hanang — guided by Tanzanian mountain crews.',
    image: images.machame,
  })

  return (
    <>
      <PageHero
        eyebrow="Trekking"
        title="Four mountains, one long walk upwards"
        description="Kilimanjaro is the one everyone knows. Meru, Lengai and Hanang are the ones our guides talk about on the drive home."
        image={images.machame}
        imageAlt="Trekkers crossing the Shira Plateau on Kilimanjaro with the glaciated summit ahead"
        trail={[{ label: 'Home', to: '/' }, { label: 'Trekking' }]}
        actions={
          <Button to="/kilimanjaro-routes" size="lg">
            Compare Kilimanjaro routes <span aria-hidden="true">→</span>
          </Button>
        }
      />

      {MOUNTAINS.map((mountain) => {
        const routes = trekRoutes.filter((r) => r.mountain === mountain)
        if (routes.length === 0) return null
        return (
          <section key={mountain} aria-labelledby={`mountain-${mountain}`} className="odd:bg-ivory even:bg-surface">
            <div className="mx-auto max-w-shell px-5 py-16 lg:px-8 lg:py-20">
              <SectionHeading
                id={`mountain-${mountain}`}
                eyebrow={mountain === 'Kilimanjaro' ? '5,895 metres' : 'Beyond Kilimanjaro'}
                title={mountain}
                description={
                  mountain === 'Kilimanjaro'
                    ? 'Six routes to Uhuru Peak. The number of days on the mountain matters more than which one you pick.'
                    : undefined
                }
              />
              <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {routes.map((route, i) => (
                  <Reveal key={route.id} as="li" delay={i * 0.05} className="h-full">
                    <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-hairline bg-surface shadow-card transition-[box-shadow,transform] duration-300 ease-premium hover:-translate-y-1 hover:shadow-lift">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={route.heroImage}
                          alt={route.imageAlt}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.05]"
                        />
                        <div className="absolute left-4 top-4">
                          <Badge tone="dark">{route.difficulty}</Badge>
                        </div>
                        <div className="absolute right-4 top-4 z-10">
                          <WishlistButton id={route.id} kind="route" label={route.name} />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] text-stone">
                          <span className="inline-flex items-center gap-1.5">
                            <ClockIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                            {route.duration}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <ActivityIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                            {route.traffic} traffic
                          </span>
                        </div>
                        <h3 className="mt-3 font-display text-[21px] leading-snug text-espresso">
                          <Link
                            to={`/trekking/${route.slug}`}
                            className="transition-colors duration-200 ease-premium after:absolute after:inset-0 after:content-[''] hover:text-gold-dark"
                          >
                            {route.name}
                          </Link>
                        </h3>
                        <p className="mt-2 text-[14px] leading-relaxed text-stone">{route.character}</p>
                        <div className="mt-auto pt-5">
                          <div className="flex items-center justify-between gap-4 border-t border-hairline pt-4">
                            <span className="inline-flex items-center gap-1.5 text-[13px] text-stone">
                              <MountainSnowIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                              {route.mountain}
                            </span>
                            <span className="relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-transform duration-200 ease-premium group-hover:translate-x-0.5">
                              View Route <span aria-hidden="true">→</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>
        )
      })}

      <CtaBanner
        headline="Build the climb around the days you have"
        copy="Tell us your dates and your walking history, and we'll recommend the route with the strongest chance of a summit."
        subject="Trekking enquiry"
      />
    </>
  )
}
