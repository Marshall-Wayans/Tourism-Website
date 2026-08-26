import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Toaster } from 'sonner'
import { Header } from './Header'
import { Footer } from './Footer'
import { FloatingContact } from './FloatingContact'
import { EnquiryDrawer } from '../enquiry/EnquiryDrawer'

const TRANSPARENT_HEADER_ROUTES = ['/']

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  const transparent = TRANSPARENT_HEADER_ROUTES.includes(pathname)

  return (
    <div className="flex min-h-screen w-full flex-col bg-ivory">
      <Header transparent={transparent} />
      <main id="main" className={transparent ? 'flex-1' : 'flex-1 pt-[68px]'}>
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
      <EnquiryDrawer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#FFFFFF',
            border: '1px solid #E4DCC9',
            color: '#2B241C',
            borderRadius: '14px',
          },
        }}
      />
    </div>
  )
}
