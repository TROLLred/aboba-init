import { useState } from 'react';

import cn from 'classnames';

import styles from './Tabs.module.scss';
import { TTabsItem, TabsNavbar } from './TabsNavbar';
import { TabsPanels } from './TabsPanels';
import { TabsSlider } from './TabsSlider';

export interface ITabsProps {
  tabs: TTabsItem[];
  panels: React.ReactNode[];
  className?: string;
  isSlider?: boolean;
}

export const Tabs: React.FC<ITabsProps> = ({
  tabs,
  panels,
  className,
  isSlider = false,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn(styles.tabs, className)}>
      <TabsNavbar
        tabs={tabs}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      {!isSlider ? (
        <TabsPanels
          panels={panels}
          activeIndex={activeIndex}
        />
      ) : (
        <TabsSlider
          panels={panels}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      )}
    </div>
  );
};
