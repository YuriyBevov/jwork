import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { MainBtn } from '@/shared/components/main-btn';

import styles from './news-type-1.module.scss';
import { NewsDTO } from './types';

export const NewsType_1 = async () => {
  const data: NewsDTO = await getLocalData(
    'src/components/news/news-type-1/data.json',
  );

  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={clsx('base_title', styles.base_title)}>{data.title}</h2>
        <div className={styles.root_wrapper}>
          {data.list.map((item) => (
            <div key={item.id} className={styles.item}>
              <Image
                src={item.image.url}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
              />
              <div className={styles.item_info}>
                <span className={styles.item_date}>{item.createdAt}</span>
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
                <Link className={styles.item_link} href="#">
                  Читать далее...
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.root_button}>
          <MainBtn
            rounded="lg"
            text="Показать больше новостей"
            outlined={true}
          />
        </div>
      </div>
    </section>
  );
};
