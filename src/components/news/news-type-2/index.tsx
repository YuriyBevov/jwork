import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getLocalData } from '@/lib/localdata';

import styles from './news-type-2.module.scss';
import { NewsDTO } from './types';

export const NewsType_2 = async () => {
  const data: NewsDTO = await getLocalData(
    'src/components/news/news-type-2/data.json',
  );

  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={clsx('base_title', styles.base_title)}>{data.title}</h2>
        <ul className={styles.tab}>
          <li className={clsx(styles.tab_item, styles.tab_item__active)}>
            Все категории
          </li>
          <li className={styles.tab_item}>Категория один</li>
          <li className={styles.tab_item}>Категория два</li>
          <li className={styles.tab_item}>Категория три</li>
          <li className={styles.tab_item}>Категория четыре</li>
        </ul>
        <div className={styles.root_wrapper}>
          {data.list.map((item) => (
            <div key={item.id} className={styles.item}>
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
        </div>
      </div>
    </section>
  );
};
