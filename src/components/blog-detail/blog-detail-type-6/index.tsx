import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { NewsType_8 } from '@/components/news';
import { getLocalData } from '@/lib/localdata';
import { AuthorBlock } from '@/shared/components/author-block/author-block';
import { ContentBlock } from '@/shared/components/content-block/content-block';

import styles from './blog-detail-type-6.module.scss';
import { BlogDetailDTO } from './types';

export const BlogDetail_6 = async () => {
  const data: BlogDetailDTO = await getLocalData(
    '/src/components/blog-detail/blog-detail-type-6/data.json',
  );

  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.root_content}>
          <div className={styles.root_content_side}>
            <div className={styles.root_detail_img}>
              <Image
                src={data.image.url}
                alt={data.image.alt}
                width={data.image.width}
                height={data.image.height}
              />
            </div>

            <h2 className={clsx('base_title', styles.base_title)}>
              {data.title}
            </h2>
            <AuthorBlock
              user={data.author.user}
              date={data.author.date}
              note={data.author.note}
              avatar={data.author.avatar}
            />
            <ContentBlock content={data.content} />
          </div>
          <div className={styles.root_content_side}>
            <NewsType_8 />
          </div>
        </div>
      </div>
    </section>
  );
};
