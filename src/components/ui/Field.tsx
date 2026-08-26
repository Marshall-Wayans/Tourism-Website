import React from 'react'
import { AlertCircleIcon } from 'lucide-react'
import { cn } from '../../utils/cn'

const controlClasses =
  'w-full rounded-xl border border-hairline bg-surface px-4 py-3 text-[15px] text-espresso placeholder:text-stone/60 transition-[border-color,box-shadow] duration-200 ease-premium focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/25'

export function Field({
  id,
  label,
  hint,
  error,
  required,
  children,
  className,
}: {
  id: string
  label: string
  hint?: string
  error?: string
  required?: boolean
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={id} className="text-[13px] font-medium text-espresso">
        {label}
        {required && (
          <span className="ml-1 text-clay" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="text-[12px] text-stone">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="flex items-center gap-1.5 text-[12px] font-medium text-clay">
          <AlertCircleIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

export const TextInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function TextInput({ className, ...props }, ref) {
    return <input ref={ref} className={cn(controlClasses, className)} {...props} />
  },
)

export function TextArea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(controlClasses, 'min-h-[120px] resize-y', className)} {...props} />
}

export function Select({ className, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn(controlClasses, 'appearance-none bg-surface pr-10', className)} {...props}>
      {children}
    </select>
  )
}

export function ChipGroup({
  legend,
  options,
  selected,
  onToggle,
  name,
}: {
  legend: string
  options: readonly string[]
  selected: string[]
  onToggle: (value: string) => void
  name: string
}) {
  return (
    <fieldset>
      <legend className="text-[13px] font-medium text-espresso">{legend}</legend>
      <div className="mt-2.5 flex flex-wrap gap-2">
        {options.map((option) => {
          const checked = selected.includes(option)
          return (
            <label
              key={option}
              className={cn(
                'cursor-pointer rounded-pill border px-4 py-2 text-[13px] font-medium transition-[background-color,border-color,color] duration-200 ease-premium',
                checked
                  ? 'border-gold bg-gold/15 text-gold-dark'
                  : 'border-hairline bg-surface text-stone hover:border-gold/50 hover:text-espresso',
              )}
            >
              <input
                type="checkbox"
                name={name}
                value={option}
                checked={checked}
                onChange={() => onToggle(option)}
                className="sr-only"
              />
              {option}
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
