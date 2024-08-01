import { useState, useLayoutEffect } from 'react';

import { createPortal } from 'react-dom';

interface PortalProps extends React.PropsWithChildren {
  wrapperId?: string;
}

const createWrapperAndAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);

  return wrapperElement;
};

export const Portal: React.FC<PortalProps> = ({
  children,
  wrapperId = 'portal',
}) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null,
  );

  // FIXME: lock scroll when any modal is open

  useLayoutEffect(() => {
    let element = document.getElementById(`${wrapperId}`);
    let systemCreated = false;
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(`${wrapperId}`);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element?.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  return wrapperElement === null
    ? null
    : createPortal(children, wrapperElement);
};
