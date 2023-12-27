import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const App = lazy(() => import('../App'))
const Home = lazy(() => import('../pages/Home'))
const Menu = lazy(() => import('../pages/Menu'))
const About = lazy(() => import('../pages/About'))
const NotFound = lazy(() => import('../pages/404'))
const DetailPlates = lazy(() => import('../pages/DetailsPlates'))

export const route: RouteObject = {
  path: '/',
  element: <App />,
  errorElement: <NotFound />,
  children: [
    {
      path: '/',
      index: true,
      element: <Home />,
    },
    {
      path: 'menu',
      element: <Menu />,
    },
    {
      path: 'detail/:id',
      element: <DetailPlates />,
    },
    {
      path: 'about',
      element: <About />,
    },
  ],
}
