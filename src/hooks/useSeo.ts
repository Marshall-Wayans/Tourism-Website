import { useEffect } from 'react'
import { company } from '../data/company'

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v))
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

interface SeoOptions {
  title: string
  description: string
  image?: string
  path?: string
}

/** Sets per-page title, description, canonical and social metadata. */
export function useSeo({ title, description, image, path }: SeoOptions) {
  useEffect(() => {
    const fullTitle = `${title} | ${company.name}`
    document.title = fullTitle
    const url = typeof window !== 'undefined' ? `${window.location.origin}${path ?? window.location.pathname}` : ''

    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: company.name })
    if (url) upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url })
    if (image) upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    if (image) upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })
    if (url) upsertLink('canonical', url)
  }, [title, description, image, path])
}
