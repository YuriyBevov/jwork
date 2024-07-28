import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { MainBtn } from '@/shared/components/main-btn';

import styles from './services-type-3.module.scss';
import { ServicesDTO } from './types';

export const ServicesType_3 = async () => {
  const data: ServicesDTO = await getLocalData(
    '/src/components/services/services-type-3/data.json',
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

        <ul>
          {data.list.map((item) => (
            <li key={item.id}>
              <div className={styles.item}>
                <Image
                  src={item.image.url}
                  alt={item.image.alt}
                  width={440}
                  height={240}
                />
                <span className={clsx('base_subtitle', styles.base_subtitle)}>
                  {item.title}
                </span>
                <p>{item.description}</p>

                <MainBtn />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
