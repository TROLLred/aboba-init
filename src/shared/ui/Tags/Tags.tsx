import { useState } from 'react';

import cn from 'classnames';

import styles from './Tags.module.scss';
import { TagsItem, TagsNavbar } from './TagsNavbar';
import { TagsPanels } from './TagsPanels';

export interface TagsProps {
  tabs: TagsItem[];
  panels: React.ReactNode[];
  className?: string;
}

export const Tags: React.FC<TagsProps> = ({ tabs, panels, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn(styles.tags, className)}>
      <TagsNavbar
        tabs={tabs}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <TagsPanels
        panels={panels}
        activeIndex={activeIndex}
      />
    </div>
  );
};
