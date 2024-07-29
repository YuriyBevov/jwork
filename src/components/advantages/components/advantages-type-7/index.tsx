import clsx from 'clsx';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { IconCheck } from '@/shared/icons/icon-check';

import { AdvantagesDTO } from '../../types';
import styles from './advantages-type-7.module.scss';

export const AdvantagesType_7 = async () => {
  const data: AdvantagesDTO = await getLocalData(
    '/src/components/advantages/components/advantages-type-7/data.json',
  );
  return (
    <MainSectionLayout title={data.title} align={'center'}>
      <div className={styles.root}>
        <ul className={styles.list}>
          {data.list.map((item) => (
            <li key={item.id} className={styles.list_item}>
              <div className={styles.list_item_icon}>
                <IconCheck />
              </div>
              <div className={styles.list_item_content}>
                <span className={clsx('base_subtitle', styles.base_subtitle)}>
                  {item.title}
                </span>
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
