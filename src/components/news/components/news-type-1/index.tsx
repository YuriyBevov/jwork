import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { Badge } from '@/shared/components/badge';
import { MainBtn } from '@/shared/components/main-btn';

import { NewsDTO } from '../../types';
import common from '../news.module.scss';
import custom from './news-type-1.module.scss';

export const NewsType_1 = async () => {
  const data: NewsDTO = await getLocalData(
    'src/components/news/components/news-type-1/data.json',
  );

  return (
    <MainSectionLayout
      title={data.title}
      description={data.description}
      align={data.titleAlign}
    >
      <div className={clsx(common.root, custom.root)}>
        <ul className={clsx(common.list, custom.list)}>
          {data.content.list.map((item) => (
            <li
              key={item.id}
              className={clsx(common.list_item, custom.list_item)}
            >
              <div
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
                  <Badge text={item.badge.text} outlined={true} muted={true} />
                  <span className={clsx('base_subtitle', custom.base_subtitle)}>
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
              </div>
            </li>
          ))}
        </ul>
        <MainBtn rounded="lg" text="Показать больше новостей" outlined={true} />
      </div>
    </MainSectionLayout>
  );
};
