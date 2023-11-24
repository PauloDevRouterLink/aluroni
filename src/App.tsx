import { Outlet, useLocation } from 'react-router-dom'
import { NavBar } from './components/NavBar'

import Logotipo from './assets/logo.svg'
import styles from './scss/app/styles.module.scss'
import classNames from 'classnames'

export const App = () => {
  const location = useLocation()

  return (
    <main>
      <NavBar imageUrl={Logotipo} />

      <header
        className={classNames({
          [styles.header]: true,
          [styles[`header${location.pathname === '/' ? '--home' : '--menu'}`]]:
            true,
        })}
      >
        <div className={styles.header__title}>
          A casa das massas e dos códigos
        </div>
      </header>

      <div className={styles.app__container}>
        <Outlet />
      </div>
    </main>
  )
}
