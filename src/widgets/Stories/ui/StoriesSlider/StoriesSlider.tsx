import styles from './StoriesSlider.module.scss';

import dog from '@images/dog.jpg';
import flowers from '@images/flowers.jpg';
import robot from '@images/robot.jpeg';
import vegetables from '@images/vegetables.jpg';
import { SliderUI } from '@shared/ui/SliderUI/SliderUI';
import { StoryCardUI } from '@shared/ui/StoryCardUI/StoryCardUI';

export const StoriesSlider: React.FC = () => (
  <SliderUI
    className={styles.storiesSlider}
    spaceBetween={8}
    slides={[
      <StoryCardUI
        key={0}
        bgImage={{
          src: flowers,
          alt: '',
        }}
        title={'Кешбэк 10%<br>на цветы'}
      />,
      <StoryCardUI
        key={1}
        bgImage={{
          src: dog,
          alt: '',
        }}
        title={'Для ваших<br>маленьких<br>друзей'}
      />,
      <StoryCardUI
        key={2}
        bgImage={{
          src: vegetables,
          alt: '',
        }}
        title={'Готовим<br>вместе'}
      />,
      <StoryCardUI
        key={3}
        bgImage={{
          src: robot,
          alt: '',
        }}
        title={'Занятия для<br>детей'}
      />,
    ]}
  />
);
