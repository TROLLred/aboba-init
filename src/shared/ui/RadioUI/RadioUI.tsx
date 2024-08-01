import { useCallback, useState } from 'react';

import cn from 'classnames';

import styles from './RadioUI.module.scss';

interface RadioUIProps {
  id: string;
  checked?: boolean;
  className?: string;
}

export const RadioUI: React.FC<RadioUIProps> = ({ id, checked, className }) => {
  const [isChecked, setIsChecked] = useState(!!checked);

  const toggle = useCallback(() => setIsChecked(!isChecked), [isChecked]);

  return (
    <>
      <input
        checked={isChecked}
        onChange={toggle}
        className={styles.radioInput}
        type='checkbox'
        id={id}
      />
      <label
        className={cn(className, styles.radio)}
        htmlFor={id}
      />
    </>
  );
};
