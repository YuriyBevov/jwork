import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { MainBtn } from '@/shared/components/main-btn';

import { AboutDTO } from '../../types';
import common from '../about.module.scss';
import custom from './about-type-3.module.scss';

export const AboutType_3 = async () => {
  const data: AboutDTO = await getLocalData(
    '/src/components/about/components/about-type-3/data.json',
  );
  return (
    <MainSectionLayout title={data.title} align={'center'}>
      <div className={common.root}>
        <div className={clsx(common.grid_layout, custom.grid_layout)}>
          <div
            className={clsx(common.grid_layout_item, custom.grid_layout_item)}
          >
            <h2 className={clsx('base_title', custom.base_title)}>
              {data.content.title}
            </h2>
            <p className={clsx('base_text', custom.base_text)}>
              {data.content.description}
            </p>
            <MainBtn outlined={true} />
          </div>

          <div
            className={clsx(common.grid_layout_item, custom.grid_layout_item)}
          >
            <Image
              src={data.content.image.url}
              alt={data.title}
              width={720}
              height={700}
            />
          </div>
        </div>
      </div>
    </MainSectionLayout>
  );
};
