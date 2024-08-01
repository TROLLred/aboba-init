import cn from 'classnames';

import styles from './Navbar.module.scss';

import { IconUI, IconUIProps, TypographyUI } from '@shared/ui';

interface NavbarItemProps {
  icon: IconUIProps;
  label: string;
  isActive?: boolean;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({
  icon,
  label,
  isActive,
}) => {
  return (
    <li className={cn(isActive ? styles.active : null, styles.item)}>
      <IconUI
        {...icon}
        className={styles.icon}
      />
      <TypographyUI.Caption2
        weight='bold'
        as={'span'}
      >
        {label}
      </TypographyUI.Caption2>
    </li>
  );
};
