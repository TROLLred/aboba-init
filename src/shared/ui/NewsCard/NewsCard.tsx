import { CardWrapperUI } from '../CardWrapperUI';
import { IconUI } from '../IconUI';
import { ImageUI, ImageUIProps } from '../ImageUI/ImageUI';
import { TypographyUI } from '../TypographyUI';

import styles from './NewsCard.module.scss';

import blow from '@icons/blow.svg?react';
import bookmarkIcon from '@icons/bookmark.svg?react';
import emojiIcon from '@icons/emoji.svg?react';
import like from '@icons/likeEmoji.svg?react';
import shareIcon from '@icons/share.svg?react';

interface Props extends React.PropsWithChildren {
  description?: string;
  preview?: ImageUIProps;
}

export const NewsCard: React.FC<Props> = ({
  children,
  description,
  preview,
}) => {
  return (
    <CardWrapperUI
      radius={12}
      padding={16}
      className={styles.newsCard}
      theme='primary'
    >
      <div className={styles.head}>
        <TypographyUI.Footnote className={styles.info}>
          <span>Новость А101</span> <span>·</span> <span>18 сен</span>
        </TypographyUI.Footnote>
        <div className={styles.title}>{children}</div>
        <TypographyUI.TextSmall className={styles.description}>
          {description}
        </TypographyUI.TextSmall>
      </div>
      {preview ? <ImageUI {...preview} /> : null}
      <div className={styles.footer}>
        <div className={styles.reactions}>
          <IconUI
            Icon={emojiIcon}
            isRounded={true}
            size={16}
          />
          <div className={styles.group}>
            <IconUI
              Icon={blow}
              isRounded={true}
              size={16}
            />
            <IconUI
              isRounded={true}
              Icon={like}
              size={16}
            />
            <TypographyUI.Caption1 as={'span'}>+5</TypographyUI.Caption1>
          </div>
        </div>
        <div className={styles.actions}>
          <IconUI
            Icon={shareIcon}
            isRounded={true}
            size={16}
          />
          <IconUI
            Icon={bookmarkIcon}
            isRounded={true}
            size={16}
          />
        </div>
      </div>
    </CardWrapperUI>
  );
};
