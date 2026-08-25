import { createHashRouter } from 'react-router-dom'
import { RecipePage } from '../features/recipes/pages/RecipePage'
import { RecipesPage } from '../features/recipes/pages/RecipesPage'
import { AppLayout } from './AppLayout'
import { NotFoundPage } from './NotFoundPage'

/**
 * Hash routing: GitHub Pages only serves static files and cannot fall back to
 * index.html for an arbitrary path. With `#/` URLs, deep links and page reloads
 * work without any server-side rules.
 */
export const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <RecipesPage /> },
      { path: 'recipes/:recipeId', element: <RecipePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
