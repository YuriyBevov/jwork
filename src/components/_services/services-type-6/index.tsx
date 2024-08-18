import clsx from 'clsx';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { MainBtn } from '@/shared/components/main-btn';
import { IconSet } from '@/shared/icons';

import styles from './services-type-6.module.scss';
import { ServicesDTO } from './types';

export const ServicesType_6 = async () => {
  const data: ServicesDTO = await getLocalData(
    '/src/components/services/services-type-6/data.json',
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
                <div className={styles.item_header}>
                  <IconSet name={item.icon} width={48} height={48} />
                  <span className={clsx('base_subtitle', styles.base_subtitle)}>
                    {item.title}
                  </span>
                </div>
                <div className={styles.item_content}>
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
