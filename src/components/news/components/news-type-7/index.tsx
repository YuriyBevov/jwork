import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { Badge } from '@/shared/components/badge';
import { MainBtn } from '@/shared/components/main-btn';

import { NewsDTO } from '../../types';
import common from '../news.module.scss';
import custom from './news-type-7.module.scss';

export const NewsType_7 = async ({
  title,
  titleAlign,
  cls,
}: {
  cls?: string;
  title?: string;
  titleAlign?: 'left' | 'center';
}) => {
  const data: NewsDTO = await getLocalData(
    'src/components/news/components/news-type-7/data.json',
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
                    <span>{item.note}</span>
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
                  <p
                    className={clsx(
                      'base_text',
                      common.base_text,
                      custom.base_text,
                    )}
                  >
                    {item.description}
                  </p>
                  <MainBtn simple={true} text={'Читать далее...'} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MainSectionLayout>
  );
};
