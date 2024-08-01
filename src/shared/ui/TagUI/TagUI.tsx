import { useState } from 'react';

import cn from 'classnames';

import { TypographyUI } from '../TypographyUI';

import styles from './TagUI.module.scss';

interface TagUIProps extends React.PropsWithChildren {
  active: boolean;
}

export const TagUI: React.FC<TagUIProps> = ({ active, children }) => {
  const [isActive, setIsActive] = useState(active);
  return (
    <TypographyUI.Text
      as={'button'}
      className={cn(styles.tag, isActive ? styles.active : null)}
      onClick={() => setIsActive(true)}
    >
      {children}
    </TypographyUI.Text>
  );
};
