import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { seedNotifications } from '../data/social'
import type { AppNotification, EnquiryRecord } from '../types'

const STORAGE_KEY = 'amani.account.v1'

export interface AccountUser {
  name: string
  email: string
  country: string
}

interface AccountState {
  user: AccountUser | null
  enquiries: EnquiryRecord[]
  notifications: AppNotification[]
}

interface AccountValue extends AccountState {
  signIn: (user: AccountUser) => void
  signOut: () => void
  addEnquiry: (enquiry: Omit<EnquiryRecord, 'id' | 'reference' | 'submittedAt' | 'status'>) => EnquiryRecord
  markAllRead: () => void
  markRead: (id: string) => void
  unreadCount: number
}

const AccountContext = createContext<AccountValue | null>(null)

function read(): AccountState {
  const fallback: AccountState = { user: null, enquiries: [], notifications: seedNotifications }
  if (typeof window === 'undefined') return fallback
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return fallback
    const parsed = JSON.parse(raw) as Partial<AccountState>
    return {
      user: parsed.user ?? null,
      enquiries: parsed.enquiries ?? [],
      notifications: parsed.notifications?.length ? parsed.notifications : seedNotifications,
    }
  } catch {
    return fallback
  }
}

export function AccountProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AccountState>(read)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* storage unavailable */
    }
  }, [state])

  const signIn = useCallback((user: AccountUser) => setState((s) => ({ ...s, user })), [])
  const signOut = useCallback(() => setState((s) => ({ ...s, user: null })), [])

  const addEnquiry: AccountValue['addEnquiry'] = useCallback((enquiry) => {
    const record: EnquiryRecord = {
      ...enquiry,
      id: `enq-${Date.now()}`,
      reference: `AM-${Math.floor(1000 + Math.random() * 9000)}`,
      submittedAt: new Date().toISOString(),
      status: 'Received',
    }
    setState((s) => ({
      ...s,
      enquiries: [record, ...s.enquiries],
      notifications: [
        {
          id: `n-${record.id}`,
          type: 'enquiry',
          title: `Enquiry ${record.reference} received`,
          body: 'A Tanzania travel designer will reply within 24 hours.',
          timestamp: 'Just now',
          read: false,
          href: '/my-trips',
        },
        ...s.notifications,
      ],
    }))
    return record
  }, [])

  const markAllRead = useCallback(
    () => setState((s) => ({ ...s, notifications: s.notifications.map((n) => ({ ...n, read: true })) })),
    [],
  )

  const markRead = useCallback(
    (id: string) =>
      setState((s) => ({
        ...s,
        notifications: s.notifications.map((n) => (n.id === id ? { ...n, read: true } : n)),
      })),
    [],
  )

  const unreadCount = state.notifications.filter((n) => !n.read).length

  const value = useMemo(
    () => ({ ...state, signIn, signOut, addEnquiry, markAllRead, markRead, unreadCount }),
    [state, signIn, signOut, addEnquiry, markAllRead, markRead, unreadCount],
  )

  return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
}

export function useAccount() {
  const ctx = useContext(AccountContext)
  if (!ctx) throw new Error('useAccount must be used inside AccountProvider')
  return ctx
}
