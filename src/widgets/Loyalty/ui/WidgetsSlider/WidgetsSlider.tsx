import styles from './WidgetsSlider.module.scss';

import heartIcon from '@icons/heartSolid.svg?react';
import map from '@icons/mapSolid.svg?react';
import usersIcon from '@icons/usersSolid.svg?react';
import mapPreview from '@images/mapPreviewGray.jpg';
import { SliderUI } from '@shared/ui/SliderUI/SliderUI';
import { WidgetUI } from '@shared/ui/WidgetUI/WidgetUI';

export const WidgetsSlider: React.FC = () => (
  <SliderUI
    spaceBetween={16}
    slidesPerView={'auto'}
    className={styles.widgetsSlider}
    slides={[
      <WidgetUI
        icon={map}
        key={0}
        bgImage={{
          src: mapPreview,
          alt: '',
        }}
        title={'Места<br>рядом'}
      />,
      <WidgetUI
        icon={heartIcon}
        key={1}
        title={'Избранные<br>места'}
      />,
      <WidgetUI
        icon={usersIcon}
        key={1}
        title={'Пригласить<br>друга'}
      />,
    ]}
  />
);
