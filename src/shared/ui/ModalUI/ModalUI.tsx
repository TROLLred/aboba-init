import { useCallback, useEffect, useRef } from 'react';

import cn from 'classnames';

import { Portal } from '../Portal/Portal';

import styles from './ModalUI.module.scss';
import { ModalUITransition } from './ModalUITransition';

interface IPopupProps extends React.PropsWithChildren {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  unmountOnClose?: boolean;
}

export const Popup: React.FC<IPopupProps> = ({
  isOpen,
  setIsOpen,
  children,
  unmountOnClose = false,
}) => {
  const popupRef = useRef(null);

  const close = useCallback(() => setIsOpen(false), [setIsOpen]);

  const onWrapperClick = useCallback(
    (e?: React.MouseEvent) => e?.stopPropagation(),
    [],
  );

  useEffect(() => {
    return close;
  }, [close]);

  return (
    <Portal>
      <ModalUITransition
        isOpen={isOpen}
        nodeRef={popupRef}
        unmountOnExit={unmountOnClose}
      >
        <div
          ref={popupRef}
          onClick={close}
          className={cn(styles.modal, isOpen ? styles.opened : null)}
        >
          <div
            onClick={onWrapperClick}
            className={styles.wrapper}
          >
            <div className={styles.content}>{children}</div>
          </div>
        </div>
      </ModalUITransition>
    </Portal>
  );
};
