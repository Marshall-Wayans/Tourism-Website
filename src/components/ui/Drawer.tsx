import React, { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { XIcon } from 'lucide-react'

const EASE = [0.23, 1, 0.32, 1] as const

export function Drawer({
  open,
  onClose,
  title,
  description,
  children,
  side = 'right',
  labelledBy = 'drawer-title',
}: {
  open: boolean
  onClose: () => void
  title: string
  description?: string
  children: React.ReactNode
  side?: 'right' | 'top'
  labelledBy?: string
}) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const previous = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    const timer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>(
        'input, select, textarea, button, [href], [tabindex]:not([tabindex="-1"])',
      )?.focus()
    }, 60)

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        )
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      window.clearTimeout(timer)
      previous?.focus?.()
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[80]">
          <motion.button
            type="button"
            aria-label="Close panel"
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-espresso/45 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE }}
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            className={
              side === 'right'
                ? 'absolute right-0 top-0 flex h-full w-full max-w-lg flex-col bg-ivory shadow-lift'
                : 'absolute inset-x-0 top-0 max-h-[88vh] overflow-hidden bg-ivory shadow-lift'
            }
            initial={side === 'right' ? { x: '100%' } : { y: '-100%' }}
            animate={side === 'right' ? { x: 0 } : { y: 0 }}
            exit={side === 'right' ? { x: '100%' } : { y: '-100%' }}
            transition={{ duration: 0.28, ease: EASE }}
          >
            <div className="flex items-start justify-between gap-6 border-b border-hairline px-6 py-5">
              <div>
                <h2 id={labelledBy} className="font-display text-2xl text-espresso">
                  {title}
                </h2>
                {description && <p className="mt-1 text-[14px] leading-relaxed text-stone">{description}</p>}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close panel"
                className="mt-0.5 rounded-full p-2 text-stone transition-colors duration-200 ease-premium hover:bg-espresso/5 hover:text-espresso"
              >
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
