import React, { useState } from 'react'
import { PlusIcon, MinusIcon } from 'lucide-react'

export interface AccordionItem {
  q: string
  a: string
}

export function Accordion({ items, idPrefix }: { items: AccordionItem[]; idPrefix: string }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {items.map((item, index) => {
        const expanded = open === index
        const panelId = `${idPrefix}-panel-${index}`
        const buttonId = `${idPrefix}-button-${index}`
        return (
          <div key={item.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : index)}
                className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors duration-200 ease-premium hover:text-gold-dark"
              >
                <span className="font-display text-lg text-espresso">{item.q}</span>
                <span className="mt-1 shrink-0 text-gold" aria-hidden="true">
                  {expanded ? <MinusIcon className="h-5 w-5" /> : <PlusIcon className="h-5 w-5" />}
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!expanded}>
              <p className="max-w-3xl pb-6 text-[15px] leading-relaxed text-stone">{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
