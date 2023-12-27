import { FC } from 'react'
import { Link, LinkProps, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import NAV_ITEM from './[nav-links]'

import styles from './styles.module.scss'

type NavItemProps = LinkProps & {
  props: (typeof NAV_ITEM)[0]
}

export const NavItem: FC<NavItemProps> = ({ props, ...rest }) => {
  const { pathname } = useLocation()
  const { label, path } = props

  return (
    <li
      className={classNames(styles.navbar__link, {
        [styles['navbar__link--active']]: pathname === path,
      })}
    >
      <Link {...rest}>{label}</Link>
    </li>
  )
}
