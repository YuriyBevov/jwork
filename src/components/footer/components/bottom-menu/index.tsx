import clsx from 'clsx';
import React from 'react';

import { FooterBottomMenu } from '../../types';
import styles from './bottom-menu.module.scss';

export const BottomMenu = ({
  data,
  className,
}: {
  data: FooterBottomMenu[];
  className?: string;
}) => {
  return (
    <div className={clsx(styles.root, className)}>
      <ul>
        {data.map((item) => (
          <li key={item.title}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
