import { TypographyUI } from '../TypographyUI';

import { NewsCard } from './NewsCard';
import styles from './NewsCard.module.scss';

import pool from '@images/pool.jpg';

export const NewsList: React.FC = () => (
  <div className={styles.list}>
    <NewsCard preview={{ src: pool, alt: 'pool' }}>
      <TypographyUI.Title4
        weight='bold'
        dangerouslySetInnerHTML={{
          __html: 'В ЖК «Эко Видное 2.0» появится центр водных видов спорта',
        }}
      />
    </NewsCard>
    <NewsCard description='Всего за 8500 руб./м2 квартира полностью готова для проживания'>
      <TypographyUI.Text
        weight='bold'
        dangerouslySetInnerHTML={{
          __html:
            'Лобби ЖК «Метрополия» вошли в<br>шорт-лист премии 100+ Awards',
        }}
      />
    </NewsCard>
  </div>
);
