import clsx from 'clsx';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { TabNewsUi } from '@/shared/components/tab-news-ui';

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
        <TabNewsUi data={data.list} />
      </div>
    </section>
  );
};
