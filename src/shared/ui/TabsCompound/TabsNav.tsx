import { useCallback, useEffect, useRef } from 'react';

import cn from 'classnames';

import { useTabsContext } from './Tabs';
import styles from './Tabs.module.scss';

export interface TabsNavProps extends React.PropsWithChildren {
  className?: string;
}

export const TabsNav: React.FC<TabsNavProps> = ({ className, children }) => {
  const { activeIndex } = useTabsContext();
  const ref = useRef<HTMLUListElement | null>(null);

  const moveTabBackground = useCallback(() => {
    if (!ref?.current) return;

    const width =
      (
        ref.current.childNodes[activeIndex] as HTMLElement | undefined
      )?.getBoundingClientRect().width ?? 0;
    const left = width * activeIndex;

    ref.current.style.setProperty('--current-tab-width', `${width}px`);
    ref.current.style.setProperty('--start-pos', `${left}px`);
  }, [activeIndex]);

  useEffect(() => {
    moveTabBackground();
  }, [ref, activeIndex, moveTabBackground]);

  return (
    <ul
      className={cn(styles.nav, className)}
      ref={ref}
    >
      {children}
    </ul>
  );
};
