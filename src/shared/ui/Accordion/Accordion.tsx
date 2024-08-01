import { createContext, useContext, useMemo, useState } from 'react';

import cn from 'classnames';

import styles from './Accordion.module.scss';
import { AccordionHead, AccordionHeadProps } from './AccordionHead';
import { AccordionItem, AccordionItemProps } from './AccordionItem';
import { AccordionPanel, AccordionPanelProps } from './AccordionPanel';

export interface AccordionProps extends React.PropsWithChildren {
  //expandMode: 'single' | 'multiple';
  className?: string;
  initialActiveIndex?: number;
}

type ActiveIndexType = number | null;

interface IAccordionContext {
  activeIndex: ActiveIndexType;
  setActiveIndex: React.Dispatch<React.SetStateAction<ActiveIndexType>>;
}

interface AccordionComposition {
  Item: React.FC<AccordionItemProps>;
  Head: React.FC<AccordionHeadProps>;
  Panel: React.FC<AccordionPanelProps>;
}

const AccordionContext = createContext<IAccordionContext | null>(null);

/**
 * @description
 * Structure:
 * Accordion -> [Accordion.Item -> Accordion.Head + Accordion.Body];
 */
export const Accordion: React.FC<AccordionProps> & AccordionComposition = ({
  className,
  children,
  initialActiveIndex,
}) => {
  const [activeIndex, setActiveIndex] = useState<ActiveIndexType>(
    initialActiveIndex ?? null,
  );

  const memoizedContextValue = useMemo(
    () => ({
      activeIndex,
      setActiveIndex,
    }),
    [activeIndex, setActiveIndex],
  );

  return (
    <AccordionContext.Provider value={memoizedContextValue}>
      <div className={cn(styles.accordion, className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

export const useAccordionContext = (): IAccordionContext => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      'This component must be used within a <Accordion> component.',
    );
  }
  return context;
};

Accordion.Item = AccordionItem;
Accordion.Head = AccordionHead;
Accordion.Panel = AccordionPanel;
