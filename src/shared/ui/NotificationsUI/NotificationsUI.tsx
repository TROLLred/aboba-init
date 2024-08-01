import { ImageUI } from '../ImageUI/ImageUI';
import { TypographyUI } from '../TypographyUI';

import styles from './NotificationsUI.module.scss';

import a101mock from '@images/a101mock.jpg';

export const NotificationsUI: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.group}>
      <TypographyUI.Headline weight='bold'>23 апр</TypographyUI.Headline>
      <div>
        <div className={styles.item}>
          <ImageUI
            src={a101mock}
            alt={''}
            className={styles.img}
          />
          <div className={styles.content}>
            <TypographyUI.Text
              weight='bold'
              className={styles.title}
            >
              Новые возможности
            </TypographyUI.Text>
            <TypographyUI.TextSmall className={styles.description}>
              Узнайте о новых акциях, событиях и привилегиях, доступных для
              участников программы лояльности нашего жилого комплекса
            </TypographyUI.TextSmall>
          </div>
          <TypographyUI.Caption1 className={styles.date}>
            13:00
          </TypographyUI.Caption1>
        </div>
      </div>
    </div>
  </div>
);
