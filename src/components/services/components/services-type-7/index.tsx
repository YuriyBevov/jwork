import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { BadgeBlock } from '@/shared/components/badge-block/badge-block';
import { MainBtn } from '@/shared/components/main-btn';

import { ServicesDTO } from '../../types';
import common from '../services.module.scss';
import custom from './services-type-7.module.scss';

export const ServicesType_7 = async () => {
  const data: ServicesDTO = await getLocalData(
    '/src/components/services/components/services-type-7/data.json',
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
              <Image
                src={item.image.url}
                alt={item.image.alt}
                width={560}
                height={320}
              />
              <div
                className={clsx(
                  common.list_item_content,
                  custom.list_item_content,
                )}
              >
                <BadgeBlock data={item.badges} />
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
                <MainBtn rounded={'xs'} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </MainSectionLayout>
  );
};
