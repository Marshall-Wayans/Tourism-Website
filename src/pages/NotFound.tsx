import React from 'react'
import { CompassIcon } from 'lucide-react'
import { EmptyState } from '../components/ui/EmptyState'
import { Button } from '../components/ui/Button'
import { useSeo } from '../hooks/useSeo'

export function NotFound() {
  useSeo({
    title: 'Page not found',
    description: 'The page you were looking for has moved or no longer exists.',
  })

  return (
    <div className="mx-auto max-w-3xl px-5 py-28 lg:py-36">
      <EmptyState
        icon={<CompassIcon className="h-6 w-6" />}
        title="This track leads nowhere."
        description="The page you were looking for has moved or no longer exists. Head back to the plains and start again."
        actionLabel="Back to home"
        actionTo="/"
        secondary={
          <Button to="/destinations" variant="secondary" size="md">
            Browse destinations
          </Button>
        }
      />
    </div>
  )
}
