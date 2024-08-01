import cn from 'classnames';

import { useTabsContext } from './Tabs';
import styles from './Tabs.module.scss';

export interface TabsPanelProps extends React.PropsWithChildren {
  className?: string;
  index: number;
}

export const TabsPanel: React.FC<TabsPanelProps> = ({
  className,
  children,
  index,
}) => {
  const { activeIndex } = useTabsContext();

  return (
    <div
      className={cn(
        styles.panel,
        className,
        index === activeIndex ? styles.activePanel : null,
      )}
    >
      {children}
    </div>
  );
};
