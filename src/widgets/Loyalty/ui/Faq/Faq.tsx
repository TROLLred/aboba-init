import cn from 'classnames';

import styles from './Faq.module.scss';

import { FaqItem, FaqItemProps } from '@entities/Loyalty/ui/FaqItem/FaqItem';
import { TypographyUI } from '@shared/ui';

interface FaqProps {
  title: string;
  className?: string;
  items: FaqItemProps[];
}

export const Faq: React.FC<FaqProps> = ({ className, title, items }) => (
  <div className={cn(styles.faq, className)}>
    <TypographyUI.Title3
      weight='bold'
      className={styles.title}
    >
      {title}
    </TypographyUI.Title3>
    <ul className={styles.list}>
      {items.map((item, i) => (
        <FaqItem
          key={i}
          {...item}
        ></FaqItem>
      ))}
    </ul>
  </div>
);
