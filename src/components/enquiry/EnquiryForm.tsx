import React, { useState } from 'react'
import { CheckCircle2Icon, MessageCircleIcon } from 'lucide-react'
import { Field, TextInput, TextArea, Select, ChipGroup } from '../ui/Field'
import { Button } from '../ui/Button'
import { useAccount } from '../../contexts/AccountContext'
import { company, tripTypes } from '../../data/company'
import { destinations } from '../../data/destinations'

interface Errors {
  name?: string
  email?: string
  notes?: string
}

export function EnquiryForm({
  subject,
  compact = false,
  onSubmitted,
}: {
  subject: string
  compact?: boolean
  onSubmitted?: () => void
}) {
  const { addEnquiry } = useAccount()
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Errors>({})
  const [reference, setReference] = useState('')
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    travellers: '2',
    destination: '',
    notes: '',
  })

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const validate = () => {
    const next: Errors = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter an email address we can reply to.'
    if (form.notes.trim().length < 10) next.notes = 'A sentence or two helps your designer get started.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      await new Promise((resolve) => setTimeout(resolve, 900))
      const record = addEnquiry({
        subject,
        travelWindow: form.dates || 'Dates flexible',
        travellers: form.travellers,
        tripTypes: selectedTypes,
      })
      setReference(record.reference)
      setStatus('success')
      onSubmitted?.()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-card border border-savannah/25 bg-savannah/5 p-8 text-center" role="status" aria-live="polite">
        <CheckCircle2Icon className="mx-auto h-11 w-11 text-savannah" aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl text-espresso">Thank you.</h3>
        <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-stone">
          A Tanzania travel designer will be in touch within 24 hours. Your reference is{' '}
          <span className="font-medium text-espresso">{reference}</span> — you can follow it in My Trips.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button to="/my-trips" variant="secondary" size="sm">
            View in My Trips
          </Button>
          <Button href={company.whatsappHref} target="_blank" rel="noreferrer" variant="ghost" size="sm">
            <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
            Message us on WhatsApp
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <p className="text-[15px] leading-relaxed text-stone">
        Tell us what you&rsquo;re dreaming about. We&rsquo;ll help shape the details.
      </p>

      <div className={compact ? 'space-y-5' : 'grid gap-5 sm:grid-cols-2'}>
        <Field id="enq-name" label="Your name" required error={errors.name}>
          <TextInput
            id="enq-name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={update('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'enq-name-error' : undefined}
          />
        </Field>
        <Field id="enq-email" label="Email" required error={errors.email}>
          <TextInput
            id="enq-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={update('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'enq-email-error' : undefined}
          />
        </Field>
        <Field id="enq-phone" label="Phone or WhatsApp" hint="Optional — useful for quick questions.">
          <TextInput id="enq-phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={update('phone')} />
        </Field>
        <Field id="enq-dates" label="Travel dates" hint="Approximate is fine.">
          <TextInput id="enq-dates" name="dates" placeholder="e.g. late August 2027" value={form.dates} onChange={update('dates')} />
        </Field>
        <Field id="enq-travellers" label="Number of travellers">
          <Select id="enq-travellers" name="travellers" value={form.travellers} onChange={update('travellers')}>
            {['1', '2', '3', '4', '5', '6', '7', '8+'].map((n) => (
              <option key={n} value={n}>
                {n} {n === '1' ? 'traveller' : 'travellers'}
              </option>
            ))}
          </Select>
        </Field>
        <Field id="enq-destination" label="Destination interest">
          <Select id="enq-destination" name="destination" value={form.destination} onChange={update('destination')}>
            <option value="">Not sure yet — advise me</option>
            {destinations.map((d) => (
              <option key={d.id} value={d.slug}>
                {d.name}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <ChipGroup
        legend="Trip type"
        name="tripType"
        options={tripTypes}
        selected={selectedTypes}
        onToggle={(value) =>
          setSelectedTypes((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))
        }
      />

      <Field id="enq-notes" label="What are you dreaming about?" required error={errors.notes}>
        <TextArea
          id="enq-notes"
          name="notes"
          value={form.notes}
          onChange={update('notes')}
          placeholder="Migration crossings, a first Kilimanjaro climb, a honeymoon that ends on Zanzibar…"
          aria-invalid={Boolean(errors.notes)}
          aria-describedby={errors.notes ? 'enq-notes-error' : undefined}
        />
      </Field>

      {status === 'error' && (
        <p role="alert" className="rounded-xl border border-clay/30 bg-clay/5 px-4 py-3 text-[13px] text-clay">
          Please check the highlighted fields and send again.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <Button type="submit" size="lg" loading={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : 'Send My Enquiry'}
        </Button>
        <p className="text-[13px] text-stone">{company.responseTime} No payment is ever requested here.</p>
      </div>
    </form>
  )
}
