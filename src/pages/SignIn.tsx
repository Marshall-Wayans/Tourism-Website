import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Field, TextInput } from '../components/ui/Field'
import { Button } from '../components/ui/Button'
import { useAccount } from '../contexts/AccountContext'
import { useSeo } from '../hooks/useSeo'

export function SignIn() {
  useSeo({
    title: 'Sign in to My Trips',
    description: 'Access your saved journeys, enquiry history and trip updates.',
  })

  const { signIn } = useAccount()
  const navigate = useNavigate()
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [form, setForm] = useState({ name: '', email: '', country: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Enter a valid email address.')
      return
    }
    setError('')
    setLoading(true)
    await new Promise((r) => setTimeout(r, 700))
    signIn({
      name: form.name.trim() || form.email.split('@')[0],
      email: form.email,
      country: form.country.trim() || 'Not given',
    })
    setLoading(false)
    navigate('/my-trips')
  }

  return (
    <div className="bg-ivory">
      <div className="mx-auto max-w-xl px-5 py-16 lg:py-24">
        <Breadcrumbs trail={[{ label: 'Home', to: '/' }, { label: 'My Trips' }]} />

        <div className="mt-8 rounded-card border border-hairline bg-surface p-8 shadow-card lg:p-10">
          <p className="text-eyebrow font-semibold uppercase text-gold">My Trips</p>
          <h1 className="mt-3 font-display text-[32px] leading-tight text-espresso">
            {mode === 'signin' ? 'Welcome back' : 'Create your traveller account'}
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-stone">
            Keep your saved journeys, enquiries and trip updates in one place. This demo account is stored on this
            device only — no password is required and nothing is sent anywhere.
          </p>

          <div className="mt-6 inline-flex rounded-pill border border-hairline bg-ivory p-1" role="tablist">
            {(['signin', 'signup'] as const).map((m) => (
              <button
                key={m}
                type="button"
                role="tab"
                aria-selected={mode === m}
                onClick={() => setMode(m)}
                className={`rounded-pill px-4 py-2 text-[13px] font-medium transition-[background-color,color] duration-200 ease-premium ${
                  mode === m ? 'bg-gold text-espresso' : 'text-stone hover:text-espresso'
                }`}
              >
                {m === 'signin' ? 'Sign in' : 'Sign up'}
              </button>
            ))}
          </div>

          <form onSubmit={submit} noValidate className="mt-7 space-y-5">
            {mode === 'signup' && (
              <Field id="account-name" label="Your name">
                <TextInput
                  id="account-name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                />
              </Field>
            )}
            <Field id="account-email" label="Email" required error={error}>
              <TextInput
                id="account-email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? 'account-email-error' : undefined}
              />
            </Field>
            {mode === 'signup' && (
              <Field id="account-country" label="Country" hint="Helps us plan flights and visas.">
                <TextInput
                  id="account-country"
                  autoComplete="country-name"
                  value={form.country}
                  onChange={(e) => setForm((f) => ({ ...f, country: e.target.value }))}
                />
              </Field>
            )}
            <Button type="submit" size="lg" fullWidth loading={loading}>
              {mode === 'signin' ? 'Sign in' : 'Create account'}
            </Button>
          </form>

          <p className="mt-6 text-[13px] text-stone">
            Password reset, email verification and secure session handling would be wired to a real backend before
            launch. Nothing entered here is transmitted.
          </p>
        </div>
      </div>
    </div>
  )
}
