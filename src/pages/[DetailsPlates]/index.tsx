import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Button } from '../../components/Button'
import { MenuTags } from '../../components/MenuTags'
import { NotFound } from '../404'

import MENU from '../../data/[items_menu]/[items_menu]'

import styles from './styles.module.scss'

export const DetailPlates: FC = () => {
  const params = useParams()
  const navigate = useNavigate()
  const card = MENU.find(item => item.id === Number(params.id))

  if (!card) {
    return <NotFound />
  }

  return (
    <>
      <Button
        label="Voltar"
        icon={FaArrowLeftLong}
        onClick={() => navigate('/menu')}
      />

      <section className={styles.container}>
        <h1 className={styles.title}>{card.title}</h1>
        <div className={styles.image}>
          <img src={card.photo} alt={card.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>{card.description}</p>
          <MenuTags
            tags={{
              size: card.size,
              price: card.price,
              serving: card.serving,
              category: card.category,
            }}
          />
        </div>
      </section>
    </>
  )
}
