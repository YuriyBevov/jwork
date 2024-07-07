import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { MainBtn } from '@/shared/ui/main-btn';

import styles from './staff-type-3.module.scss';
import { StaffDTO } from './types';

export const StaffTypeThree = async () => {
  const data: StaffDTO = await getLocalData(
    'src/components/staff/staff-type-3/data.json',
  );

  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={clsx('base_title', styles.base_title)}>{data.title}</h2>
        {data.description && (
          <p className={clsx('base_text', styles.base_text)}>
            {data.description}
          </p>
        )}
        <div className={styles.root_wrapper}>
          {data.list.map((item) => (
            <div key={item.id} className={styles.item}>
              <Image
                src={item.image.url}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
              />
              <div className={styles.item_line}>
                <div className={styles.item_label}>{item.label}</div>
                <div className={styles.item_name}>{item.name}</div>
                <ul className={styles.item_property}>
                  {item.property.map((property) => (
                    <li key={property.id} className={styles.item_property_item}>
                      <span>{property.name}</span> -
                      <span>{property.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <MainBtn rounded={'xs'} text="Больше сотрудников" />
      </div>
    </section>
  );
};
