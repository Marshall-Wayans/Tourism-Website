import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRightIcon } from 'lucide-react'

export function Breadcrumbs({
  trail,
  tone = 'dark',
}: {
  trail: { label: string; to?: string }[]
  tone?: 'dark' | 'light'
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px]">
        {trail.map((crumb, i) => {
          const last = i === trail.length - 1
          return (
            <li key={crumb.label} className="flex items-center gap-1.5">
              {crumb.to && !last ? (
                <Link
                  to={crumb.to}
                  className={
                    tone === 'light'
                      ? 'text-white/75 transition-colors duration-200 ease-premium hover:text-white'
                      : 'text-stone transition-colors duration-200 ease-premium hover:text-gold-dark'
                  }
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? 'page' : undefined}
                  className={tone === 'light' ? 'text-white' : 'font-medium text-espresso'}
                >
                  {crumb.label}
                </span>
              )}
              {!last && (
                <ChevronRightIcon
                  className={tone === 'light' ? 'h-3.5 w-3.5 text-white/50' : 'h-3.5 w-3.5 text-stone/50'}
                  aria-hidden="true"
                />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
