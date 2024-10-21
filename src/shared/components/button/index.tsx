import clsx from 'clsx';
import React from 'react';

import styles from './button.module.scss';

export const ButtonUi = ({
  icon,
  children,
  radius,
  height = 'xs',
  className,
  outline,
  style,
}: {
  icon?: React.ReactNode;
  children: React.ReactNode;
  radius?: 'xs' | 'lg';
  height?: 'xs' | 'lg';
  className?: string;
  outline?: boolean;
  style?: React.CSSProperties;
}) => {
  return (
    <button
      className={clsx(
        styles.root,
        className,
        styles.root,
        radius && styles[`radius__${radius}`],
        outline && styles.outline,
        height && styles[`height__${height}`],
      )}
      style={style}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
