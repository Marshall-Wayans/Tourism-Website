import React from 'react'
import { Breadcrumbs } from '../ui/Breadcrumbs'
import { Eyebrow } from '../ui/Typography'

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  trail,
  actions,
  meta,
  compact = false,
}: {
  eyebrow?: string
  title: string
  description?: string
  image: string
  imageAlt: string
  trail: { label: string; to?: string }[]
  actions?: React.ReactNode
  meta?: React.ReactNode
  compact?: boolean
}) {
  return (
    <section className={`relative isolate flex items-end overflow-hidden ${compact ? 'min-h-[46vh]' : 'min-h-[62vh]'}`}>
      <img
        src={image}
        alt={imageAlt}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-espresso via-espresso/65 to-espresso/25"
        aria-hidden="true"
      />
      <div className="mx-auto w-full max-w-shell px-5 pb-12 pt-32 lg:px-8 lg:pb-16">
        <Breadcrumbs trail={trail} tone="light" />
        {eyebrow && <Eyebrow tone="light" className="mt-6 text-gold">{eyebrow}</Eyebrow>}
        <h1 className="mt-3 max-w-3xl font-display text-hero text-white">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-white/80">{description}</p>}
        {meta && <div className="mt-6">{meta}</div>}
        {actions && <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>}
      </div>
    </section>
  )
}
