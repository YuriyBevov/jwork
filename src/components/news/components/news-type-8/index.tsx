import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { BadgeBlock } from '@/shared/components/badge-block/badge-block';

import styles from './news-type-8.module.scss';
import { NewsDTO } from './types';

export const NewsType_8 = async () => {
  const data: NewsDTO = await getLocalData(
    'src/components/news/news-type-8/data.json',
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
                <BadgeBlock data={data.badges} />
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
                  Читать подробнее...
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
