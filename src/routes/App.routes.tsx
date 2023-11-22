import { ReactElement } from 'react'
import { RouteObject, createBrowserRouter } from 'react-router-dom'
import { App } from '../App'
import { Menu } from '../pages/Menu'

type RouterProps = {
  path: string
  element: ReactElement
  children: Array<RouteObject>
}

const router: Array<RouterProps> = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Menu />,
      },
    ],
  },
]

export const AppRoutes = createBrowserRouter(router)
