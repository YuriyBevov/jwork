'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { HeaderDTO } from '@/components/header/components/types';
import { IconChevronDown } from '@/shared/icons/icon-chevron-down';

import { MainBtn } from '../main-btn';
import styles from './navigation.module.scss';

export const HeaderMenu = ({
  data,
  align = 'left',
  active = false,
}: {
  data: HeaderDTO;
  align?: 'center' | 'right' | 'left';
  active: boolean;
}) => {
  const onMouseEnterHandler = (target: HTMLElement) => {
    const inner = (target as HTMLElement).querySelector('ul');

    if (!inner) return;
    const items = (target.closest('nav') as HTMLElement).querySelectorAll(
      'ul > li',
    );
    const length = items.length;
    items.forEach((item: Element, index: number) => {
      if (item === target) {
        length / 2 > index
          ? (inner.style.left = '0')
          : (inner.style.right = '0');
      }
    });
  };

  const onClickHandler = (target: HTMLElement) => {
    target.classList.toggle(styles.nav_list_item_arrow_active);
  };

  return (
    <nav
      className={clsx(
        styles.root,
        styles[`root_${align}`],
        active ? styles.root_active : '',
      )}
    >
      <ul className={styles.nav_list}>
        {data.navigation.map((item) => (
          <li
            key={item.id}
            className={styles.nav_list_item}
            onMouseEnter={(evt) =>
              onMouseEnterHandler(evt.currentTarget as HTMLElement)
            }
          >
            <Link href="#">
              {item.title}
              {item.items && (
                <span
                  className={styles.nav_list_item_arrow}
                  onClick={(evt) => onClickHandler(evt.currentTarget)}
                >
                  <IconChevronDown
                    width={24}
                    height={24}
                    fill={'var(--dark)'}
                  />
                </span>
              )}
            </Link>
            {item.items && (
              <ul className={styles.nav_list_inner}>
                {item.items.map((subItem) => (
                  <li key={subItem.id} className={styles.nav_list_inner_item}>
                    <Link href="#">{subItem.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className={styles.nav_footer}>
        <Link href={`mailto:${data.email}`}>
          <span>{data.email}</span>
        </Link>
        <Link href={`tel:${data.phone.replace(/\s+/g, '')}`}>
          <span>{data.phone}</span>
        </Link>

        <div className={styles.nav_footer_btns}>
          <MainBtn text="Кнопка" outlined rounded="lg" />
          <MainBtn text="Кнопка заявки" rounded="lg" />
        </div>
      </div>
    </nav>
  );
};
