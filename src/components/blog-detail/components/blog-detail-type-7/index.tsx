import clsx from 'clsx';
import React from 'react';

import { NewsType_7 } from '@/components/news/components';
import { getLocalData } from '@/lib/localdata';
import { ContentBlock } from '@/shared/components/content-block/content-block';

import { BlogDetailDTO } from '../../types';
import common from '../blog-detail.module.scss';
import custom from './blog-detail-type-7.module.scss';

export const BlogDetail_7 = async () => {
  const data: BlogDetailDTO = await getLocalData(
    '/src/components/blog-detail/components/blog-detail-type-7/data.json',
  );

  return (
    <>
      <section className={clsx(common.root, custom.root)}>
        <div className="container">
          <h2 className={clsx('base_title', custom.base_title)}>
            {data.title}
          </h2>
          <ContentBlock content={data.content} />
        </div>
      </section>
      <NewsType_7 title={'Рекомендации'} />
    </>
  );
};
