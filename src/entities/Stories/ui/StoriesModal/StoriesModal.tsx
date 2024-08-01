import { useCallback, useEffect, useRef } from 'react';

import cn from 'classnames';

import styles from './StoriesModal.module.scss';
import { StoriesModalTransition } from './StoriesModalTransition';

import { Portal } from '@shared/ui';

interface StoriesModalProps extends React.PropsWithChildren {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  unmountOnClose?: boolean;
}

export const StoriesModal: React.FC<StoriesModalProps> = ({
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
      <StoriesModalTransition
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
      </StoriesModalTransition>
    </Portal>
  );
};
