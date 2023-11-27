import { FC } from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

type MenuTagsProps = {
  tags: {
    size: number
    price: number
    serving: number
    category: {
      id: number
      label: string
    }
  }
}

export const MenuTags: FC<MenuTagsProps> = ({ tags }) => {
  const { size, price, serving, category } = tags

  return (
    <div className={styles.menu_tags}>
      <div
        className={classNames({
          [styles.menu_tags__type]: true,
          [styles[`menu_tags__type__${category.label.toLocaleLowerCase()}`]]:
            true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.menu_tags__portion}>{size}g</div>
      <div className={styles.menu_tags__quantity_people}>
        Serve {serving} {serving === 1 ? 'people' : 'person'}
      </div>
      <div className={styles.menu_tags__value}>R$ {price.toFixed(2)}</div>
    </div>
  )
}
