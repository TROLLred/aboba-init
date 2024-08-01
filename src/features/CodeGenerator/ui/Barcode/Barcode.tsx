import { useCallback, useEffect, useRef, useState } from 'react';

import cn from 'classnames';
import JsBarcode, { BaseOptions } from 'jsbarcode';

import styles from './Barcode.module.scss';

interface IBarcodeProps {
  data: string;
  className?: string;
}

export const Barcode: React.FC<IBarcodeProps> = ({ data, className }) => {
  const [options] = useState<BaseOptions>({
    height: 100,
    format: 'CODE128',
    displayValue: false,
    background: 'transparent',
    lineColor: 'var(--gray-100)',
    margin: 0,
  });

  const containerRef = useRef<SVGSVGElement>(null);

  const renderBarcode = useCallback(JsBarcode, [data, containerRef.current]);

  useEffect(() => {
    renderBarcode(containerRef.current, data, options);
  }, [renderBarcode, data, options]);

  return (
    <div className={cn(styles.barcode, className)}>
      <svg ref={containerRef} />
    </div>
  );
};
