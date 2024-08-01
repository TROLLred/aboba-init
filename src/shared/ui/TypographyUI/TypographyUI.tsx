import cn from 'classnames';

import { TypographyConfig } from './constants';
import {
  TypographyConstructorProps,
  TypographyType,
  TypographyUIProps,
  TypographyUIType,
} from './types';

const TypographyConstructor: React.FC<TypographyConstructorProps> = ({
  type,
  children,
  className,
  as,
  weight = 'regular',
  dangerouslySetInnerHTML,
  ...rest
}) => {
  const configType = TypographyConfig[type];
  const Tag = as ?? configType.tag;
  return (
    <Tag
      {...rest}
      className={cn(className, configType.classNames[weight])}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </Tag>
  );
};

export const TypographyUI = (
  Object.keys(TypographyConfig) as TypographyType[]
).reduce(
  (acc, type: TypographyType) => ({
    ...acc,
    ...{
      [type]: (props: TypographyUIProps) =>
        TypographyConstructor({ type, ...props }),
    },
  }),
  {} as TypographyUIType,
);
