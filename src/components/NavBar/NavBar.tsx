import { FC } from 'react'
import { useParams } from 'react-router-dom'
import NAV_LINK from './[nav-links]'

import styles from './styles.module.scss'
import { NavItem } from './NavItem'

type NavBarProps = { imageUrl: string }

export const NavBar: FC<NavBarProps> = ({ imageUrl }) => {
  const params = useParams()

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <img src={imageUrl} alt="Logo Aluroni" />
      </div>

      <div className={styles.navbar__links}>
        <ul>
          {NAV_LINK.map((nav, index) => (
            <NavItem key={index} to={nav.path} props={nav} />
          ))}
          {params.id && (
            <NavItem
              to={`/detail/${params.id}`}
              props={{ label: 'Detalhes', path: `/detail/${params.id}` }}
            />
          )}
        </ul>
      </div>
    </nav>
  )
}
