import cn from 'classnames';

import {
  getCnFromProps,
  DefaultVariantsProps,
} from '../../lib/stylesHelpers/getCnFromProps';

import styles from './CardWrapperUI.module.scss';
import { variants } from './variants';

export interface CardWrapperUIProps
  extends React.PropsWithChildren,
    DefaultVariantsProps {
  className?: string;
  theme?: keyof typeof variants.theme;
  onClick?: () => void;
}

export const CardWrapperUI: React.FC<CardWrapperUIProps> = ({
  className,
  onClick,
  children,
  ...rest
}) => (
  <div
    className={cn(className, styles.card, getCnFromProps(rest, variants))}
    onClick={onClick}
  >
    {children}
  </div>
);
