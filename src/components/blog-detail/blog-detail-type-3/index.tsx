import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { AuthorBlock } from '@/shared/components/author-block/author-block';
import { ContentBlock } from '@/shared/components/content-block/content-block';

import styles from './blog-detail-type-3.module.scss';
import { BlogDetailDTO } from './types';

export const BlogDetail_3 = async () => {
  const data: BlogDetailDTO = await getLocalData(
    '/src/components/blog-detail/blog-detail-type-3/data.json',
  );

  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.root_header}>
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
          <h2 className={clsx('base_title', styles.base_title)}>
            {data.title}
          </h2>
        </div>
        <ContentBlock content={data.content} />
      </div>
    </section>
  );
};
