import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SearchIcon, HeartIcon, GiftIcon, MenuIcon, ChevronDownIcon, BriefcaseIcon } from 'lucide-react'
import { headerNavigation } from './NavConfig'
import { MobileNav } from './MobileNav'
import { NotificationsMenu } from './NotificationsMenu'
import { Button } from '../ui/Button'
import { useWishlist } from '../../contexts/WishlistContext'
import { useAccount } from '../../contexts/AccountContext'
import { company } from '../../data/company'
import { SearchDialog } from './SearchDialog'

export function Header({ transparent }: { transparent: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const { items } = useWishlist()
  const { user } = useAccount()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpenMenu(null)
    setNotificationsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenMenu(null)
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const onDark = transparent && !scrolled
  const iconBtn = `rounded-full p-2 transition-colors duration-200 ease-premium ${
    onDark ? 'text-white hover:bg-white/15' : 'text-espresso hover:bg-espresso/6'
  }`

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-espresso focus:px-5 focus:py-3 focus:text-sm focus:text-ivory"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-[background-color,box-shadow,padding,border-color] duration-300 ease-premium ${
          onDark
            ? 'border-b border-transparent bg-gradient-to-b from-espresso/55 to-transparent py-4'
            : 'border-b border-hairline bg-ivory/95 py-2.5 shadow-header backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex max-w-shell items-center gap-6 px-5 lg:px-8" ref={navRef}>
          <Link
            to="/"
            className={`shrink-0 font-display text-[21px] leading-none tracking-tight transition-colors duration-200 ease-premium ${
              onDark ? 'text-white' : 'text-espresso'
            }`}
          >
            {company.shortName}
            <span className={onDark ? 'text-gold' : 'text-gold'}> Tanzania</span>
          </Link>

          <nav aria-label="Main" className="hidden flex-1 justify-center xl:flex">
            <ul className="flex items-center gap-1">
              {headerNavigation.map((item) => (
                <li key={item.label} className="relative">
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                        aria-expanded={openMenu === item.label}
                        aria-haspopup="true"
                        className={`inline-flex items-center gap-1 rounded-pill px-3 py-2 text-[14px] font-medium transition-colors duration-200 ease-premium ${
                          onDark ? 'text-white/90 hover:text-white' : 'text-espresso hover:text-gold-dark'
                        }`}
                      >
                        {item.label}
                        <ChevronDownIcon
                          className={`h-3.5 w-3.5 transition-transform duration-200 ease-premium ${
                            openMenu === item.label ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      {openMenu === item.label && (
                        <div className="absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 overflow-hidden rounded-card border border-hairline bg-surface py-2 shadow-lift">
                          <ul>
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <Link
                                  to={child.to}
                                  className="block px-4 py-2 text-[14px] text-stone transition-colors duration-200 ease-premium hover:bg-ivory hover:text-espresso"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.to}
                      className={`rounded-pill px-3 py-2 text-[14px] font-medium transition-colors duration-200 ease-premium ${
                        onDark ? 'text-white/90 hover:text-white' : 'text-espresso hover:text-gold-dark'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link
                  to="/plan-my-trip"
                  className={`rounded-pill px-3 py-2 text-[14px] font-medium transition-colors duration-200 ease-premium ${
                    onDark ? 'text-white/90 hover:text-white' : 'text-espresso hover:text-gold-dark'
                  }`}
                >
                  Plan My Trip
                </Link>
              </li>
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-1 xl:ml-0">
            <button type="button" onClick={() => setSearchOpen(true)} aria-label="Search the site" className={iconBtn}>
              <SearchIcon className="h-[18px] w-[18px]" aria-hidden="true" />
            </button>

            <Link
              to="/wishlist"
              aria-label={`Saved items${items.length ? `, ${items.length} saved` : ''}`}
              className={`relative hidden sm:inline-flex ${iconBtn}`}
            >
              <HeartIcon className="h-[18px] w-[18px]" aria-hidden="true" />
              {items.length > 0 && (
                <span className="absolute right-1 top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-espresso">
                  {items.length}
                </span>
              )}
            </Link>

            <div className="hidden sm:block">
              <NotificationsMenu
                open={notificationsOpen}
                onToggle={() => setNotificationsOpen((v) => !v)}
                onClose={() => setNotificationsOpen(false)}
                onDark={onDark}
              />
            </div>

            <Link to="/rewards" aria-label="Returning traveller programme" className={`hidden lg:inline-flex ${iconBtn}`}>
              <GiftIcon className="h-[18px] w-[18px]" aria-hidden="true" />
            </Link>

            {user ? (
              <Link
                to="/my-trips"
                className="ml-1 hidden items-center gap-2 rounded-pill bg-gold px-4 py-2 text-[13px] font-semibold text-espresso transition-colors duration-200 ease-premium hover:bg-gold-dark hover:text-white sm:inline-flex"
              >
                <BriefcaseIcon className="h-4 w-4" aria-hidden="true" />
                My Trips
              </Link>
            ) : (
              <div className="ml-1 hidden sm:block">
                <Button to="/sign-in" variant={onDark ? 'light' : 'secondary'} size="sm">
                  My Trips
                </Button>
              </div>
            )}

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={`${iconBtn} xl:hidden`}
            >
              <MenuIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
