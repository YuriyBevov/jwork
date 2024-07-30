import clsx from 'clsx';
import React from 'react';

import { TopMenu } from '@/components/footer/types';

import styles from './footer-top-menu.module.scss';

export const FooterTopMenu = ({
  data,
  className,
}: {
  data: TopMenu[];
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
