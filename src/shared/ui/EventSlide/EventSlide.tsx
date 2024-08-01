import { ImageUI, ImageUIProps } from '../ImageUI/ImageUI';
import { TypographyUI } from '../TypographyUI';

import styles from './EventSlide.module.scss';

export interface EventSlideProps {
  preview: ImageUIProps;
  content: {
    date: string;
    title: string;
    price: string;
  };
}

export const EventSlide: React.FC<EventSlideProps> = ({ preview, content }) => (
  <div className={styles.eventSlide}>
    <ImageUI
      {...preview}
      className={styles.preview}
    />
    <div className={styles.content}>
      <TypographyUI.Caption1 weight='bold'>
        {content.date}
      </TypographyUI.Caption1>
      <TypographyUI.Text
        weight='bold'
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: content.title }}
      />
      <TypographyUI.Footnote weight='bold'>
        {content.price}
      </TypographyUI.Footnote>
    </div>
  </div>
);
