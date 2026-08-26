import { destinations } from '../data/destinations'
import { tours } from '../data/tours'
import { experiences } from '../data/experiences'
import { articles } from '../data/journal'
import { trekRoutes } from '../data/trekking'

export interface SearchResult {
  id: string
  title: string
  type: 'Destination' | 'Tour' | 'Experience' | 'Trekking route' | 'Journal'
  description: string
  to: string
  image: string
  meta: string
  keywords: string
}

export const searchIndex: SearchResult[] = [
  ...destinations.map((d) => ({
    id: `dest-${d.id}`,
    title: d.name,
    type: 'Destination' as const,
    description: d.tagline,
    to: `/destinations/${d.slug}`,
    image: d.heroImage,
    meta: d.region,
    keywords: [d.name, d.region, d.circuit, d.tagline, ...d.wildlife, d.category].join(' ').toLowerCase(),
  })),
  ...tours.map((t) => ({
    id: `tour-${t.id}`,
    title: t.title,
    type: 'Tour' as const,
    description: t.description,
    to: `/safaris/${t.slug}`,
    image: t.heroImage,
    meta: `${t.duration} · ${t.location}`,
    keywords: [t.title, t.category, t.location, t.description, t.season].join(' ').toLowerCase(),
  })),
  ...experiences.map((e) => ({
    id: `exp-${e.id}`,
    title: e.title,
    type: 'Experience' as const,
    description: e.description,
    to: `/experiences#${e.slug}`,
    image: e.image,
    meta: `${e.duration} · ${e.location}`,
    keywords: [e.title, e.category, e.location, e.description].join(' ').toLowerCase(),
  })),
  ...trekRoutes.map((r) => ({
    id: `route-${r.id}`,
    title: r.name,
    type: 'Trekking route' as const,
    description: r.character,
    to: `/trekking/${r.slug}`,
    image: r.heroImage,
    meta: `${r.mountain} · ${r.duration}`,
    keywords: [r.name, r.mountain, r.character, r.bestFor, r.difficulty].join(' ').toLowerCase(),
  })),
  ...articles.map((a) => ({
    id: `article-${a.id}`,
    title: a.title,
    type: 'Journal' as const,
    description: a.excerpt,
    to: `/journal/${a.slug}`,
    image: a.image,
    meta: `${a.category} · ${a.readTime}`,
    keywords: [a.title, a.category, a.excerpt, ...a.tags].join(' ').toLowerCase(),
  })),
]

export function search(query: string, filter?: string): SearchResult[] {
  const q = query.trim().toLowerCase()
  const pool = filter && filter !== 'All' ? searchIndex.filter((r) => r.type === filter) : searchIndex
  if (!q) return pool.slice(0, 8)
  return pool.filter((r) => r.keywords.includes(q) || r.title.toLowerCase().includes(q))
}
