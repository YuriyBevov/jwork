import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { MainBtn } from '@/shared/components/main-btn';

import { AboutDTO } from '../../types';
import common from '../about.module.scss';
import custom from './about-type-4.module.scss';

export const AboutType_4 = async () => {
  const data: AboutDTO = await getLocalData(
    '/src/components/about/components/about-type-4/data.json',
  );
  return (
    <MainSectionLayout title={data.title} align={data.titleAlign}>
      <div className={common.root}>
        <div className={clsx(common.grid_layout, custom.grid_layout)}>
          <div
            className={clsx(common.grid_layout_item, custom.grid_layout_item)}
          >
            <p className={clsx('base_text', custom.base_text)}>
              {data.content.description}
            </p>

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
                    <strong
                      className={clsx(
                        common.list_item_label,
                        custom.list_item_label,
                      )}
                    >
                      {item.label}
                    </strong>
                    <p className={clsx('base_text', custom.base_text)}>
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <MainBtn rounded={'lg'} />
          </div>
          <div
            className={clsx(common.grid_layout_item, custom.grid_layout_item)}
          >
            <Image
              src={data.content.image.url}
              alt={data.title}
              width={680}
              height={500}
            />
          </div>
        </div>
      </div>
    </MainSectionLayout>
  );
};
