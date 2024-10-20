'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { Navigation } from '@/components/header/components/types';
import { IconChevronDown } from '@/shared/icons/icon-chevron-down';

import styles from './navigation.module.scss';

export const HeaderMenu = ({
  data,
  align = 'left',
  active = false,
}: {
  data: Navigation[];
  align?: 'center' | 'right' | 'left';
  active: boolean;
}) => {
  return (
    <nav
      className={clsx(
        styles.root,
        styles[`root_${align}`],
        active ? styles.root_active : '',
      )}
    >
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link href="#">
              {item.title}
              {item.items && (
                <IconChevronDown width={24} height={24} fill={'var(--dark)'} />
              )}
            </Link>
            {item.items && (
              <ul>
                {item.items.map((subItem) => (
                  <li key={subItem.id}>
                    <Link href="#">{subItem.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
