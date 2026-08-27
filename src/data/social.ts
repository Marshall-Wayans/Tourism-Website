import type { Testimonial, Guide, AppNotification } from '../types'

import guide1Photo from '../assets/Tourism6.jpeg'
import guide2Photo from '../assets/Tourism2.jpeg'
import guide3Photo from '../assets/Tourism3.jpeg'
import guide4Photo from '../assets/Tourism5.jpeg'

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    theme: 'A guide who became a friend',
    tripType: 'Safari',
    quote:
      'Placeholder — reserved for a verified review about a guide who made the trip personal, remembered what each traveller wanted to see, and stayed in touch afterwards.',
    guestName: '[Traveller name]',
    country: '[Country]',
    placeholder: true,
    rating: 5,
  },
  {
    id: 't2',
    theme: 'A honeymoon shaped around two people',
    tripType: 'Honeymoon',
    quote:
      'Placeholder — reserved for a verified review about an anniversary or honeymoon trip enhanced by thoughtful, unannounced touches arranged by the team on the ground.',
    guestName: '[Traveller name]',
    country: '[Country]',
    placeholder: true,
    rating: 5,
  },
  {
    id: 't3',
    theme: 'Logistics that simply worked',
    tripType: 'Family',
    quote:
      'Placeholder — reserved for a verified review about smooth transfers, park permits, internal flights and paperwork handled without the travellers having to think about any of it.',
    guestName: '[Traveller name]',
    country: '[Country]',
    placeholder: true,
    rating: 5,
  },
  {
    id: 't4',
    theme: 'Summit night on Kilimanjaro',
    tripType: 'Trek',
    quote:
      'Placeholder — reserved for a verified review about the mountain crew, daily health checks and the decision-making that got a trekker safely to Uhuru Peak.',
    guestName: '[Traveller name]',
    country: '[Country]',
    placeholder: true,
    rating: 5,
  },
  {
    id: 't5',
    theme: 'Slow days on the coast',
    tripType: 'Beach',
    quote:
      'Placeholder — reserved for a verified review about the transition from safari to Zanzibar and the pace of the island half of the trip.',
    guestName: '[Traveller name]',
    country: '[Country]',
    placeholder: true,
    rating: 5,
  },
  {
    id: 't6',
    theme: 'A morning with a Hadzabe family',
    tripType: 'Culture',
    quote:
      'Placeholder — reserved for a verified review about a community visit that felt like a genuine exchange rather than a staged encounter.',
    guestName: '[Traveller name]',
    country: '[Country]',
    placeholder: true,
    rating: 5,
  },
]

export const guides: Guide[] = [
  {
    id: 'g1',
    name: '[Guide name to be confirmed]',
    specialty: 'Big cats & Serengeti ecology',
    experience: '[X] years',
    bio: 'Profile to be completed by the guide. Biography, training and field specialisms will be published here once confirmed.',
    based: 'Arusha',
    languages: 'Swahili, English',
    placeholder: true,
    photo: guide1Photo,
  },

  {
    id: 'g2',
    name: '[Guide name to be confirmed]',
    specialty: 'Kilimanjaro & Mount Meru',
    experience: '[X] years',
    bio: 'Profile to be completed by the guide. Route experience, summit record and first-response certification will be published here once confirmed.',
    based: 'Moshi',
    languages: 'Swahili, English',
    placeholder: true,
    photo: guide2Photo,
  },

  {
    id: 'g3',
    name: '[Guide name to be confirmed]',
    specialty: 'Birding & southern circuit',
    experience: '[X] years',
    bio: 'Profile to be completed by the guide. Species knowledge, regions covered and training will be published here once confirmed.',
    based: 'Iringa',
    languages: 'Swahili, English',
    placeholder: true,
    photo: guide3Photo,
  },

  {
    id: 'g4',
    name: '[Guide name to be confirmed]',
    specialty: 'Zanzibar heritage & Swahili coast',
    experience: '[X] years',
    bio: 'Profile to be completed by the guide. Historical specialism and languages will be published here once confirmed.',
    based: 'Stone Town',
    languages: 'Swahili, English',
    placeholder: true,
    photo: guide4Photo,
  },
]

export const seedNotifications: AppNotification[] = [
  {
    id: 'n1',
    type: 'migration',
    title: 'Migration update: herds massing on the Mara River',
    body: 'Our guides report crossings building in the northern Serengeti. See the tracker for this month’s picture.',
    timestamp: '2 hours ago',
    read: false,
    href: '/migration-tracker',
  },
  {
    id: 'n2',
    type: 'journal',
    title: 'New in the Journal',
    body: 'Comparing the Kilimanjaro routes — an honest look at Machame, Lemosho and the Northern Circuit.',
    timestamp: 'Yesterday',
    read: false,
    href: '/journal/comparing-kilimanjaro-routes',
  },
  {
    id: 'n3',
    type: 'availability',
    title: 'Limited departures in the northern Serengeti',
    body: 'Mobile camp space for the August–October crossing window is filling. Ask about availability.',
    timestamp: '3 days ago',
    read: true,
    href: '/plan-my-trip',
  },
]