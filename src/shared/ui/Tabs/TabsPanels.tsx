import { ReactNode } from 'react';

import cn from 'classnames';

import styles from './Tabs.module.scss';

interface ITabsPanelsProps {
  panels: ReactNode[];
  activeIndex: number;
}

export const TabsPanels: React.FC<ITabsPanelsProps> = ({
  panels,
  activeIndex,
}) => (
  <div className={styles.panels}>
    {panels.map((panel, i) => (
      <div
        key={i}
        className={
          activeIndex === i
            ? cn(styles.panel, styles.activePanel)
            : styles.panel
        }
      >
        {panel}
      </div>
    ))}
  </div>
);
