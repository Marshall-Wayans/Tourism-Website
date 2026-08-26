import React, { useState } from 'react'
import { PhoneIcon, MessageCircleIcon, XIcon, PlusIcon } from 'lucide-react'
import { company } from '../../data/company'

export function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-5 left-4 z-[70] flex flex-col items-start gap-3 sm:bottom-7 sm:left-6">
      {open && (
        <div className="flex flex-col gap-3">
          <a
            href={company.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-pill bg-savannah py-3 pl-3 pr-5 text-white shadow-lift transition-transform duration-200 ease-premium hover:-translate-y-0.5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15" aria-hidden="true">
              <MessageCircleIcon className="h-[18px] w-[18px]" />
            </span>
            <span className="text-left">
              <span className="block text-[13px] font-semibold leading-tight">WhatsApp</span>
              <span className="block text-[12px] leading-tight text-white/80">{company.whatsappLabel}</span>
            </span>
          </a>
          <a
            href={company.phoneHref}
            className="group flex items-center gap-3 rounded-pill bg-espresso py-3 pl-3 pr-5 text-ivory shadow-lift transition-transform duration-200 ease-premium hover:-translate-y-0.5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/12" aria-hidden="true">
              <PhoneIcon className="h-[18px] w-[18px]" />
            </span>
            <span className="text-left">
              <span className="block text-[13px] font-semibold leading-tight">Call us</span>
              <span className="block text-[12px] leading-tight text-ivory/70">{company.phoneLabel}</span>
            </span>
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close contact options' : 'Contact a Tanzania travel designer'}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-espresso shadow-lift transition-[transform,background-color] duration-200 ease-premium hover:bg-gold-dark hover:text-white"
      >
        {open ? (
          <XIcon className="h-6 w-6" aria-hidden="true" />
        ) : (
          <span className="relative flex items-center justify-center" aria-hidden="true">
            <MessageCircleIcon className="h-6 w-6" />
            <PlusIcon className="absolute -right-2 -top-2 h-3.5 w-3.5" />
          </span>
        )}
      </button>
    </div>
  )
}
