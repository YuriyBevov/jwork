import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';

import { AboutDTO } from '../../types';
import common from '../about.module.scss';
import custom from './about-type-7.module.scss';

export const AboutType_7 = async () => {
  const data: AboutDTO = await getLocalData(
    '/src/components/about/components/about-type-7/data.json',
  );
  return (
    <MainSectionLayout
      title={data.title}
      description={data.description}
      align={'center'}
    >
      <div className={common.root}>
        <div className={clsx(common.grid_layout, custom.grid_layout)}>
          {data.content.list.map((item) => (
            <Image
              key={item.id}
              src={item.image?.url ?? ''}
              alt={item.image?.alt ?? ''}
              width={item.image?.width}
              height={item.image?.height}
            />
          ))}
        </div>
      </div>
    </MainSectionLayout>
  );
};
