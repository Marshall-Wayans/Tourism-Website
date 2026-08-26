import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPinIcon, PhoneIcon, MailIcon, CheckCircle2Icon } from 'lucide-react'
import { company } from '../../data/company'
import { Button } from '../ui/Button'

const columns = [
  {
    title: 'Destinations',
    links: [
      { label: 'Serengeti', to: '/destinations/serengeti-national-park' },
      { label: 'Ngorongoro Crater', to: '/destinations/ngorongoro-conservation-area' },
      { label: 'Tarangire', to: '/destinations/tarangire-national-park' },
      { label: 'Ruaha', to: '/destinations/ruaha-national-park' },
      { label: 'Zanzibar', to: '/destinations/zanzibar' },
      { label: 'All destinations', to: '/destinations' },
    ],
  },
  {
    title: 'Safaris & Trekking',
    links: [
      { label: 'All safaris', to: '/safaris' },
      { label: 'Kilimanjaro routes', to: '/kilimanjaro-routes' },
      { label: 'Trekking', to: '/trekking' },
      { label: 'Migration tracker', to: '/migration-tracker' },
      { label: 'Build my trip', to: '/build-my-trip' },
    ],
  },
  {
    title: 'Experiences',
    links: [
      { label: 'Signature experiences', to: '/experiences' },
      { label: 'Beach & islands', to: '/beach' },
      { label: 'Culture & heritage', to: '/culture' },
      { label: 'Traveller gallery', to: '/gallery' },
      { label: 'Journal', to: '/journal' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our story', to: '/about' },
      { label: 'Meet the guides', to: '/guides' },
      { label: 'Travel tips & FAQ', to: '/faq' },
      { label: 'Testimonials', to: '/testimonials' },
      { label: 'Responsible travel', to: '/responsible-travel' },
    ],
  },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 700))
    setStatus('success')
  }

  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto max-w-shell px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_2fr]">
          <div>
            <p className="font-display text-2xl text-ivory">
              {company.shortName}
              <span className="text-gold"> Tanzania</span>
            </p>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ivory/70">{company.statement}</p>

            <div className="mt-8 space-y-3 text-[14px] text-ivory/75">
              <p className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {company.officeAddress}
              </p>
              <a href={company.phoneHref} className="flex items-center gap-3 transition-colors hover:text-ivory">
                <PhoneIcon className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {company.phoneLabel}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 transition-colors hover:text-ivory">
                <MailIcon className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {company.email}
              </a>
            </div>

            <div className="mt-8">
              <p className="text-eyebrow font-semibold uppercase text-gold">Follow along</p>
              <ul className="mt-3 flex flex-wrap gap-3">
                {company.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="rounded-pill border border-ivory/20 px-4 py-2 text-[13px] text-ivory/80 transition-colors duration-200 ease-premium hover:border-gold hover:text-gold"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[12px] text-ivory/45">
                Social handles to be confirmed. A live Instagram feed can be connected to this area.
              </p>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="text-eyebrow font-semibold uppercase text-gold">{col.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-[14px] text-ivory/70 transition-colors duration-200 ease-premium hover:text-ivory"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 rounded-card border border-ivory/12 bg-ivory/[0.04] p-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-[26px] leading-tight text-ivory">
              Get migration updates, seasonal availability and travel stories in your inbox.
            </h2>
            <p className="mt-2 text-[14px] text-ivory/65">
              Roughly once a month. Where the herds are, which months are opening up, and notes from our guides.
            </p>
          </div>
          {status === 'success' ? (
            <p className="flex items-center gap-3 rounded-card border border-savannah/40 bg-savannah/15 px-5 py-4 text-[15px] text-ivory" role="status">
              <CheckCircle2Icon className="h-5 w-5 shrink-0 text-savannah" aria-hidden="true" />
              You&rsquo;re on the list. We&rsquo;ll bring Tanzania to your inbox.
            </p>
          ) : (
            <form onSubmit={subscribe} noValidate className="flex flex-col gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (status === 'error') setStatus('idle')
                  }}
                  placeholder="you@example.com"
                  aria-invalid={status === 'error'}
                  aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
                  className="w-full rounded-pill border border-ivory/25 bg-transparent px-5 py-3 text-[15px] text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
                <Button type="submit" loading={status === 'loading'} className="shrink-0">
                  {status === 'loading' ? 'Adding…' : 'Subscribe'}
                </Button>
              </div>
              {status === 'error' && (
                <p id="newsletter-error" role="alert" className="text-[13px] text-clay">
                  Please enter a valid email address.
                </p>
              )}
            </form>
          )}
        </div>

        <div className="mt-12 border-t border-ivory/12 pt-8">
          <p className="text-[12px] uppercase tracking-[0.12em] text-ivory/40">Memberships & credentials</p>
          <p className="mt-2 max-w-2xl text-[13px] text-ivory/55">
            Tourism board and association memberships will be listed here once the company&rsquo;s registrations and
            certificates are supplied. We do not display credentials we cannot verify.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-ivory/12 pt-8 text-[13px] text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. Brand name and details are placeholders pending client
            confirmation.
          </p>
          <ul className="flex flex-wrap gap-5">
            <li>
              <Link to="/privacy" className="transition-colors hover:text-ivory">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="transition-colors hover:text-ivory">
                Terms
              </Link>
            </li>
            <li>
              <a href={company.socials[0].href} className="inline-flex items-center gap-1.5 transition-colors hover:text-ivory">
                <svg
  xmlns="http://www.w3.org/2000/svg"
  width="14"
  height="14"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
</svg>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
