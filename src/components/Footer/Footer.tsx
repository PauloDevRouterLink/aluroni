import { FC } from 'react'

import styles from './style.module.scss'

type FooterProps = { logoUrl: string }

export const Footer: FC<FooterProps> = ({ logoUrl }) => (
  <footer className={styles.footer}>
    <img src={logoUrl} alt="Footer Aluroni" />
  </footer>
)
