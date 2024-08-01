import styles from './AdvantageCard.module.scss';

import { SvgReactComponent } from '@shared/types/SvgReactComponent';
import { CardWrapperUI, IconUI, TypographyUI } from '@shared/ui';

interface AdvantageCardProps {
  icon: SvgReactComponent;
}

export const AdvantageCard: React.FC<AdvantageCardProps> = ({ icon }) => (
  <CardWrapperUI
    radius={12}
    padding={8}
    theme='secondary'
    className={styles.actionCard}
  >
    <IconUI
      Icon={icon}
      size={16}
      className={styles.icon}
    />
    <div>
      <TypographyUI.Subheadline></TypographyUI.Subheadline>
      <TypographyUI.Caption2></TypographyUI.Caption2>
    </div>
  </CardWrapperUI>
);
