import styles from './PageScroller.module.scss';

interface MainPageScrollerProps extends React.PropsWithChildren {
  head: React.ReactNode;
}

export const PageScroller: React.FC<MainPageScrollerProps> = ({
  head,
  children,
}) => (
  <div className={styles.mainPageScroller}>
    <div className={styles.head}>{head}</div>
    <div className={styles.content}>{children}</div>
  </div>
);
