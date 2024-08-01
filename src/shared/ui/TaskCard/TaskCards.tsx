import { TaskCard } from './TaskCard';
import styles from './TaskCard.module.scss';

export const TaskCards: React.FC = () => (
  <div className={styles.wrapper}>
    <TaskCard />
    <TaskCard />
    <TaskCard />
    <TaskCard />
  </div>
);
