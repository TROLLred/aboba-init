import { CardWrapperUI } from '../CardWrapperUI';
import { IconUI } from '../IconUI';
import { ImageUI } from '../ImageUI/ImageUI';
import { TypographyUI } from '../TypographyUI';

import styles from './TaskCard.module.scss';

import arrow from '@icons/arrow.svg?react';
import clock from '@icons/clock.svg?react';
import bg from '@images/BG.png';

interface TaskCardProps {
  status?: 'todo' | 'moderation' | 'waiting' | 'complete';
}

const statuses = {
  todo: 'Выполняется',
  moderation: 'Модерация',
  waiting: 'Ожидает подтверждения',
  complete: 'Выполнено',
};

export const TaskCard: React.FC<TaskCardProps> = ({ status }) => {
  return (
    <CardWrapperUI
      padding={16}
      radius={16}
      theme='primary'
      className={styles.taskCard}
    >
      <div className={styles.content}>
        {status ? (
          <TypographyUI.Caption1 className={styles[status]}>
            {statuses[status]}
          </TypographyUI.Caption1>
        ) : null}
        <div className={styles.text}>
          <TypographyUI.TextSmall
            weight='bold'
            className={styles.subtitle}
          >
            500 бонусов
          </TypographyUI.TextSmall>
          <TypographyUI.Text weight='bold'>
            Закажите любые товары в магазине мерча А101 от 1000 Б
          </TypographyUI.Text>
        </div>
        <TypographyUI.Footnote className={styles.info}>
          <span>
            <ImageUI
              src={bg}
              alt={''}
            />
            A101
          </span>
          <span>
            <IconUI
              Icon={clock}
              size={16}
            />
            до 16 июня
          </span>
        </TypographyUI.Footnote>
      </div>
      <IconUI
        size={16}
        Icon={arrow}
        className={styles.icon}
      />
    </CardWrapperUI>
  );
};
