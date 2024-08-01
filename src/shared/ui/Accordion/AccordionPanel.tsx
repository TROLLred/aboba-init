import { useRef } from 'react';

import cn from 'classnames';

import { useAccordionContext } from './Accordion';
import styles from './Accordion.module.scss';
import { useAccordionItemContext } from './AccordionItem';
import { AccordionTransition } from './AccordionTransition';

export interface AccordionPanelProps extends React.PropsWithChildren {
  className?: string;
}

export const AccordionPanel: React.FC<AccordionPanelProps> = ({
  children,
  className,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { activeIndex } = useAccordionContext();
  const { index } = useAccordionItemContext();

  return (
    <AccordionTransition
      nodeRef={ref}
      isOpen={activeIndex === index}
    >
      <div
        ref={ref}
        className={cn(className, styles.panel)}
      >
        <div className={styles.panelContent}>{children}</div>
      </div>
    </AccordionTransition>
  );
};
