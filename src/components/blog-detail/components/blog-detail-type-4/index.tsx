import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { NewsType_4 } from '@/components/news/components';
import { getLocalData } from '@/lib/localdata';
import { AuthorBlock } from '@/shared/components/author-block/author-block';
import { ContentBlock } from '@/shared/components/content-block/content-block';

import { BlogDetailDTO } from '../../types';
import common from '../blog-detail.module.scss';
import custom from './blog-detail-type-4.module.scss';

export const BlogDetail_4 = async () => {
  const data: BlogDetailDTO = await getLocalData(
    '/src/components/blog-detail/components/blog-detail-type-4/data.json',
  );

  return (
    <>
      <section className={clsx(common.root, custom.root)}>
        <div className="container">
          <div className={clsx(common.root_header, custom.root_header)}>
            <div className={custom.root_header_side}>
              <Image
                src={data.image.url}
                alt={data.image.alt}
                width={data.image.width}
                height={data.image.height}
              />
            </div>
            <div className={custom.root_header_side}>
              <span className={custom.root_header_timestamp}>
                {data.timestamp}
              </span>
              <span className={custom.root_header_cathegory}>
                {data.cathegory}
              </span>

              <h2 className={clsx('base_title', custom.base_title)}>
                {data.title}
              </h2>
              <AuthorBlock
                user={data.author.user}
                date={data.author.date}
                note={data.author.note}
                avatar={data.author.avatar}
              />
            </div>
          </div>
          <ContentBlock content={data.content} />
        </div>
      </section>
      <NewsType_4 title={'Рекомендации'} titleAlign={'left'} />
    </>
  );
};
