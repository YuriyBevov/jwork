import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';

import { AdvantagesDTO } from '../../types';
import common from '../advantages.module.scss';
import custom from './advantages-type-6.module.scss';

export const AdvantagesType_6 = async () => {
  const data: AdvantagesDTO = await getLocalData(
    '/src/components/advantages/components/advantages-type-6/data.json',
  );
  return (
    <MainSectionLayout title={data.title} align={data.titleAlign}>
      <div className={common.root}>
        <div className={clsx(common.root_content, custom.root_content)}>
          <div
            className={clsx(common.root_content_side, custom.root_content_side)}
          >
            <h2 className={clsx('base_title', custom.base_title)}>
              {data.content.title}
            </h2>

            <ul className={clsx(common.list, custom.list)}>
              {data.content.list.map((item) => (
                <li
                  key={item.id}
                  className={clsx(common.list_item, custom.list_item)}
                >
                  <span className={clsx('base_subtitle', custom.base_subtitle)}>
                    {item.label}
                  </span>
                  <div
                    className={clsx(
                      common.list_item_content,
                      custom.list_item_content,
                    )}
                  >
                    <p className={clsx('base_text', custom.base_text)}>
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={clsx(common.root_content_side, custom.root_content_side)}
          >
            <Image
              src={data.content.image?.url ?? ''}
              alt={data.content.image?.alt ?? ''}
              width={data.content.image?.width}
              height={data.content.image?.height}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </MainSectionLayout>
  );
};
