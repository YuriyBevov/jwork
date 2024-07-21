import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import {
  TabUi,
  TabUiContent,
  TabUiList,
} from '@/shared/components/tab-news-ui';
import { MainBtn } from '@/shared/ui/main-btn';

import styles from './news-type-4.module.scss';
import { NewsDTO } from './types';

export const NewsType_4 = async () => {
  const data: NewsDTO = await getLocalData(
    'src/components/news/news-type-3/data.json',
  );

  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={clsx('base_title', styles.base_title)}>{data.title}</h2>
        <TabUi>
          <TabUiList className={styles.tab}>
            {data.list.map((item) => (
              <React.Fragment key={item.id}>{item.title}</React.Fragment>
            ))}
          </TabUiList>
          <TabUiContent className={styles.root_wrapper}>
            {data.list.map((item) => (
              <React.Fragment key={item.id}>
                {item.items.map((item) => (
                  <div className={styles.item} key={item.id}>
                    <Image
                      src={item.image.url}
                      alt={item.image.alt}
                      width={item.image.width}
                      height={item.image.height}
                    />
                    <div className={styles.item_wrapper}>
                      <span className={styles.item_category}>
                        {item.category}
                      </span>
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
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </TabUiContent>
        </TabUi>
        <div className={styles.button}>
          <MainBtn rounded="lg" text="Больше новостей" />
        </div>
      </div>
    </section>
  );
};
