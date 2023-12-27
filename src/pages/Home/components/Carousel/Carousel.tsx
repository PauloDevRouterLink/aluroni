import { FC } from 'react'
import {
  Slide,
  SliderCarousel,
  SliderProps,
} from '../../../../components/Slider'
import MENU from '../../../../data/[items_menu]/[items_menu]'
import { CarouselItem } from './CarouselItem'

import styles from './styles.module.scss'

type CarouselProps = {
  carousel: typeof MENU
}

export const Carousel: FC<CarouselProps> = ({ carousel: CARDS }) => {
  const settings: SliderProps = {
    spaceBetween: 50,
    navigation: true,
    keyboard: true,
    slidesPerView: CARDS.length < 3 ? CARDS.length : 3,
    draggable: CARDS.length >= 3,
    loop: CARDS.length >= 3,
    pagination: CARDS.length >= 3 && {
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        navigation: false,
      },
      800: {
        slidesPerView: CARDS.length < 2 ? CARDS.length : 2,
        slidesPerGroup: CARDS.length < 2 ? CARDS.length : 2,
        navigation: false,
      },
      1080: {
        slidesPerView: CARDS.length < 3 ? CARDS.length : 3,
        slidesPerGroup: CARDS.length < 3 ? CARDS.length : 3,
      },
    },
  }

  if (CARDS.length === 1) {
    return (
      <section className={styles.unique__carousel}>
        <CarouselItem card={CARDS[0]} />
      </section>
    )
  }

  return (
    <SliderCarousel settings={settings}>
      {CARDS.map(item => (
        <Slide key={item.id}>
          <CarouselItem card={item} />
        </Slide>
      ))}
    </SliderCarousel>
  )
}
