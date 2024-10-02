import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { NewsType_5 } from '@/components/news/components';
import { getLocalData } from '@/lib/localdata';
import { AuthorBlock } from '@/shared/components/author-block/author-block';
import { BadgeBlock } from '@/shared/components/badge-block/badge-block';
import { ContentBlock } from '@/shared/components/content-block/content-block';

import { BlogDetailDTO } from '../../types';
import common from '../blog-detail.module.scss';
import custom from './blog-detail-type-5.module.scss';

export const BlogDetail_5 = async () => {
  const data: BlogDetailDTO = await getLocalData(
    '/src/components/blog-detail/components/blog-detail-type-5/data.json',
  );

  return (
    <>
      <section className={clsx(common.root, custom.root)}>
        <div className="container">
          <Image
            src={data.image.url}
            alt={data.image.alt}
            width={data.image.width}
            height={data.image.height}
          />
          <div className={custom.content_wrapper}>
            <div className={custom.content_sidebar}>
              <BadgeBlock data={data.badges} />

              <h2 className={clsx('base_title', custom.base_title)}>
                {data.title}
              </h2>
              <AuthorBlock
                user={data.author.user}
                date={data.author.date}
                avatar={data.author.avatar}
              />
            </div>
            <ContentBlock content={data.content} />
          </div>
        </div>
      </section>
      <NewsType_5 title={'Рекомендации'} titleAlign={'left'} />
    </>
  );
};
