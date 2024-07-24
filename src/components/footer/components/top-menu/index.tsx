import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { FooterMenu } from '../../types';
import styles from './top-menu.module.scss';

export const TopMenu = ({
  data,
  className,
}: {
  data: FooterMenu[];
  className?: string;
}) => {
  return (
    <div className={clsx(styles.root, className)}>
      {data.map((item) => (
        <nav className={styles.root_nav} key={item.title}>
          <span className={styles.root_nav__title}>{item.title}</span>
          <ul>
            {item.items.map((subItem) => (
              <li key={subItem.title}>
                <Link href={subItem.href}>{subItem.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
};
