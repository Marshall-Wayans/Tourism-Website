import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPinIcon, CalendarIcon, UsersIcon, SearchIcon, MinusIcon, PlusIcon } from 'lucide-react'
import { Button } from '../ui/Button'

const QUICK_DESTINATIONS = [
  { label: 'Not sure yet — advise me', value: '' },
  { label: 'Serengeti', value: 'serengeti-national-park' },
  { label: 'Ngorongoro Crater', value: 'ngorongoro-conservation-area' },
  { label: 'Kilimanjaro', value: 'mount-kilimanjaro' },
  { label: 'Zanzibar', value: 'zanzibar' },
  { label: 'Tarangire', value: 'tarangire-national-park' },
  { label: 'Ruaha', value: 'ruaha-national-park' },
]

export function HeroPlanner() {
  const navigate = useNavigate()
  const [destination, setDestination] = useState('')
  const [when, setWhen] = useState('')
  const [travellers, setTravellers] = useState(2)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (destination) params.set('destination', destination)
    if (when) params.set('when', when)
    params.set('travellers', String(travellers))
    navigate(`/plan-my-trip?${params.toString()}`)
  }

  return (
    <div className="relative z-10 mx-auto w-full max-w-shell px-5 pb-0 lg:px-8">
      <form
        onSubmit={submit}
        aria-label="Start planning your trip"
        className="translate-y-1/2 rounded-card border border-hairline bg-surface p-4 shadow-lift sm:p-5"
      >
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr_auto] lg:items-end">
          <div>
            <label htmlFor="planner-destination" className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-stone">
              <MapPinIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              Where to?
            </label>
            <select
              id="planner-destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-hairline bg-surface px-3.5 py-2.5 text-[15px] text-espresso focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/25"
            >
              {QUICK_DESTINATIONS.map((d) => (
                <option key={d.label} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="planner-when" className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-stone">
              <CalendarIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              When?
            </label>
            <input
              id="planner-when"
              type="month"
              value={when}
              onChange={(e) => setWhen(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-hairline bg-surface px-3.5 py-2.5 text-[15px] text-espresso focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/25"
            />
          </div>

          <div>
            <span className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-stone">
              <UsersIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              Travellers
            </span>
            <div className="mt-1.5 flex items-center justify-between rounded-xl border border-hairline bg-surface px-2 py-1.5">
              <button
                type="button"
                onClick={() => setTravellers((n) => Math.max(1, n - 1))}
                aria-label="Remove a traveller"
                className="rounded-full p-2 text-espresso transition-colors duration-200 ease-premium hover:bg-ivory disabled:opacity-40"
                disabled={travellers <= 1}
              >
                <MinusIcon className="h-4 w-4" aria-hidden="true" />
              </button>
              <span aria-live="polite" className="text-[15px] font-medium text-espresso">
                {travellers} {travellers === 1 ? 'traveller' : 'travellers'}
              </span>
              <button
                type="button"
                onClick={() => setTravellers((n) => Math.min(16, n + 1))}
                aria-label="Add a traveller"
                className="rounded-full p-2 text-espresso transition-colors duration-200 ease-premium hover:bg-ivory disabled:opacity-40"
                disabled={travellers >= 16}
              >
                <PlusIcon className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full lg:w-auto">
            <SearchIcon className="h-4 w-4" aria-hidden="true" />
            Search
          </Button>
        </div>
      </form>
    </div>
  )
}
