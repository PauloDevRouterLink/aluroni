import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NAV_LINK from './[nav-links]'

import styles from './styles.module.scss'
import classNames from 'classnames'

type NavBarProps = { imageUrl: string }

export const NavBar: FC<NavBarProps> = ({ imageUrl }) => {
  const location = useLocation()

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <img src={imageUrl} alt="Logo aluroni" />
      </div>

      <div className={styles.navbar__links}>
        <ul>
          {NAV_LINK.map((nav, index) => (
            <li
              key={index}
              className={classNames({
                [styles.navbar__link]: true,
                [styles['navbar__link--active']]:
                  location.pathname === nav.path,
              })}
            >
              <Link to={nav.path}>{nav.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
