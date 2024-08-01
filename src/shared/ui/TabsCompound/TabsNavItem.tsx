import { useCallback } from 'react';

import cn from 'classnames';

import { SvgReactComponent } from '../../types/SvgReactComponent';
import { IconUI } from '../IconUI';

import { useTabsContext } from './Tabs';
import styles from './Tabs.module.scss';

export interface TabsNavItemProps extends React.PropsWithChildren {
  icon?: SvgReactComponent;
  className?: string;
  activeClassName?: string;
  index: number;
}

export const TabsNavItem: React.FC<TabsNavItemProps> = ({
  children,
  className,
  activeClassName,
  icon,
  index,
}) => {
  const { activeIndex, setActiveIndex } = useTabsContext();

  const onClick = useCallback(() => {
    if (activeIndex !== index) setActiveIndex(index);
  }, [setActiveIndex, index, activeIndex]);

  return (
    <li
      className={cn(
        styles.tab,
        className,
        activeIndex === index ? activeClassName ?? styles.activeTab : null,
      )}
      onClick={onClick}
    >
      {icon ? (
        <IconUI
          Icon={icon}
          size={16}
        />
      ) : null}
      {children}
    </li>
  );
};
