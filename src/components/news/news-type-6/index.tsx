import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { SliderUi } from '@/shared/components/slider-ui';
import { IconLinkArrow } from '@/shared/icons/icon-link-arrow';

import styles from './news-type-6.module.scss';
import { NewsDTO } from './types';

export const NewsType_6 = async () => {
  const data: NewsDTO = await getLocalData(
    'src/components/news/news-type-6/data.json',
  );

  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={clsx('base_title', styles.base_title)}>{data.title}</h2>
        <SliderUi slidesPerView={2} spaceBetween={40}>
          {data.list.map((item) => (
            <div key={item.id} className={styles.item}>
              <Image
                src={item.image.url}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
              />
              <div className={styles.item_info}>
                <ul className={styles.item_list}>
                  <li
                    className={clsx(
                      styles.item_list__item,
                      styles.item_list__category,
                    )}
                  >
                    {item.category}
                  </li>
                  <li
                    className={clsx(
                      styles.item_list__item,
                      styles.item_list__date,
                    )}
                  >
                    {item.timeRead}
                  </li>
                </ul>
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
                  Читать подробнее <IconLinkArrow />
                </Link>
              </div>
            </div>
          ))}
        </SliderUi>
      </div>
    </section>
  );
};
