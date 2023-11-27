import { FC, ReactNode } from 'react'
import { Swiper, SwiperProps } from 'swiper/react'
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  FreeMode,
  EffectFade,
  EffectCards,
  EffectCreative,
  Keyboard,
} from 'swiper/modules'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/autoplay'
import 'swiper/scss/free-mode'
import 'swiper/scss/effect-fade'
import 'swiper/scss/effect-cards'
import 'swiper/scss/effect-creative'
import './slider.scss'

type SliderProps = {
  settings: SwiperProps
  children: ReactNode
}

export const SliderCarousel: FC<SliderProps> = ({ settings, children }) => (
  <Swiper
    modules={[
      Navigation,
      Pagination,
      A11y,
      Autoplay,
      FreeMode,
      EffectFade,
      EffectCards,
      EffectCreative,
      Keyboard,
    ]}
    {...settings}
  >
    {children}
  </Swiper>
)
