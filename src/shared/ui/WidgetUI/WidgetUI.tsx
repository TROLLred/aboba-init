import cn from 'classnames';

import {
  CardWrapperUI,
  CardWrapperUIProps,
  IconUI,
  ImageUI,
  ImageUIProps,
  TypographyUI,
} from '..';
import { SvgReactComponent } from '../../types/SvgReactComponent';

import styles from './WidgetUI.module.scss';

export interface WidgetProps extends CardWrapperUIProps {
  icon: SvgReactComponent;
  onClick?: () => void;
  className?: string;
  bgImage?: ImageUIProps;
  title: string;
}

export const WidgetUI: React.FC<WidgetProps> = ({
  icon,
  onClick,
  className,
  bgImage,
  title,
}) => (
  <CardWrapperUI
    radius={12}
    padding={8}
    theme='secondary'
    onClick={onClick}
    className={cn(
      styles.actionCard,
      className,
      bgImage ? styles.withImg : null,
    )}
  >
    <IconUI
      Icon={icon}
      className={styles.icon}
    />
    <TypographyUI.TextSmall
      weight='bold'
      dangerouslySetInnerHTML={{ __html: title }}
      className={styles.title}
    />
    {bgImage ? (
      <div className={styles.bgWrapper}>
        <ImageUI
          {...bgImage}
          className={styles.bgImage}
        />
      </div>
    ) : null}
  </CardWrapperUI>
);
