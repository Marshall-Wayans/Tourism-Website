export type SavedKind = 'destination' | 'tour' | 'experience' | 'article' | 'route'

export interface SavedItem {
  id: string
  kind: SavedKind
  savedAt: string
}

export type DestinationCategory = 'park' | 'mountain' | 'island' | 'coast' | 'culture'

export interface Destination {
  id: string
  name: string
  slug: string
  category: DestinationCategory
  region: string
  circuit: string
  tagline: string
  intro: string
  whyVisit: string[]
  wildlife: string[]
  bestTime: { window: string; note: string }[]
  experiences: string[]
  relatedTours: string[]
  related: string[]
  heroImage: string
  imageAlt: string
  rating: number
  familyFriendly: boolean
  adventureLevel: 'Gentle' | 'Moderate' | 'Demanding'
}

export type TourCategory = 'Safari' | 'Trek' | 'Beach' | 'Culture' | 'Combination'

export interface ItineraryDay {
  day: string
  title: string
  detail: string
}

export interface Tour {
  id: string
  title: string
  slug: string
  category: TourCategory
  badge: string
  duration: string
  days: number
  groupSize: string
  location: string
  description: string
  overview: string
  heroImage: string
  imageAlt: string
  itinerary: ItineraryDay[]
  highlights: string[]
  included: string[]
  practical: { label: string; value: string }[]
  destinations: string[]
  rating: number
  season: string
  familyFriendly: boolean
}

export interface Experience {
  id: string
  title: string
  slug: string
  category: 'Adventure' | 'Wildlife' | 'Relaxation' | 'Culture' | 'Nature'
  duration: string
  description: string
  detail: string
  image: string
  imageAlt: string
  location: string
  rating: number
  instantEnquiry: boolean
}

export interface TrekRoute {
  id: string
  name: string
  slug: string
  mountain: 'Kilimanjaro' | 'Mount Meru' | 'Ol Doinyo Lengai' | 'Mount Hanang'
  duration: string
  days: number
  difficulty: 'Moderate' | 'Challenging' | 'Strenuous'
  traffic: 'Low' | 'Moderate' | 'High'
  scenery: string
  acclimatisation: string
  character: string
  bestFor: string
  climateZones: string[]
  itinerary: ItineraryDay[]
  preparation: string[]
  safety: string[]
  packing: string[]
  heroImage: string
  imageAlt: string
}

export interface Article {
  id: string
  title: string
  slug: string
  category: 'Migration' | 'Wildlife' | 'Safari' | 'Trekking' | 'Zanzibar' | 'Culture' | 'Travel Tips' | 'Guides'
  author: string
  date: string
  readTime: string
  image: string
  imageAlt: string
  excerpt: string
  content: { heading?: string; body: string }[]
  tags: string[]
}

export interface Testimonial {
  id: string
  theme: string
  tripType: 'Safari' | 'Trek' | 'Beach' | 'Family' | 'Honeymoon' | 'Culture'
  quote: string
  guestName: string
  country: string
  placeholder: boolean
  rating: number
}

export interface Guide {
  id: string
  name: string
  specialty: string
  experience: string
  bio: string
  based: string
  languages: string
  placeholder: boolean
  photo?: string
}

export interface EnquiryRecord {
  id: string
  reference: string
  subject: string
  submittedAt: string
  status: 'Received' | 'Designer assigned' | 'Itinerary drafted'
  travelWindow: string
  travellers: string
  tripTypes: string[]
}

export interface AppNotification {
  id: string
  type: 'enquiry' | 'saved' | 'availability' | 'journal' | 'migration'
  title: string
  body: string
  timestamp: string
  read: boolean
  href: string
}
