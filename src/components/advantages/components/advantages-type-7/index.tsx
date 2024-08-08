import clsx from 'clsx';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { IconCheck } from '@/shared/icons/icon-check';

import { AdvantagesDTO } from '../../types';
import common from '../advantages.module.scss';
import custom from './advantages-type-7.module.scss';

export const AdvantagesType_7 = async () => {
  const data: AdvantagesDTO = await getLocalData(
    '/src/components/advantages/components/advantages-type-7/data.json',
  );
  return (
    <MainSectionLayout title={data.title} align={'center'}>
      <div className={common.root}>
        <ul className={clsx(common.list, custom.list)}>
          {data.content.list.map((item) => (
            <li
              key={item.id}
              className={clsx(common.list_item, custom.list_item)}
            >
              <div
                className={clsx(common.list_item_icon, custom.list_item_icon)}
              >
                <IconCheck />
              </div>
              <div
                className={clsx(
                  common.list_item_content,
                  custom.list_item_content,
                )}
              >
                <span className={clsx('base_subtitle', custom.base_subtitle)}>
                  {item.title}
                </span>
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
