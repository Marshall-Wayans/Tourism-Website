import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { WishlistProvider } from './contexts/WishlistContext'
import { AccountProvider } from './contexts/AccountContext'
import { EnquiryProvider } from './contexts/EnquiryContext'

import { Home } from './pages/Home'
import { Destinations } from './pages/Destinations'
import { DestinationDetail } from './pages/DestinationDetail'
import { Safaris } from './pages/Safaris'
import { TourDetail } from './pages/TourDetail'
import { Trekking } from './pages/Trekking'
import { TrekRouteDetail } from './pages/TrekRouteDetail'
import { KilimanjaroRoutes } from './pages/KilimanjaroRoutes'
import { Experiences } from './pages/Experiences'
import { Beach } from './pages/Beach'
import { Culture } from './pages/Culture'
import { Journal } from './pages/Journal'
import { JournalArticle } from './pages/JournalArticle'
import { About } from './pages/About'
import { Guides } from './pages/Guides'
import { Faq } from './pages/Faq'
import { Testimonials } from './pages/Testimonials'
import { ResponsibleTravel } from './pages/ResponsibleTravel'
import { PlanMyTrip } from './pages/PlanMyTrip'
import { MigrationTracker } from './pages/MigrationTracker'
import { BuildMyTrip } from './pages/BuildMyTrip'
import { Wishlist } from './pages/Wishlist'
import { MyTrips } from './pages/MyTrips'
import { SignIn } from './pages/SignIn'
import { Gallery } from './pages/Gallery'
import { Rewards } from './pages/Rewards'
import { Legal } from './pages/Legal'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <AccountProvider>
      <WishlistProvider>
        <EnquiryProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/destinations/:slug" element={<DestinationDetail />} />
                <Route path="/safaris" element={<Safaris />} />
                <Route path="/safaris/:slug" element={<TourDetail />} />
                <Route path="/trekking" element={<Trekking />} />
                <Route path="/trekking/:slug" element={<TrekRouteDetail />} />
                <Route path="/kilimanjaro-routes" element={<KilimanjaroRoutes />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/beach" element={<Beach />} />
                <Route path="/culture" element={<Culture />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/journal/:slug" element={<JournalArticle />} />
                <Route path="/about" element={<About />} />
                <Route path="/guides" element={<Guides />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/responsible-travel" element={<ResponsibleTravel />} />
                <Route path="/plan-my-trip" element={<PlanMyTrip />} />
                <Route path="/migration-tracker" element={<MigrationTracker />} />
                <Route path="/build-my-trip" element={<BuildMyTrip />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/my-trips" element={<MyTrips />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/rewards" element={<Rewards />} />
                <Route path="/privacy" element={<Legal kind="privacy" />} />
                <Route path="/terms" element={<Legal kind="terms" />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </EnquiryProvider>
      </WishlistProvider>
    </AccountProvider>
  )
}



export default App
