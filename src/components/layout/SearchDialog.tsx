import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchIcon, SearchXIcon } from 'lucide-react'
import { Drawer } from '../ui/Drawer'
import { Skeleton } from '../ui/Skeleton'
import { search } from '../../utils/search'

const FILTERS = ['All', 'Destination', 'Tour', 'Experience', 'Trekking route', 'Journal'] as const

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<string>('All')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!query) {
      setLoading(false)
      return
    }
    setLoading(true)
    const t = window.setTimeout(() => setLoading(false), 260)
    return () => window.clearTimeout(t)
  }, [query, filter])

  const results = useMemo(() => search(query, filter), [query, filter])

  return (
    <Drawer
      open={open}
      onClose={onClose}
      side="top"
      title="Search Tanzania"
      description="Destinations, safaris, trekking routes, experiences and journal stories."
      labelledBy="search-dialog-title"
    >
      <div className="mx-auto w-full max-w-3xl">
        <div className="relative">
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone" aria-hidden="true" />
          <label htmlFor="site-search" className="sr-only">
            Search destinations, safaris, experiences and stories
          </label>
          <input
            id="site-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try “Serengeti”, “Machame”, “whale sharks”…"
            className="w-full rounded-pill border border-hairline bg-surface py-3.5 pl-12 pr-4 text-[15px] text-espresso placeholder:text-stone/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/25"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-pill border px-3.5 py-1.5 text-[13px] font-medium transition-[background-color,border-color,color] duration-200 ease-premium ${
                filter === f
                  ? 'border-gold bg-gold/15 text-gold-dark'
                  : 'border-hairline bg-surface text-stone hover:border-gold/50 hover:text-espresso'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-6 pb-4">
          {loading ? (
            <ul className="space-y-3" aria-live="polite">
              {Array.from({ length: 4 }).map((_, i) => (
                <li key={i} className="flex gap-4 rounded-card border border-hairline bg-surface p-3">
                  <Skeleton className="h-16 w-24 rounded-lg" />
                  <div className="flex-1 space-y-2 py-1">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </li>
              ))}
            </ul>
          ) : results.length === 0 ? (
            <div className="rounded-card border border-dashed border-hairline bg-surface px-6 py-12 text-center">
              <SearchXIcon className="mx-auto h-8 w-8 text-gold" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl text-espresso">
                We couldn&rsquo;t find a journey matching that search.
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-[14px] text-stone">
                Try a park, a mountain route or an island — or tell a travel designer what you have in mind.
              </p>
              <Link
                to="/plan-my-trip"
                onClick={onClose}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-dark"
              >
                Plan My Trip <span aria-hidden="true">→</span>
              </Link>
            </div>
          ) : (
            <ul className="space-y-3" aria-live="polite">
              {results.map((r) => (
                <li key={r.id}>
                  <Link
                    to={r.to}
                    onClick={onClose}
                    className="flex items-center gap-4 rounded-card border border-hairline bg-surface p-3 transition-[border-color,box-shadow] duration-200 ease-premium hover:border-gold/40 hover:shadow-card"
                  >
                    <img
                      src={r.image}
                      alt=""
                      loading="lazy"
                      className="h-16 w-24 shrink-0 rounded-lg object-cover"
                    />
                    <span className="min-w-0">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gold">{r.type}</span>
                      <span className="mt-0.5 block truncate font-display text-[17px] text-espresso">{r.title}</span>
                      <span className="block truncate text-[13px] text-stone">{r.meta}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Drawer>
  )
}
