import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { Badge } from '@/shared/components/badge';
import { Slider } from '@/shared/components/slider';

import { StaffDTO } from '../../types';
import common from '../staff.module.scss';
import custom from './staff-type-2.module.scss';

export const StaffType_2 = async () => {
  const data: StaffDTO = await getLocalData(
    'src/components/staff/components/staff-type-2/data.json',
  );

  return (
    <MainSectionLayout
      title={data.title}
      description={data.description}
      align={data.titleAlign}
    >
      <div className={common.root}>
        <Slider
          slidesPerViewXs={1}
          slidesPerViewMobile={2}
          slidesPerViewTablet={2}
          slidesPerViewTabletLg={2}
          slidesPerView={3}
          spaceBetween={24}
        >
          {data.content.list.map((item) => (
            <div
              key={item.id}
              className={clsx(common.list_item, custom.list_item)}
            >
              <Image
                src={item.image.url}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
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
                <Badge text={item.badge.text} outlined={true} accent={true} />
                <ul
                  className={clsx(
                    common.list_item_properties,
                    custom.list_item_properties,
                  )}
                >
                  {item.properties.map((property) => (
                    <li key={property}>
                      <span
                        className={clsx(
                          'base_text',
                          common.base_text,
                          custom.base_text,
                        )}
                      >
                        {property}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </MainSectionLayout>
  );
};
