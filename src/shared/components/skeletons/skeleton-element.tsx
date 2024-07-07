import clsx from 'clsx';
import React from 'react';

import styles from './skeleton.module.scss';

type Props = {
  type?: 'title' | 'text' | 'image';
  width?: number;
  height?: number;
  rounded?: 'xs' | 'lg';
  className?: string;
  mBottom?: number;
};

export const SkeletonElement: React.FC<Props> = ({
  type,
  width,
  height,
  rounded,
  className,
  mBottom,
}) => {
  return (
    <div
      className={clsx(
        styles[type as keyof typeof styles],
        styles.root,
        className,
      )}
      style={{
        width: width,
        minHeight: height,
        borderRadius: rounded,
        marginBottom: mBottom,
      }}
    ></div>
  );
};
