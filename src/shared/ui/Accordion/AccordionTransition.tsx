import { useCallback } from 'react';

import { CSSTransition } from 'react-transition-group';

import styles from './Accordion.module.scss';

interface AccordionTransitionProps extends React.PropsWithChildren {
  nodeRef: React.MutableRefObject<null | HTMLDivElement>;
  isOpen: boolean;
}

export const AccordionTransition: React.FC<AccordionTransitionProps> = ({
  nodeRef,
  isOpen,
  children,
}) => {
  const setFullHeight = useCallback(() => {
    nodeRef.current?.style.setProperty(
      'height',
      `${nodeRef.current?.children[0]?.clientHeight ?? 0}px`,
    );
  }, [nodeRef]);

  const resetHeight = useCallback(() => {
    nodeRef.current?.style.setProperty('height', '0');
  }, [nodeRef]);

  const clear = useCallback(() => {
    nodeRef.current?.removeAttribute('style');
  }, [nodeRef]);

  return (
    <CSSTransition
      appear={true}
      in={isOpen}
      timeout={{
        enter: 300,
        exit: 300,
      }}
      classNames={{
        enterDone: styles.enterDone,
        enterActive: styles.enterActive,
        exitDone: styles.exitDone,
        exitActive: styles.exitActive,
      }}
      nodeRef={nodeRef}
      unmountOnExit={false}
      style={{ height: 0 }}
      onEnter={resetHeight}
      onEntering={setFullHeight}
      onEntered={clear}
      onExit={setFullHeight}
      onExiting={resetHeight}
      onExited={clear}
    >
      {children}
    </CSSTransition>
  );
};
