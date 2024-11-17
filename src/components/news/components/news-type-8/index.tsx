import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { AuthorBlock } from '@/shared/components/author-block/author-block';
import { Badge } from '@/shared/components/badge';

import { NewsDTO } from '../../types';
import common from '../news.module.scss';
import custom from './news-type-8.module.scss';

export const NewsType_8 = async ({
  title,
  titleAlign,
  cls,
}: {
  cls?: string;
  title?: string;
  titleAlign?: 'left' | 'center';
}) => {
  const data: NewsDTO = await getLocalData(
    'src/components/news/components/news-type-8/data.json',
  );

  return (
    <MainSectionLayout
      title={title ? title : data.title}
      description={data.description}
      align={titleAlign ? titleAlign : data.titleAlign}
      cls={cls ? cls : ''}
    >
      <div className={clsx(common.root, custom.root)}>
        <ul className={clsx(common.list, custom.list)}>
          {data.content.list.map((item) => (
            <li
              className={clsx(common.list_item, custom.list_item)}
              key={item.id}
            >
              <Link
                href={item.detailPageUrl}
                key={item.id}
                className={clsx(
                  common.list_item_content,
                  custom.list_item_content,
                )}
              >
                <Image
                  src={item.image.url}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                />
                <div
                  className={clsx(
                    common.list_item_content_wrapper,
                    custom.list_item_content_wrapper,
                  )}
                >
                  <div
                    className={clsx(
                      common.list_item_content_header,
                      custom.list_item_content_header,
                    )}
                  >
                    <Badge text={item.badge.text} />
                  </div>

                  <span
                    className={clsx(
                      'base_subtitle',
                      common.base_subtitle,
                      custom.base_subtitle,
                    )}
                  >
                    {item.title}
                  </span>

                  <AuthorBlock
                    user={item.author.name}
                    avatar={item.author.image.url}
                    date={item.author.createFrom}
                    note={item.author.note}
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MainSectionLayout>
  );
};
