import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';

import { IconCheck } from '../../../../shared/icons/icon-check';
import { AboutDTO } from '../../types';
import common from '../about.module.scss';
import custom from './about-type-5.module.scss';

export const AboutType_5 = async () => {
  const data: AboutDTO = await getLocalData(
    '/src/components/about/components/about-type-5/data.json',
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
              height={960}
            />
          </div>

          <div
            className={clsx(common.grid_layout_item, custom.grid_layout_item)}
          >
            <ul className={clsx(common.list, custom.list)}>
              {data.content.list.map((item) => (
                <li
                  key={item.id}
                  className={clsx(common.list_item, custom.list_item)}
                >
                  <div
                    className={clsx(
                      common.list_item_icon,
                      custom.list_item_icon,
                    )}
                  >
                    <IconCheck />
                  </div>
                  <div
                    className={clsx(
                      common.list_item_content,
                      custom.list_item_content,
                    )}
                  >
                    <span
                      className={clsx('base_subtitle', custom.base_subtitle)}
                    >
                      {item.boldText}
                    </span>
                    <p className={clsx('base_text', custom.base_text)}>
                      {item.simpleText}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MainSectionLayout>
  );
};
