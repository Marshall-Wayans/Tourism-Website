import React from 'react'
import { CameraIcon } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { SectionHeading } from '../components/ui/Typography'
import { EmptyState } from '../components/ui/EmptyState'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { images } from '../data/images'
import { useEnquiry } from '../contexts/EnquiryContext'
import { useSeo } from '../hooks/useSeo'

const fieldPhotos = [
  { src: images.migrationCrossing, alt: 'Wildebeest crossing the Mara River in the northern Serengeti', caption: 'Mara River crossing, northern Serengeti' },
  { src: images.balloon, alt: 'A hot air balloon drifting over the Serengeti plains at dawn', caption: 'Balloon lift-off, Seronera' },
  { src: images.tarangire, alt: 'Elephants walking beneath baobab trees in Tarangire', caption: 'Baobabs and elephants, Tarangire' },
  { src: images.kilimanjaro, alt: 'Kilimanjaro summit above a sea of cloud at sunrise', caption: 'Summit morning, Kilimanjaro' },
  { src: images.dhow, alt: 'A dhow silhouetted against an Indian Ocean sunset', caption: 'Sunset dhow, Zanzibar channel' },
  { src: images.manyara, alt: 'Flamingos on the shallow soda water of Lake Manyara', caption: 'Flamingos, Lake Manyara' },
  { src: images.nightDrive, alt: 'A leopard caught in a spotlight during a night game drive', caption: 'Night drive, private concession' },
  { src: images.stoneTown, alt: 'A sunlit alley with carved wooden doors in Stone Town', caption: 'Stone Town, early morning' },
]

export function Gallery() {
  useSeo({
    title: 'Traveller Gallery',
    description:
      'Photographs from the field and, once travellers give permission, images shared by the people who travelled with us.',
    image: images.migrationCrossing,
  })

  const { openEnquiry } = useEnquiry()

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Tanzania, as our guides see it"
        description="Field photography from the parks, the mountain and the coast. Traveller submissions appear here once we have their permission."
        image={images.migrationCrossing}
        imageAlt="Wildebeest crossing the Mara River in the northern Serengeti"
        trail={[{ label: 'Home', to: '/' }, { label: 'Gallery' }]}
        compact
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-shell px-5 py-16 lg:px-8 lg:py-20">
          <SectionHeading eyebrow="From the field" title="Recent frames" />
          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {fieldPhotos.map((photo, i) => (
              <Reveal key={photo.src + i} delay={Math.min(i, 5) * 0.04}>
                <figure className="group overflow-hidden rounded-card border border-hairline bg-surface">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className={`w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.04] ${
                      i % 3 === 0 ? 'aspect-[4/5]' : i % 3 === 1 ? 'aspect-[4/3]' : 'aspect-square'
                    }`}
                  />
                  <figcaption className="px-5 py-4 text-[13.5px] text-stone">{photo.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-16 lg:py-20">
          <EmptyState
            icon={<CameraIcon className="h-6 w-6" />}
            title="Traveller photographs coming soon."
            description="We only publish traveller images with written permission and full credit. If you have travelled with us and would like your photographs featured, we would love to see them."
            secondary={
              <Button onClick={() => openEnquiry('Photo submission')}>Share your photographs</Button>
            }
          />
        </div>
      </section>
    </>
  )
}
