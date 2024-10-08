import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { NewsType_7 } from '@/components/news/components';
import { getLocalData } from '@/lib/localdata';
import { AuthorBlock } from '@/shared/components/author-block/author-block';
import { BadgeBlock } from '@/shared/components/badge-block/badge-block';
import { ContentBlock } from '@/shared/components/content-block/content-block';

import { BlogDetailDTO } from '../../types';
import common from '../blog-detail.module.scss';
import custom from './blog-detail-type-6.module.scss';

export const BlogDetail_6 = async () => {
  const data: BlogDetailDTO = await getLocalData(
    '/src/components/blog-detail/components/blog-detail-type-6/data.json',
  );

  return (
    <section className={clsx(common.root, custom.root)}>
      <div className="container">
        <div className={custom.root_content}>
          <div className={custom.root_content_side}>
            <div className={custom.root_detail_img}>
              <Image
                src={data.image.url}
                alt={data.image.alt}
                width={data.image.width}
                height={data.image.height}
              />
            </div>
            <BadgeBlock data={data.badges} />
            <h2 className={clsx('base_title', custom.base_title)}>
              {data.title}
            </h2>
            <span className={clsx('base_text', custom.base_text)}>
              {data.subtitle}
            </span>
            <AuthorBlock
              user={data.author.user}
              date={data.author.date}
              note={data.author.note}
              avatar={data.author.avatar}
            />
            <ContentBlock content={data.content} />
          </div>
          <div className={custom.root_content_side}>
            <NewsType_7
              title={'Рекомендации'}
              titleAlign={'left'}
              cls={'side'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
