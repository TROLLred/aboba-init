import cn from 'classnames';

import styles from './PanelItemUI.module.scss';

import { CardWrapperUI, TypographyUI } from '@shared/ui';

interface PanelItemUIProps {
  label: string;
  value: string;
  unit: string;
  className?: string;
}

export const PanelItemUI: React.FC<PanelItemUIProps> = ({
  value,
  label,
  unit,
  className,
}) => (
  <CardWrapperUI
    radius={12}
    padding={8}
    theme='primary'
    className={cn(styles.panelItem, className)}
  >
    <TypographyUI.Caption2 className={styles.label}>
      {label}
    </TypographyUI.Caption2>
    <TypographyUI.Text
      weight='bold'
      className={styles.value}
    >
      {value}
      <TypographyUI.unitGradient>{unit}</TypographyUI.unitGradient>
    </TypographyUI.Text>
  </CardWrapperUI>
);
