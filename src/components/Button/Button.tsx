import { FC, ButtonHTMLAttributes, ElementType } from 'react'

import styles from './styles.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  icon: ElementType
}

export const Button: FC<ButtonProps> = ({ label, icon: Icon, ...props }) => (
  <button {...props} className={styles.button}>
    <Icon /> {label}
  </button>
)
