import clsx from 'clsx';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';

import { AdvantagesDTO } from '../../types';
import styles from './advantages-type-4.module.scss';

export const AdvantagesType_4 = async () => {
  const data: AdvantagesDTO = await getLocalData(
    '/src/components/advantages/components/advantages-type-4/data.json',
  );
  return (
    <MainSectionLayout title={data.title}>
      <div className={styles.root}>
        <ul className={styles.list}>
          {data.list.map((item) => (
            <li key={item.id} className={styles.list_item}>
              <span className={clsx('base_subtitle', styles.base_subtitle)}>
                {item.label}
              </span>
              <div className={styles.list_item_content}>
                <p className={clsx('base_text', styles.base_text)}>
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </MainSectionLayout>
  );
};
