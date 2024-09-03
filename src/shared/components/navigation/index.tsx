'use client';

import Link from 'next/link';
import React from 'react';

import { Navigation } from '@/components/header/components/types';

import styles from './navigation.module.scss';

export const HeaderMenu = ({ data }: { data: Navigation[] }) => {
  return (
    <nav className={styles.navigation}>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link href="#">{item.title}</Link>

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
