import { createContext, useContext, useMemo, useState } from 'react';

import cn from 'classnames';

import styles from './Tabs.module.scss';
import { TabsNav, TabsNavProps } from './TabsNav';
import { TabsNavItem, TabsNavItemProps } from './TabsNavItem';
import { TabsPanel, TabsPanelProps } from './TabsPanel';
import { TabsPanels, TabsPanelsProps } from './TabsPanels';

interface TabsContext {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

interface TabsComposition {
  Nav: React.FC<TabsNavProps>;
  Tab: React.FC<TabsNavItemProps>;
  Panels: React.FC<TabsPanelsProps>;
  Panel: React.FC<TabsPanelProps>;
}

interface TabsProps extends React.PropsWithChildren {
  initialActiveIndex?: number;
  className?: string;
}

const TabsContext = createContext<TabsContext | undefined>(undefined);

export const useTabsContext = (): TabsContext => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('This component must be used within a <Tabs> component.');
  }

  return context;
};

/**
 * @description
 * Structure
 *  Tabs ->
 *    Tabs.Nav ->
 *      [Tabs.Tab];
 *  Tabs.Panels ->
 *    [Tabs.Panel];
 */
export const Tabs: React.FC<TabsProps> & TabsComposition = ({
  initialActiveIndex = 0,
  children,
  className,
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex ?? 0);

  const memoizedContextValue = useMemo(
    () => ({
      activeIndex,
      setActiveIndex,
    }),
    [activeIndex, setActiveIndex],
  );

  return (
    <TabsContext.Provider value={memoizedContextValue}>
      <div className={cn(styles.tabs, className)}>{children}</div>
    </TabsContext.Provider>
  );
};

Tabs.Nav = TabsNav;
Tabs.Tab = TabsNavItem;
Tabs.Panels = TabsPanels;
Tabs.Panel = TabsPanel;
