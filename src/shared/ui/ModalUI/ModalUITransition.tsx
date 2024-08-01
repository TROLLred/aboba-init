import { CSSTransition } from 'react-transition-group';

import styles from './ModalUI.module.scss';

interface ModalUITransitionProps extends React.PropsWithChildren {
  nodeRef: React.MutableRefObject<null | HTMLDivElement>;
  isOpen: boolean;
  unmountOnExit?: boolean;
}

export const ModalUITransition: React.FC<ModalUITransitionProps> = ({
  nodeRef,
  isOpen,
  children,
  unmountOnExit = false,
}) => (
  <CSSTransition
    appear={true}
    in={isOpen}
    timeout={{
      appear: 300,
      enter: 300,
      exit: 300,
    }}
    classNames={{
      appearDone: styles.popupAppearDone,
      appearActive: styles.popupAppear,
      enterDone: styles.popupEnterDone,
      enterActive: styles.popupEnterActive,
      exitDone: styles.popupExitDone,
      exitActive: styles.popupExitActive,
    }}
    nodeRef={nodeRef}
    unmountOnExit={unmountOnExit}
  >
    {children}
  </CSSTransition>
);
