import type { QueryClient } from '@tanstack/react-query'
import {
  Link,
  Outlet,
  createRootRouteWithContext,
} from '@tanstack/react-router'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: Outlet,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/">Start Over</Link>
      </div>
    )
  },
})
