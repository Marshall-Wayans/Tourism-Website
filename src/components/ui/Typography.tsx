import React from 'react'
import { cn } from '../../utils/cn'

export function Eyebrow({
  children,
  className,
  tone = 'gold',
  as: As = 'p',
}: {
  children: React.ReactNode
  className?: string
  tone?: 'gold' | 'light'
  as?: 'p' | 'span' | 'div'
}) {
  return (
    <As
      className={cn(
        'text-[11px] font-semibold uppercase leading-none tracking-[0.18em]',
        tone === 'gold' ? 'text-gold' : 'text-white/80',
        className,
      )}
    >
      {children}
    </As>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  action,
  className,
  id,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  action?: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between',
        align === 'center' && 'sm:flex-col sm:items-center',
        className,
      )}
    >
      <div className={cn('max-w-2xl', align === 'center' && 'text-center')}>
        {eyebrow && <Eyebrow tone={tone === 'light' ? 'light' : 'gold'}>{eyebrow}</Eyebrow>}
        <h2
          id={id}
          className={cn(
            'mt-3 font-display text-section',
            tone === 'light' ? 'text-white' : 'text-espresso',
          )}
        >
          {title}
        </h2>
        {description && (
          <p className={cn('mt-3 text-[15px] leading-relaxed', tone === 'light' ? 'text-white/80' : 'text-stone')}>
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
