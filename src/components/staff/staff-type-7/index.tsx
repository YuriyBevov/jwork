// 'use client';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { SliderUi } from '@/shared/components/slider-ui';

import styles from './staff-type-7.module.scss';
import { StaffDTO } from './types';

export const StaffType_7 = async () => {
  const data: StaffDTO = await getLocalData(
    'src/components/staff/staff-type-7/data.json',
  );

  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={clsx('base_title', styles.base_title)}>{data.title}</h2>
        <div className={styles.root_wrapper}>
          <SliderUi slidesPerView={2} spaceBetween={48}>
            {data.list.map((item) => (
              <div key={item.id} className={styles.item}>
                <Image
                  src={item.image.url}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                />
                <small className={styles.item_label}>{item.label}</small>
                <div className={styles.item_name}>{item.name}</div>

                <ul className={styles.item_property}>
                  {item.property.map((property) => (
                    <li key={property.id} className={styles.item_property_item}>
                      <span>{property.name}</span> -{' '}
                      <span>{property.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </SliderUi>
        </div>
      </div>
    </section>
  );
};