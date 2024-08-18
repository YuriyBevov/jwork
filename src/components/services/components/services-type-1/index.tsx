import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { MainBtn } from '@/shared/components/main-btn';

import { ServicesDTO } from '../../types';
import common from '../services.module.scss';
import custom from './services-type-1.module.scss';

export const ServicesType_1 = async () => {
  const data: ServicesDTO = await getLocalData(
    '/src/components/services/components/services-type-1/data.json',
  );

  return (
    <MainSectionLayout title={data.title} align={data.titleAlign}>
      <div className={common.root}>
        <ul className={clsx(common.list, custom.list)}>
          {data.content.list.map((item) => (
            <li key={item.id}>
              <div className={clsx(common.list_item, custom.list_item)}>
                <Image
                  src={item.image.url}
                  alt={item.image.alt}
                  width={440}
                  height={240}
                />
                <div
                  className={clsx(
                    common.list_item_content,
                    custom.list_item_content,
                  )}
                >
                  <span
                    className={clsx(
                      'base_subtitle',
                      common.base_subtitle,
                      custom.base_subtitle,
                    )}
                  >
                    {item.title}
                  </span>
                  <p
                    className={clsx(
                      'base_text',
                      common.base_text,
                      custom.base_text,
                    )}
                  >
                    {item.description}
                  </p>
                  <MainBtn outlined={true} rounded={'lg'} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </MainSectionLayout>
  );
};
