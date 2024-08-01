import { ReactNode } from 'react';

import cn from 'classnames';

import styles from './Tags.module.scss';

interface TagsPanelsProps {
  panels: ReactNode[];
  activeIndex: number;
}

export const TagsPanels: React.FC<TagsPanelsProps> = ({
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
