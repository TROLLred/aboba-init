import cn from 'classnames';

import { TSettings, TVariants } from './types';
import { defaultVariants } from './variants';

export const getCnFromProps = (
  settings: TSettings,
  variants?: TVariants,
): string => {
  const summaryVariants = {
    ...variants,
    ...defaultVariants,
  };

  return cn(
    ...Object.keys(summaryVariants).map((property) => {
      if (summaryVariants.hasOwnProperty(property)) {
        const currentProperty =
          summaryVariants[property as keyof typeof summaryVariants];
        const propertyValue = settings[property];

        if (currentProperty.hasOwnProperty(propertyValue))
          return currentProperty[propertyValue as keyof typeof currentProperty];
      }
    }),
  );
};
