'use client';

import { Tabs } from '@mantine/core';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { NewsList } from '@/components/news/news-type-2/types';
import { MainBtn } from '@/shared/ui/main-btn';

import styles from './tab-news-ui.module.scss';

export const TabNewsUi = ({ ...data }) => {
  return (
    <>
      <Tabs defaultValue="1" className={styles.root}>
        <Tabs.List className={styles.tab}>
          {data.data.map((item: NewsList) => (
            <Tabs.Tab className={styles.tab_item} key={item.id} value={item.id}>
              {item.title}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {data.data.map((item: NewsList) => (
          <Tabs.Panel
            key={item.id}
            value={item.id}
            className={styles.root_wrapper}
          >
            {item.items.map((item) => (
              <div className={styles.item} key={item.id}>
                <Image
                  src={item.image.url}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                />
                <span className={styles.item_category}>{item.category}</span>
                <Link
                  href="#"
                  className={clsx('base_subtitle', styles.base_subtitle)}
                >
                  {item.title}
                </Link>
                <p
                  className={clsx('base_text', styles.base_text)}
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
                <div className={styles.item_footer}>
                  <Image
                    src={item.author.image.url}
                    alt={item.author.image.alt}
                    width={48}
                    height={48}
                  />
                  <div className={styles.item_footer_info}>
                    <span>{item.author.name}</span>
                    <ul>
                      <li>{item.author.createDate}</li>
                      <li>{item.author.timeRead}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </Tabs.Panel>
        ))}
      </Tabs>
      <div className={styles.button}>
        <MainBtn outlined={true} text="Больше новостей" />
      </div>
    </>
  );
};
