import { useCallback } from 'react';

import cn from 'classnames';

import { IconUI } from '../IconUI';

import { useAccordionContext } from './Accordion';
import styles from './Accordion.module.scss';
import { useAccordionItemContext } from './AccordionItem';

import chevron from '@icons/chevron.svg?react';

export interface AccordionHeadProps extends React.PropsWithChildren {
  className?: string;
}

export const AccordionHead: React.FC<AccordionHeadProps> = ({
  className,
  children,
}) => {
  const { activeIndex, setActiveIndex } = useAccordionContext();
  const { index } = useAccordionItemContext();

  const toggleHandler = useCallback(() => {
    setActiveIndex(activeIndex === index ? null : index);
  }, [setActiveIndex, activeIndex, index]);

  return (
    <div
      className={cn(styles.head, className)}
      onClick={toggleHandler}
    >
      {children}
      <IconUI
        className={styles.chevron}
        size={16}
        Icon={chevron}
      />
    </div>
  );
};
