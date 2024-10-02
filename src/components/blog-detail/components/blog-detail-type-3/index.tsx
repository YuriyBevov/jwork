import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { NewsType_3 } from '@/components/news/components';
import { getLocalData } from '@/lib/localdata';
import { AuthorBlock } from '@/shared/components/author-block/author-block';
import { ContentBlock } from '@/shared/components/content-block/content-block';

import { BlogDetailDTO } from '../../types';
import common from '../blog-detail.module.scss';
import custom from './blog-detail-type-3.module.scss';

export const BlogDetail_3 = async () => {
  const data: BlogDetailDTO = await getLocalData(
    '/src/components/blog-detail/components/blog-detail-type-3/data.json',
  );

  return (
    <>
      <section className={clsx(common.root, custom.root)}>
        <div className="container">
          <div className={clsx(common.root_header, custom.root_header)}>
            <Image
              src={data.image.url}
              alt={data.image.alt}
              width={data.image.width}
              height={data.image.height}
            />
            <AuthorBlock
              user={data.author.user}
              date={data.author.date}
              note={data.author.note}
              avatar={data.author.avatar}
            />
            <h2 className={clsx('base_title', custom.base_title)}>
              {data.title}
            </h2>
          </div>
          <div className={clsx(common.root_content, custom.root_content)}>
            <ContentBlock content={data.content} />
          </div>
        </div>
      </section>

      <NewsType_3 title={'Рекомендации'} titleAlign={'left'} />
    </>
  );
};
