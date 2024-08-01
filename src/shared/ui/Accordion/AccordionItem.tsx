import { createContext, useContext } from 'react';

import cn from 'classnames';

import { useAccordionContext } from './Accordion';
import styles from './Accordion.module.scss';

export interface AccordionItemProps extends React.PropsWithChildren {
  index: number;
  className?: string;
}

interface IAccordionItemContext {
  index: number;
}

const AccordionItemContext = createContext<IAccordionItemContext | null>(null);

export const AccordionItem: React.FC<AccordionItemProps> = ({
  className,
  children,
  index,
}) => {
  const { activeIndex } = useAccordionContext();

  return (
    <AccordionItemContext.Provider value={{ index }}>
      <div
        className={cn(
          styles.item,
          className,
          activeIndex === index ? styles.activeItem : null,
        )}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

export const useAccordionItemContext = (): IAccordionItemContext => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error(
      'This component must be used within a <Accordion.Item> component.',
    );
  }
  return context;
};
