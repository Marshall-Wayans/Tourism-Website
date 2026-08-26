import React from 'react'
import { Button } from './Button'

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  actionTo,
  secondary,
}: {
  icon: React.ReactNode
  title: string
  description: string
  actionLabel?: string
  actionTo?: string
  secondary?: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center rounded-card border border-dashed border-hairline bg-surface px-6 py-14 text-center">
      <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold/12 text-gold" aria-hidden="true">
        {icon}
      </span>
      <h3 className="font-display text-2xl text-espresso">{title}</h3>
      <p className="mt-2 max-w-md text-[15px] leading-relaxed text-stone">{description}</p>
      {(actionLabel && actionTo) || secondary ? (
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {actionLabel && actionTo && (
            <Button to={actionTo} size="md">
              {actionLabel}
            </Button>
          )}
          {secondary}
        </div>
      ) : null}
    </div>
  )
}
