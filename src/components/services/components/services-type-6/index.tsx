import clsx from 'clsx';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { MainBtn } from '@/shared/components/main-btn';
import { IconSet } from '@/shared/icons';

import { ServicesDTO } from '../../types';
import common from '../services.module.scss';
import custom from './services-type-6.module.scss';

export const ServicesType_6 = async () => {
  const data: ServicesDTO = await getLocalData(
    '/src/components/services/components/services-type-6/data.json',
  );
  return (
    <MainSectionLayout title={data.title} align={data.titleAlign}>
      <div className={common.root}>
        <ul className={clsx(common.list, custom.list)}>
          {data.content.list.map((item) => (
            <li
              key={item.id}
              className={clsx(common.list_item, custom.list_item)}
            >
              <div className={custom.list_item_header}>
                <IconSet name={item.icon} width={48} height={48} />
                <span
                  className={clsx(
                    'base_subtitle',
                    common.base_subtitle,
                    custom.base_subtitle,
                  )}
                >
                  {item.title}
                </span>
              </div>
              <div
                className={clsx(
                  common.list_item_content,
                  custom.list_item_content,
                )}
              >
                <p
                  className={clsx(
                    'base_text',
                    common.base_text,
                    custom.base_text,
                  )}
                >
                  {item.description}
                </p>
                <MainBtn rounded={'xs'} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </MainSectionLayout>
  );
};
