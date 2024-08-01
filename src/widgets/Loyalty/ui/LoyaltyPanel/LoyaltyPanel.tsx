import styles from './LoyaltyPanel.module.scss';
import { PanelItemUI } from './PanelItemUI';

import { QR } from '@features/CodeGenerator';
import arrowIcon from '@icons/arrow.svg?react';
import { CardWrapperUI, IconUI, TypographyUI } from '@shared/ui';

export const LoyaltyPanel = () => (
  <div className={styles.loyaltyPanel}>
    <CardWrapperUI
      radius={12}
      theme='primary'
      className={styles.qr}
    >
      <QR
        data={'https://spb.a101.ru/'}
        size={100}
      />
    </CardWrapperUI>
    <div className={styles.info}>
      <PanelItemUI
        label={'баланс'}
        value={'123'}
        unit={'б'}
        className={styles.balance}
      />
      <PanelItemUI
        label={'кэшбэк'}
        value={'2'}
        unit={'%'}
        className={styles.cashback}
      />
      <CardWrapperUI
        radius={12}
        padding={8}
        theme='primary'
        className={styles.grade}
      >
        <TypographyUI.Text weight='bold'>Почетный сосед</TypographyUI.Text>
        <IconUI
          Icon={arrowIcon}
          size={16}
        />
      </CardWrapperUI>
    </div>
  </div>
);
