import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import cn from 'classnames';

import styles from './ImageUI.module.scss';

export interface ImageUIProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  alt: string;
  src: string;
}

export const ImageUI: React.FC<ImageUIProps> = ({
  className,
  src,
  height,
  width,
  alt,
  ...rest
}) => (
  <img
    className={cn(className, styles.image)}
    src={src}
    height={height}
    width={width}
    alt={alt}
    {...rest}
  />
);
