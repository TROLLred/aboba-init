import cn from 'classnames';

import { getCnFromProps } from '../../lib/stylesHelpers/getCnFromProps';
import { SvgReactComponent } from '../../types/SvgReactComponent';

import styles from './IconUI.module.scss';
import { variants } from './variants';

export interface IconUIProps {
  Icon: SvgReactComponent;
  className?: string;
  isRounded?: boolean;
  size?: keyof typeof variants.size;
}

export const IconUI: React.FC<IconUIProps> = ({
  Icon,
  isRounded,
  className,
  ...rest
}) => (
  <span
    className={cn(
      styles.icon,
      className,
      isRounded ? styles.rounded : null,
      getCnFromProps({ ...rest }, variants),
    )}
  >
    <Icon />
  </span>
);
