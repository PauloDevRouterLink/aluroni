import { FC } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import NAV_LINK from './[nav-links]'

import styles from './styles.module.scss'
import classNames from 'classnames'

type NavBarProps = { imageUrl: string }

export const NavBar: FC<NavBarProps> = ({ imageUrl }) => {
  const location = useLocation()
  const params = useParams()

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
          {params.id && (
            <li
              className={classNames({
                [styles.navbar__link]: true,
                [styles['navbar__link--active']]:
                  location.pathname === `/detail/${params.id}`,
              })}
            >
              <Link to={`/detail/${params.id}`}>Detalhes</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
