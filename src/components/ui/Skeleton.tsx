import React from 'react'
import { cn } from '../../utils/cn'

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn('shimmer rounded-md', className)} aria-hidden="true" />
}

export function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-card border border-hairline bg-surface" aria-hidden="true">
      <Skeleton className="aspect-[4/3] w-full rounded-none" />
      <div className="space-y-3 p-5">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-5/6" />
        <div className="pt-3">
          <Skeleton className="h-3 w-28" />
        </div>
      </div>
    </div>
  )
}

export function SkeletonGrid({ count = 3 }: { count?: number }) {
  return (
    <div
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      role="status"
      aria-live="polite"
      aria-label="Loading results"
    >
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
      <span className="sr-only">Loading</span>
    </div>
  )
}
