import { createHashRouter } from 'react-router-dom'
import { RecipePage } from '../features/recipes/pages/RecipePage'
import { RecipesPage } from '../features/recipes/pages/RecipesPage'
import { AppLayout } from './AppLayout'
import { NotFoundPage } from './NotFoundPage'

/**
 * Hash-роутинг: GitHub Pages отдаёт только статику и не умеет
 * возвращать index.html на произвольный путь, а с `#/` прямые ссылки
 * и перезагрузка страницы работают без серверных правил.
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
