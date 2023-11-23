import { FC } from 'react'
import classNames from 'classnames'

import ITEMS from './[items_menu]/[items_menu]'

import styles from './styles.module.scss'

type ListItemType = {
  item: (typeof ITEMS)[0]
}

export const ListItem: FC<ListItemType> = ({ item }) => {
  const { title, description, price, category, serving, size, photo } = item

  return (
    <article className={styles.list_item}>
      <div className={styles.list_item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.list_item__description}>
        <div className={styles.list_item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.list_item__tags}>
          <div
            className={classNames({
              [styles.list_item__type]: true,
              [styles[
                `list_item__type__${category.label.toLocaleLowerCase()}`
              ]]: true,
            })}
          >
            {category.label}
          </div>
          <div className={styles.list_item__portion}>{size}g</div>
          <div className={styles.list_item__quantity_people}>
            Serve {serving} {serving === 1 ? 'people' : 'person'}
          </div>
          <div className={styles.list_item__value}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </article>
  )
}
