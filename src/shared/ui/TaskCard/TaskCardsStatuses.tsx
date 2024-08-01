import { TaskCard } from './TaskCard';
import styles from './TaskCard.module.scss';

export const TaskCardsStatuses: React.FC = () => (
  <div className={styles.wrapper}>
    <TaskCard status='todo' />
    <TaskCard status='moderation' />
    <TaskCard status='waiting' />
    <TaskCard status='complete' />
  </div>
);
