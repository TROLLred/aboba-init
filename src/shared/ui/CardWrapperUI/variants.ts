import styles from './CardWrapperUI.module.scss';

/**
 * @description
 * Не резонно перекатываться на styled-compoents или tailwind ради пары блоков с высокой вариативностью
 * Также как и плодить множество блоков или постоянно перекрывать стили через classnames
 * Потому я считаю, что это лучшее решение на данный момент
 */
export const variants = {
  theme: {
    primary: styles.primaryCard, // беленькая
    secondary: styles.secondaryCard, // серенькая
    outlined: styles.outlinedCard, // прозрачная с серым бордером
    //accentGradient: styles.accentGradientCard, // с красным градиентом
  },
};
