import { FC, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuItemProps as ListItemType } from '../../../../types/MenuItemProps'
import { MenuTags } from '../../../../components/MenuTags'

import styles from './styles.module.scss'

const ListItem: FC<ListItemType> = ({ card }) => {
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

export default memo(ListItem)
