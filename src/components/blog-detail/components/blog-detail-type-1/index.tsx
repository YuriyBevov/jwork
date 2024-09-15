import clsx from 'clsx';
import React from 'react';

import { NewsType_1 } from '@/components/news/components';
import { getLocalData } from '@/lib/localdata';
import { ContentBlock } from '@/shared/components/content-block/content-block';

import { BlogDetailDTO } from '../../types';
import common from '../blog-detail.module.scss';
import custom from './blog-detail-type-1.module.scss';

export const BlogDetail_1 = async () => {
  const data: BlogDetailDTO = await getLocalData(
    '/src/components/blog-detail/components/blog-detail-type-1/data.json',
  );

  return (
    <>
      <section className={clsx(common.root, custom.root)}>
        <div className="container">
          <div className="root_header">
            <small>{data.timestamp}</small>
            <h2 className={clsx('base_title', common.base_title)}>
              {data.title}
            </h2>
          </div>
          <div className="root_content">
            <ContentBlock content={data.content} />
          </div>
        </div>
      </section>

      <NewsType_1 title={'Рекомендации'} titleAlign={'left'} />
    </>
  );
};
