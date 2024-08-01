import styles from './FaqItem.module.scss';

import ArrowIcon from '@icons/arrow.svg?react';
import { SvgReactComponent } from '@shared/types/SvgReactComponent';
import { CardWrapperUI, IconUI, TypographyUI } from '@shared/ui';

export interface FaqItemProps {
  icon: SvgReactComponent;
  text: string;
  info?: string;
}

export const FaqItem: React.FC<FaqItemProps> = ({ text, info, icon }) => (
  <CardWrapperUI
    //as={'li'} вашпе это ссылки будут либо кнопки
    radius={12}
    padding={12}
    theme='primary'
    className={styles.item}
  >
    <div className={styles.head}>
      <IconUI
        Icon={icon}
        isRounded={true}
        size={24}
        className={styles.icon}
      />
      <TypographyUI.TextSmall
        weight='regular'
        className={styles.text}
      >
        {text}
      </TypographyUI.TextSmall>
    </div>
    <div className={styles.nav}>
      <TypographyUI.TextSmall
        weight='regular'
        className={styles.info}
      >
        {info}
      </TypographyUI.TextSmall>
      <IconUI
        Icon={ArrowIcon}
        size={16}
        className={styles.arrow}
      />
    </div>
  </CardWrapperUI>
);
