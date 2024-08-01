import { CardWrapperUI } from '../CardWrapperUI';
import { ImageUI, ImageUIProps } from '../ImageUI/ImageUI';
import { TypographyUI } from '../TypographyUI';

import styles from './StoryCardUI.module.scss';

interface StoryCardUIProps {
  bgImage: ImageUIProps;
  title: string;
}

export const StoryCardUI: React.FC<StoryCardUIProps> = ({ bgImage, title }) => (
  <CardWrapperUI
    radius={16}
    className={styles.storyCard}
  >
    <TypographyUI.Caption1
      weight='bold'
      className={styles.title}
      dangerouslySetInnerHTML={{ __html: title }}
    />
    <div className={styles.bgWrapper}>
      <ImageUI
        {...bgImage}
        className={styles.bg}
      />
    </div>
  </CardWrapperUI>
);
