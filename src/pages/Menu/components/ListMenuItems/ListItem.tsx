import { FC } from 'react'
import { MenuItemProps as ListItemType } from '../../../../types/MenuItemProps'

import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import { MenuTags } from '../../../../components/MenuTags'

export const ListItem: FC<ListItemType> = ({ card }) => {
  const { title, description, price, category, serving, size, photo } = card
  const navigate = useNavigate()

  return (
    <article
      className={styles.list_item}
      onClick={() => navigate(`/detail/${card.id}`)}
    >
      <div className={styles.list_item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.list_item__description}>
        <div className={styles.list_item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <MenuTags tags={{ size, price, serving, category }} />
      </div>
    </article>
  )
}
