import { useCallback, useState } from 'react';

import cn from 'classnames';

import styles from './SwitchUI.module.scss';

export interface SwitchUIProps {
  id: string;
  checked?: boolean;
  className?: string;
}

export const SwitchUI: React.FC<SwitchUIProps> = ({
  id,
  checked,
  className,
}) => {
  const [isChecked, setIsChecked] = useState(!!checked);

  const toggle = useCallback(() => setIsChecked(!isChecked), [isChecked]);

  return (
    <>
      <input
        checked={isChecked}
        onChange={toggle}
        className={styles.switchInput}
        id={id}
        type='checkbox'
      />
      <label
        className={cn(className, styles.switch)}
        htmlFor={id}
      />
    </>
  );
};
