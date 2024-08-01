import { CardWrapperUI } from '../CardWrapperUI';
import { ImageUI, ImageUIProps } from '../ImageUI/ImageUI';
import { TypographyUI } from '../TypographyUI';

import styles from './BannerUI.module.scss';

interface BannerProps {
  title: string;
  preview: ImageUIProps;
  button: {
    text: string;
    href: string;
  };
}

export const BannerUI: React.FC<BannerProps> = ({ title, preview, button }) => (
  <CardWrapperUI
    radius={12}
    padding={12}
    className={styles.banner}
    theme={'secondary'}
  >
    <div className={styles.content}>
      <TypographyUI.TextSmall
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <TypographyUI.Subheadline
        as={'button'}
        className={styles.button}
      >
        {button.text}
      </TypographyUI.Subheadline>
    </div>
    <ImageUI
      {...preview}
      className={styles.preview}
    />
  </CardWrapperUI>
);
