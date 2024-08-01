import { TypographyConfig } from './constants';

export type TypographyConfigType = {
  tag: React.ElementType;
  classNames: {
    regular: string;
    bold: string;
  };
};

export type TypographyType = keyof typeof TypographyConfig;

export type TypographyUIType = {
  [key in TypographyType]: (props: TypographyUIProps) => React.ReactNode;
};

export interface TypographyConstructorProps extends TypographyUIProps {
  type: TypographyType;
}

export interface TypographyUIProps
  extends React.PropsWithChildren,
    React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  weight?: 'bold' | 'regular';
  className?: string;
  dangerouslySetInnerHTML?: { __html: string };
}
