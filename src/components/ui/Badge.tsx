import React from 'react'
import { StarIcon } from 'lucide-react'
import { cn } from '../../utils/cn'

type Tone = 'gold' | 'green' | 'clay' | 'dark' | 'neutral'

const tones: Record<Tone, string> = {
  gold: 'bg-gold/15 text-gold-dark border-gold/30',
  green: 'bg-savannah/10 text-savannah border-savannah/25',
  clay: 'bg-clay/10 text-clay border-clay/25',
  dark: 'bg-espresso text-ivory border-espresso',
  neutral: 'bg-white/90 text-espresso border-hairline',
}

export function Badge({
  children,
  tone = 'neutral',
  className,
  icon,
}: {
  children: React.ReactNode
  tone?: Tone
  className?: string
  icon?: React.ReactNode
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-pill border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]',
        tones[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  )
}

export function Rating({
  value,
  label,
  className,
  tone = 'dark',
}: {
  value: number
  label?: string
  className?: string
  tone?: 'dark' | 'light'
}) {
  const rounded = Math.round(value)
  return (
    <span className={cn('inline-flex items-center gap-1.5', className)}>
      <span className="flex" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            className={cn('h-3.5 w-3.5', i < rounded ? 'fill-gold text-gold' : 'text-hairline')}
          />
        ))}
      </span>
      <span
        className={cn('text-[13px] font-medium', tone === 'light' ? 'text-white/85' : 'text-espresso')}
      >
        {value.toFixed(1)}
      </span>
      {label && <span className="text-[13px] text-stone">{label}</span>}
      <span className="sr-only">{`Guide rating ${value.toFixed(1)} out of 5${label ? `, ${label}` : ''}`}</span>
    </span>
  )
}
