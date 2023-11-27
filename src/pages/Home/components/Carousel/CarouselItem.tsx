import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuItemProps as CarouselItemProps } from '../../../../types/MenuItemProps'

import styles from './styles.module.scss'

export const CarouselItem: FC<CarouselItemProps> = ({ card }) => {
  const { photo, title } = card
  const navigate = useNavigate()

  return (
    <div className={styles.carousel_item}>
      <div className={styles.carousel_item__image}>
        <img src={photo} alt={title} />
      </div>
      <button
        onClick={() => navigate(`/detail/${card.id}`)}
        className={styles.carousel_item__button}
      >
        Ver Mais
      </button>
    </div>
  )
}
