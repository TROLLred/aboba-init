import { useEffect, useRef, useState } from 'react';

import cn from 'classnames';
import QRCodeStyling from 'qr-code-styling';

import { useQrOptions } from '../../hooks/useQrOptions';

import styles from './QR.module.scss';

interface IQRProps {
  size?: number;
  data: string;
  className?: string;
}

export const QR: React.FC<IQRProps> = ({ data, size, className }) => {
  const [options, setOptions] = useQrOptions(data, size);
  const [qrCode] = useState<QRCodeStyling>(new QRCodeStyling(options));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOptions((options) => ({
      ...options,
      data: data,
    }));
  }, [data, setOptions]);

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
      qrCode.applyExtension((svg, options) => {
        svg.setAttribute('viewBox', `0 0 ${options.width} ${options.width}`);
      });
      console.log(qrCode);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    if (!qrCode) return;

    qrCode.update(options);
  }, [qrCode, options]);

  return (
    <div
      ref={ref}
      className={cn(styles.qr, className)}
    />
  );
};
