import { SwitchUI } from '../SwitchUI/SwitchUI';
import { TypographyUI } from '../TypographyUI';

import styles from './Switcher.module.scss';

interface Props {
  title?: string;
  description: string;
  withSwitcher?: boolean;
}

export const Switcher: React.FC<Props> = ({
  title,
  description,
  withSwitcher,
}) => (
  <div className={styles.switcher}>
    <div className={styles.content}>
      <TypographyUI.Text
        weight='bold'
        className={styles.title}
      >
        {title}
      </TypographyUI.Text>
      <TypographyUI.TextSmall className={styles.description}>
        {description}
      </TypographyUI.TextSmall>
    </div>
    {withSwitcher ? <SwitchUI id='aboba' /> : null}
  </div>
);
