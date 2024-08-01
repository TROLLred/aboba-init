import cn from 'classnames';

import { IconUI, IconUIProps } from '../IconUI/IconUI';
import { TypographyUI } from '../TypographyUI';

import styles from './Tabs.module.scss';

export type TTabsItem = {
  label: string;
  Icon?: IconUIProps | null; // TODO: fix
};

export interface ITabsNavbarProps {
  tabs: TTabsItem[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}
export const TabsNavbar: React.FC<ITabsNavbarProps> = ({
  tabs,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <ul className={styles.navbar}>
      {tabs.map((tab, i) => (
        <TypographyUI.ButtonText
          key={i}
          onClick={() => setActiveIndex(i)}
          className={
            activeIndex === i
              ? cn(styles.navbarItem, styles.navbarActiveItem)
              : styles.navbarItem
          }
        >
          {tab.Icon ? (
            <IconUI
              size={16}
              {...tab.Icon}
              className={styles.navbarIcon}
            />
          ) : null}
          {tab.label}
        </TypographyUI.ButtonText>
      ))}
    </ul>
  );
};
