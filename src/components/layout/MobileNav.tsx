import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDownIcon, HeartIcon, UserIcon, PhoneIcon, MessageCircleIcon } from 'lucide-react'
import { Drawer } from '../ui/Drawer'
import { Button } from '../ui/Button'
import { headerNavigation } from './NavConfig'
import { useAccount } from '../../contexts/AccountContext'
import { company } from '../../data/company'

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>('Destinations')
  const { user } = useAccount()

  return (
    <Drawer open={open} onClose={onClose} title="Menu" labelledBy="mobile-nav-title">
      <nav aria-label="Main">
        <ul className="divide-y divide-hairline border-y border-hairline">
          {headerNavigation.map((item) => {
            const isOpen = expanded === item.label
            return (
              <li key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.to}
                    onClick={onClose}
                    className="flex-1 py-4 font-display text-xl text-espresso transition-colors duration-200 ease-premium hover:text-gold-dark"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      onClick={() => setExpanded(isOpen ? null : item.label)}
                      aria-expanded={isOpen}
                      aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${item.label}`}
                      className="rounded-full p-2 text-stone transition-colors duration-200 ease-premium hover:bg-espresso/5 hover:text-espresso"
                    >
                      <ChevronDownIcon
                        className={`h-5 w-5 transition-transform duration-200 ease-premium ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                  )}
                </div>
                {item.children && isOpen && (
                  <ul className="pb-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          to={child.to}
                          onClick={onClose}
                          className="block py-2 text-[15px] text-stone transition-colors duration-200 ease-premium hover:text-gold-dark"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <Link
          to="/wishlist"
          onClick={onClose}
          className="flex items-center justify-center gap-2 rounded-pill border border-hairline bg-surface py-3 text-sm font-medium text-espresso"
        >
          <HeartIcon className="h-4 w-4 text-gold" aria-hidden="true" />
          Wishlist
        </Link>
        <Link
          to={user ? '/my-trips' : '/sign-in'}
          onClick={onClose}
          className="flex items-center justify-center gap-2 rounded-pill border border-hairline bg-surface py-3 text-sm font-medium text-espresso"
        >
          <UserIcon className="h-4 w-4 text-gold" aria-hidden="true" />
          {user ? 'My Trips' : 'Sign in'}
        </Link>
      </div>

      <div className="mt-3">
        <Button to="/plan-my-trip" fullWidth size="lg">
          Plan My Trip
        </Button>
      </div>

      <div className="mt-8 space-y-3 border-t border-hairline pt-6 text-[14px]">
        <a href={company.phoneHref} className="flex items-center gap-3 text-stone hover:text-espresso">
          <PhoneIcon className="h-4 w-4 text-gold" aria-hidden="true" />
          {company.phoneLabel}
        </a>
        <a
          href={company.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 text-stone hover:text-espresso"
        >
          <MessageCircleIcon className="h-4 w-4 text-gold" aria-hidden="true" />
          {company.whatsappLabel}
        </a>
      </div>
    </Drawer>
  )
}
