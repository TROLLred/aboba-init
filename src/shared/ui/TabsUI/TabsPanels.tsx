import cn from 'classnames';

import styles from './Tabs.module.scss';

export interface TabsPanelsProps extends React.PropsWithChildren {
  className?: string;
}

export const TabsPanels: React.FC<TabsPanelsProps> = ({
  className,
  children,
}) => {
  return <div className={cn(styles.panels, className)}>{children}</div>;
};
