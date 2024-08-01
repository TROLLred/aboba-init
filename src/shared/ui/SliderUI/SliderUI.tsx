import { useEffect, useState } from 'react';

import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Swiper as TSwiper,
  SwiperOptions as TSwiperOptions,
} from 'swiper/types';

import styles from './SliderUI.module.scss';

export interface ISliderProps extends TSwiperOptions {
  slides: (React.ReactNode | string)[];
  onSlideChange?: (swiper: TSwiper) => void;
  className?: string;
  activeIndex?: number;
}

export const SliderUI: React.FC<ISliderProps> = ({
  slides,
  onSlideChange,
  className,
  activeIndex,
  spaceBetween,
  slidesPerView,
  initialSlide,
}) => {
  const [swiper, setSwiper] = useState<TSwiper | null>(null);

  useEffect(() => {
    if (typeof activeIndex === 'number') {
      swiper?.slideTo(activeIndex, 300);
    }
  }, [activeIndex, swiper]);

  return (
    <Swiper
      className={cn(className, styles.slider)}
      onSwiper={(swiper) => setSwiper(swiper)}
      onSlideChange={onSlideChange}
      spaceBetween={spaceBetween ?? 16}
      slidesPerView={slidesPerView ?? 'auto'}
      initialSlide={initialSlide ?? 0}
    >
      {slides.map((slide, i) => (
        <SwiperSlide
          key={i}
          className={styles.slide}
        >
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
