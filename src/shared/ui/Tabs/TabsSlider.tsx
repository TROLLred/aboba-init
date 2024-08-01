import { SliderUI } from '../SliderUI/SliderUI';

import styles from './Tabs.module.scss';

interface ITabsSliderProps {
  panels: React.ReactNode[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const TabsSlider: React.FC<ITabsSliderProps> = ({
  panels,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <SliderUI
      slides={panels}
      className={styles.slider}
      activeIndex={activeIndex}
      slidesPerView={1}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    />
  );
};
