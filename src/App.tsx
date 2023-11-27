import { useMemo } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import classNames from 'classnames'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

import Logotipo from './assets/logo.svg'
import styles from './scss/app/styles.module.scss'

export const App = () => {
  const location = useLocation()
  const params = useParams()
  const isActiveBanner = location.pathname

  const isActive = useMemo(() => {
    switch (isActiveBanner) {
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
  }, [isActiveBanner])

  return (
    <main>
      <NavBar imageUrl={Logotipo} />

      <header
        className={classNames({
          [styles.header]: true,
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

      <Footer logoUrl={Logotipo} />
    </main>
  )
}
