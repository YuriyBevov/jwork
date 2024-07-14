import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { MainBtn } from '@/shared/ui/main-btn';

import styles from './services-type-5.module.scss';
import { ServicesDTO } from './types';

export const ServicesType_5 = async () => {
  const data: ServicesDTO = await getLocalData(
    '/src/components/services/services-type-5/data.json',
  );
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={clsx('base_title', styles.base_title)}>{data.title}</h2>
        <ul>
          {data.list.map((item) => (
            <li key={item.id}>
              <div className={styles.item}>
                <Image
                  src={item.image.url}
                  alt={item.image.alt}
                  width={560}
                  height={320}
                />
                <div className={styles.item_content}>
                  <span className={clsx('base_subtitle', styles.base_subtitle)}>
                    {item.title}
                  </span>
                  <p>{item.description}</p>

                  <MainBtn rounded={'xs'} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
