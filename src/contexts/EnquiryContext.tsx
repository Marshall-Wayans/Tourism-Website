import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'

interface EnquiryValue {
  open: boolean
  subject: string
  openEnquiry: (subject?: string) => void
  closeEnquiry: () => void
}

const EnquiryContext = createContext<EnquiryValue | null>(null)

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [subject, setSubject] = useState('General trip enquiry')

  const openEnquiry = useCallback((next?: string) => {
    if (next) setSubject(next)
    setOpen(true)
  }, [])

  const closeEnquiry = useCallback(() => setOpen(false), [])

  const value = useMemo(() => ({ open, subject, openEnquiry, closeEnquiry }), [open, subject, openEnquiry, closeEnquiry])

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext)
  if (!ctx) throw new Error('useEnquiry must be used inside EnquiryProvider')
  return ctx
}
