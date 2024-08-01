import styles from './Navbar.module.scss';
import { NavbarItem } from './NavbarItem';

import shopIcon from '@icons/bagSolid.svg?react';
import cardIcon from '@icons/cardDuotone.svg?react';
import homeIcon from '@icons/homeColored.svg?react';
import mapIcon from '@icons/map.svg?react';

const routes = [
  {
    label: 'Главная',
    icon: homeIcon,
    isActive: true,
  },
  {
    label: 'Карта',
    icon: mapIcon,
  },
  {
    label: 'Моя карта',
    icon: cardIcon,
  },
  {
    label: 'Мерч A101',
    icon: shopIcon,
  },
];

export const Navbar = () => {
  return (
    <ul className={styles.navbar}>
      {routes.map((route) => (
        <NavbarItem
          key={route.label}
          icon={{
            Icon: route.icon,
            size: 24,
          }}
          label={route.label}
          isActive={!!route?.isActive}
        />
      ))}
    </ul>
  );
};
