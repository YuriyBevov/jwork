import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { AuthorBlock } from '@/shared/components/author-block/author-block';
import { BadgeBlock } from '@/shared/components/badge-block/badge-block';
import { ContentBlock } from '@/shared/components/content-block/content-block';

import styles from './blog-detail-type-5.module.scss';
import { BlogDetailDTO } from './types';

export const BlogDetail_5 = async () => {
  const data: BlogDetailDTO = await getLocalData(
    '/src/components/blog-detail/blog-detail-type-5/data.json',
  );

  return (
    <section className={styles.root}>
      <div className="container">
        <Image
          src={data.image.url}
          alt={data.image.alt}
          width={data.image.width}
          height={data.image.height}
        />
        <div className={styles.root_wrapper}>
          <div className={styles.root_sidebar}>
            <BadgeBlock data={data.badges} />

            <h2 className={clsx('base_title', styles.base_title)}>
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
  );
};
