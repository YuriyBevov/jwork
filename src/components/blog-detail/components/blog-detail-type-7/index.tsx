import clsx from 'clsx';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { ContentBlock } from '@/shared/components/content-block/content-block';

import styles from './blog-detail-type-7.module.scss';
import { BlogDetailDTO } from './types';

export const BlogDetail_7 = async () => {
  const data: BlogDetailDTO = await getLocalData(
    '/src/components/blog-detail/blog-detail-type-7/data.json',
  );

  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={clsx('base_title', styles.base_title)}>{data.title}</h2>
        <ContentBlock content={data.content} />
      </div>
    </section>
  );
};
