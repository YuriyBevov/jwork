import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { BadgeBlock } from '@/shared/components/badge-block/badge-block';
import { MainBtn } from '@/shared/components/main-btn';

import { AboutDTO } from '../../types';
import common from '../about.module.scss';
import custom from './about-type-6.module.scss';

export const AboutType_6 = async () => {
  const data: AboutDTO = await getLocalData(
    '/src/components/about/components/about-type-6/data.json',
  );

  return (
    <MainSectionLayout title={data.title} align={data.titleAlign}>
      <div className={common.root}>
        <div className={clsx(common.grid_layout, custom.grid_layout)}>
          <div
            className={clsx(common.grid_layout_item, custom.grid_layout_item)}
          >
            <Image
              src={data.content.image.url}
              alt={data.title}
              width={800}
              height={640}
            />
          </div>
          <div
            className={clsx(common.grid_layout_item, custom.grid_layout_item)}
          >
            <BadgeBlock data={data.content.badges} />
            <span className={clsx('base_subtitle', custom.base_subtitle)}>
              {data.content.subtitle}
            </span>
            {data.description && (
              <p className={clsx('base_text', custom.base_text)}>
                {data.description}
              </p>
            )}

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
                    <p className={clsx('base_text', custom.base_text)}>
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <MainBtn rounded={'xs'} />
          </div>
        </div>
      </div>
    </MainSectionLayout>
  );
};
