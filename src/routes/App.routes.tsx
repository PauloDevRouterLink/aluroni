import { RouteObject, createBrowserRouter } from 'react-router-dom'
import { route } from './routes'

const routes: Array<RouteObject> = [route]
export const router = createBrowserRouter(routes)

// export const Routes = () => {
//   return useRoutes([appRoute, appRoute2])
// }
