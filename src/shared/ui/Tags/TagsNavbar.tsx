import cn from 'classnames';

import { TypographyUI } from '../TypographyUI';

import styles from './Tags.module.scss';

export type TagsItem = {
  label: string;
};

export interface TagsNavbarProps {
  tabs: TagsItem[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const TagsNavbar: React.FC<TagsNavbarProps> = ({
  tabs,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <ul className={styles.navbar}>
      {tabs.map((tab, i) => (
        <TypographyUI.Text
          key={i}
          onClick={() => setActiveIndex(i)}
          className={
            activeIndex === i
              ? cn(styles.navbarItem, styles.navbarActiveItem)
              : styles.navbarItem
          }
        >
          {tab.label}
        </TypographyUI.Text>
      ))}
    </ul>
  );
};
