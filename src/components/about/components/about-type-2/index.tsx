import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { MainBtn } from '@/shared/components/main-btn';
// import { IconBox } from '@/shared/icons/icon-box';
import { IconBox } from '@/shared/icons/icon-box';

import { AboutDTO } from '../../types';
import common from '../about.module.scss';
import custom from './about-type-2.module.scss';

export const AboutType_2 = async () => {
  const data: AboutDTO = await getLocalData(
    '/src/components/about/components/about-type-2/data.json',
  );

  return (
    <MainSectionLayout title={data.title} align={data.titleAlign}>
      <div className={common.root}>
        <div className={clsx(common.grid_layout, custom.grid_layout_item)}>
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

          <div
            className={clsx(common.grid_layout_item, custom.grid_layout_item)}
          >
            <span className={clsx('base_subtitle', custom.base_subtitle)}>
              {data.content.subtitle}
            </span>

            <p className={clsx('base_text', custom.base_text)}>
              {data.description}
            </p>

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
                    <IconBox width={36} height={40} />
                  </div>
                  <div
                    className={clsx(
                      common.list_item_content,
                      custom.list_item_content,
                    )}
                  >
                    <span
                      className={clsx(
                        common.list_item_title,
                        custom.list_item_title,
                      )}
                    >
                      {item.title}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <MainBtn outlined={true} />
          </div>
        </div>
      </div>
    </MainSectionLayout>
  );
};
