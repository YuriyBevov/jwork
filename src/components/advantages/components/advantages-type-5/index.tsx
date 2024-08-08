import clsx from 'clsx';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';

import { AdvantagesDTO } from '../../types';
import common from '../advantages.module.scss';
import custom from './advantages-type-5.module.scss';

export const AdvantagesType_5 = async () => {
  const data: AdvantagesDTO = await getLocalData(
    '/src/components/advantages/components/advantages-type-5/data.json',
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
                <span className={custom.list_item_header_num}>{item.id}</span>
                <span className={clsx('base_subtitle', custom.base_subtitle)}>
                  {item.title}
                </span>
              </div>

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
    </MainSectionLayout>
  );
};
