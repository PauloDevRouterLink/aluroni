import { Suspense, useMemo } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import classNames from 'classnames'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { Loader } from './components/Loader'

import Logotipo from './assets/logo.svg'
import styles from './scss/app/styles.module.scss'

const App = () => {
  const { pathname } = useLocation()
  const params = useParams()

  const isActive = useMemo(() => {
    switch (pathname) {
      case '/':
        return '--home'
      case '/menu':
        return '--menu'
      case `/detail/${params.id}`:
        return '--detail'
      case '/about':
        return '--about'

      default:
        return ''
    }
  }, [pathname])

  return (
    <main>
      <NavBar imageUrl={Logotipo} />
      <Suspense fallback={<Loader label="Carregando" />}>
        <header
          className={classNames(styles.header, {
            [styles[`header${isActive}`]]: true,
          })}
        >
          <div className={styles.header__title}>
            A casa das massas e dos códigos
          </div>
        </header>

        <div className={styles.app__container}>
          <Outlet />
        </div>
      </Suspense>
      <Footer logoUrl={Logotipo} />
    </main>
  )
}

export default App
