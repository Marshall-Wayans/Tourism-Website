import React from 'react'
import { HeartIcon } from 'lucide-react'
import { toast } from 'sonner'
import { useWishlist } from '../../contexts/WishlistContext'
import { cn } from '../../utils/cn'
import type { SavedKind } from '../../types'

export function WishlistButton({
  id,
  kind,
  label,
  className,
  variant = 'floating',
}: {
  id: string
  kind: SavedKind
  label: string
  className?: string
  variant?: 'floating' | 'inline'
}) {
  const { isSaved, toggle } = useWishlist()
  const saved = isSaved(id)

  return (
    <button
      type="button"
      aria-pressed={saved}
      aria-label={saved ? `Remove ${label} from your saved list` : `Save ${label} to your list`}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        const nowSaved = toggle(id, kind)
        toast(nowSaved ? `${label} saved` : `${label} removed`, {
          description: nowSaved ? 'Find it again under My Trips.' : undefined,
        })
      }}
      className={cn(
        'group/heart inline-flex items-center justify-center transition-[background-color,color,transform,border-color] duration-200 ease-premium',
        variant === 'floating'
          ? 'h-10 w-10 rounded-full bg-white/92 text-espresso shadow-card backdrop-blur-sm hover:bg-white'
          : 'gap-2 rounded-pill border border-espresso/20 px-4 py-2 text-sm font-medium text-espresso hover:border-espresso',
        className,
      )}
    >
      <HeartIcon
        className={cn(
          'h-[18px] w-[18px] transition-transform duration-200 ease-premium group-hover/heart:scale-110',
          saved ? 'fill-clay text-clay' : 'text-current',
        )}
        aria-hidden="true"
      />
      {variant === 'inline' && <span>{saved ? 'Saved' : 'Save'}</span>}
    </button>
  )
}