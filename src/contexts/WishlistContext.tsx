import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { SavedItem, SavedKind } from '../types'

const STORAGE_KEY = 'amani.wishlist.v1'

interface WishlistValue {
  items: SavedItem[]
  isSaved: (id: string) => boolean
  toggle: (id: string, kind: SavedKind) => boolean
  remove: (id: string) => void
  clear: () => void
  countByKind: (kind: SavedKind) => number
}

const WishlistContext = createContext<WishlistValue | null>(null)

function read(): SavedItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as SavedItem[]) : []
  } catch {
    return []
  }
}

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<SavedItem[]>(read)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* storage unavailable — wishlist stays in memory for this session */
    }
  }, [items])

  const isSaved = useCallback((id: string) => items.some((i) => i.id === id), [items])

  const toggle = useCallback((id: string, kind: SavedKind) => {
    let nowSaved = false
    setItems((prev) => {
      const exists = prev.some((i) => i.id === id)
      nowSaved = !exists
      return exists
        ? prev.filter((i) => i.id !== id)
        : [{ id, kind, savedAt: new Date().toISOString() }, ...prev]
    })
    return nowSaved
  }, [])

  const remove = useCallback((id: string) => setItems((prev) => prev.filter((i) => i.id !== id)), [])
  const clear = useCallback(() => setItems([]), [])
  const countByKind = useCallback((kind: SavedKind) => items.filter((i) => i.kind === kind).length, [items])

  const value = useMemo(
    () => ({ items, isSaved, toggle, remove, clear, countByKind }),
    [items, isSaved, toggle, remove, clear, countByKind],
  )

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export function useWishlist() {
  const ctx = useContext(WishlistContext)
  if (!ctx) throw new Error('useWishlist must be used inside WishlistProvider')
  return ctx
}
