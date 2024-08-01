import { defaultVariants } from './variants';

export type DefaultVariantsProps = {
  [property in keyof typeof defaultVariants]?: keyof (typeof defaultVariants)[property];
};

type TProperty = string;
type TPropertyValue = string | number;
type TClassName = string;

export type TSettings = {
  [property: TProperty]: TPropertyValue;
};

export type TVariants = {
  [property: TProperty]: {
    [variant: TPropertyValue]: TClassName;
  };
};
