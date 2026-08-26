import React from 'react'
import { Link } from 'react-router-dom'

export function CategoryTile({
  title,
  description,
  image,
  imageAlt,
  to,
  className,
}: {
  title: string
  description: string
  image: string
  imageAlt: string
  to: string
  className?: string
}) {
  return (
    <article className={`group relative overflow-hidden rounded-card ${className ?? ''}`}>
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.05]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/45 to-transparent opacity-90"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-display text-[22px] leading-tight text-white">
          <Link to={to} className="after:absolute after:inset-0 after:content-['']">
            {title}
          </Link>
        </h3>
        <p className="mt-2 max-w-xs text-[13.5px] leading-relaxed text-white/80">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-transform duration-200 ease-premium group-hover:translate-x-1">
          Explore
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </article>
  )
}
