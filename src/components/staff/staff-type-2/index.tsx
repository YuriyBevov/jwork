// 'use client';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { SliderUi, SliderUiElement } from '@/shared/components/slider-ui';

import styles from './staff-type-2.module.scss';
import { StaffDTO } from './types';

export const StaffType_2 = async () => {
  const data: StaffDTO = await getLocalData(
    'src/components/staff/staff-type-2/data.json',
  );

  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={clsx('base_title', styles.base_title)}>{data.title}</h2>
        <div className={styles.root_wrapper}>
          <SliderUi>
            {data.list.map((item) => (
              <SliderUiElement key={item.id}>
                <div key={item.id} className={styles.item}>
                  <Image
                    src={item.image.url}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                  />
                  <div className={styles.item_name}>{item.name}</div>
                  <div className={styles.item_label}>{item.label}</div>
                  <ul className={styles.item_property}>
                    {item.property.map((property) => (
                      <li
                        key={property.id}
                        className={styles.item_property_item}
                      >
                        <span>{property.name}</span> -{' '}
                        <span>{property.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SliderUiElement>
            ))}
          </SliderUi>
        </div>
      </div>
    </section>
  );
};
