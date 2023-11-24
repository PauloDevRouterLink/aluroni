import { ReactElement } from 'react'
import { RouteObject, createBrowserRouter } from 'react-router-dom'
import { App } from '../App'
import { Menu } from '../pages/Menu'
import { Home } from '../pages/Home'

type RouterProps = {
  path: string
  element: ReactElement
  children: Array<RouteObject>
  errorElement: ReactElement
}

const router: Array<RouterProps> = [
  {
    path: '/',
    element: <App />,
    errorElement: <h2>Not Found</h2>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
    ],
  },
]

export const AppRoutes = createBrowserRouter(router)
