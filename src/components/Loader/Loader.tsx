import { FC } from 'react'
import styles from './styles.module.scss'

type LoaderProps = {
  label: string
}

export const Loader: FC<LoaderProps> = ({ label }) => (
  <div className={styles.loading}>
    <div className={styles.spinner}>
      <span className={styles.spinner__loader} />
    </div>
    <span>{label}</span>
  </div>
)
