import { useCallback, useState, Dispatch, SetStateAction } from 'react';

import {
  DrawType,
  TypeNumber,
  Mode,
  ErrorCorrectionLevel,
  DotType,
  CornerSquareType,
  CornerDotType,
  Options,
} from 'qr-code-styling';

import Logo from '@icons/a101Logo.svg';

type TQrOptions = [Options, Dispatch<SetStateAction<Options>>];

export function useQrOptions(data: string, size?: number): TQrOptions {
  const setQrSettings = useCallback(
    (options: Options) => ({
      width: options.width ?? 155,
      height: options.height ?? 155,
      type: 'svg' as DrawType,
      data: options.data,
      image: Logo,
      margin: 0,
      qrOptions: {
        typeNumber: 0 as TypeNumber,
        mode: 'Byte' as Mode,
        errorCorrectionLevel: 'Q' as ErrorCorrectionLevel,
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.6,
        margin: 0,
        crossOrigin: 'anonymous',
      },
      dotsOptions: {
        color: 'var(--gray-100)',
        type: 'square' as DotType,
      },
      backgroundOptions: {
        color: 'transparent',
      },
      cornersSquareOptions: {
        color: 'var(--gray-100)',
        type: 'extra-rounded' as CornerSquareType,
      },
      cornersDotOptions: {
        color: 'var(--gray-100)',
        type: 'dot' as CornerDotType,
      },
    }),
    [],
  );

  const [options, setOptions] = useState<Options>(
    setQrSettings({ data, width: size, height: size }),
  );

  return [options, setOptions];
}
