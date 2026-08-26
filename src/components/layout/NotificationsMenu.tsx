import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BellIcon, CheckCheckIcon } from 'lucide-react'
import { useAccount } from '../../contexts/AccountContext'

export function NotificationsMenu({
  open,
  onToggle,
  onClose,
  onDark,
}: {
  open: boolean
  onToggle: () => void
  onClose: () => void
  onDark: boolean
}) {
  const { notifications, unreadCount, markAllRead, markRead } = useAccount()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`Notifications${unreadCount ? `, ${unreadCount} unread` : ''}`}
        className={`relative rounded-full p-2 transition-colors duration-200 ease-premium ${
          onDark ? 'text-white hover:bg-white/15' : 'text-espresso hover:bg-espresso/6'
        }`}
      >
        <BellIcon className="h-[18px] w-[18px]" aria-hidden="true" />
        {unreadCount > 0 && (
          <span className="absolute right-1 top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-clay px-1 text-[10px] font-semibold text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Notifications"
          className="absolute right-0 top-full z-50 mt-3 w-[340px] overflow-hidden rounded-card border border-hairline bg-surface shadow-lift"
        >
          <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
            <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-espresso">Notifications</p>
            {unreadCount > 0 && (
              <button
                type="button"
                onClick={markAllRead}
                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-gold hover:text-gold-dark"
              >
                <CheckCheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
                Mark all read
              </button>
            )}
          </div>

          {notifications.length === 0 ? (
            <div className="px-5 py-10 text-center">
              <p className="font-display text-lg text-espresso">You&rsquo;re all caught up.</p>
              <p className="mt-1.5 text-[13px] text-stone">
                Migration updates and enquiry replies will appear here.
              </p>
            </div>
          ) : (
            <ul className="max-h-[380px] overflow-y-auto">
              {notifications.map((n) => (
                <li key={n.id} className="border-b border-hairline last:border-0">
                  <Link
                    to={n.href}
                    role="menuitem"
                    onClick={() => {
                      markRead(n.id)
                      onClose()
                    }}
                    className={`block px-4 py-3.5 transition-colors duration-200 ease-premium hover:bg-ivory ${
                      n.read ? '' : 'bg-gold/[0.06]'
                    }`}
                  >
                    <span className="flex items-start gap-2.5">
                      {!n.read && <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />}
                      <span className={n.read ? 'pl-[18px]' : ''}>
                        <span className="block text-[14px] font-medium leading-snug text-espresso">{n.title}</span>
                        <span className="mt-1 block text-[13px] leading-relaxed text-stone">{n.body}</span>
                        <span className="mt-1.5 block text-[11px] uppercase tracking-[0.1em] text-stone/70">
                          {n.timestamp}
                        </span>
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
