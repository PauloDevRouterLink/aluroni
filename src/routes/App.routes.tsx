import { ReactElement } from 'react'
import { RouteObject, createBrowserRouter } from 'react-router-dom'
import { App } from '../App'
import { Menu } from '../pages/Menu'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { NotFound } from '../pages/404'

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
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]

export const AppRoutes = createBrowserRouter(router)
