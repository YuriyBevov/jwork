import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { Badge } from '@/shared/components/badge';
import { MainBtn } from '@/shared/components/main-btn';

import { StaffDTO } from '../../types';
import common from '../staff.module.scss';
import custom from './staff-type-3.module.scss';

export const StaffType_3 = async () => {
  const data: StaffDTO = await getLocalData(
    'src/components/staff/components/staff-type-3/data.json',
  );

  return (
    <MainSectionLayout
      title={data.title}
      description={data.description}
      align={data.titleAlign}
    >
      <div className={clsx(common.root, custom.root)}>
        <ul className={clsx(common.list, custom.list)}>
          {data.content.list.map((item) => (
            <li
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
                <Badge
                  text={item.badge.text}
                  outlined={item.badge.outlined}
                  accent={true}
                />
                <span
                  className={clsx(
                    'base_subtitle',
                    common.base_subtitle,
                    custom.base_subtitle,
                  )}
                >
                  {item.title}
                </span>
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
            </li>
          ))}
        </ul>
        <MainBtn rounded={'xs'} text="Больше сотрудников" />
      </div>
    </MainSectionLayout>
  );
};
