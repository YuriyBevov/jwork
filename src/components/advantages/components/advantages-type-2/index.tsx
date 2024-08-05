import clsx from 'clsx';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { IconSet } from '@/shared/icons';

import { AdvantagesDTO } from '../../types';
import styles from './advantages-type-2.module.scss';

export const AdvantagesType_2 = async () => {
  const data: AdvantagesDTO = await getLocalData(
    '/src/components/advantages/components/advantages-type-2/data.json',
  );
  return (
    <MainSectionLayout title={data.title} align={'center'}>
      <div className={styles.root}>
        <ul className={styles.list}>
          {data.content.list.map((item) => (
            <li key={item.id} className={styles.list_item}>
              <div className={styles.list_item_icon}>
                <IconSet name={item.icon} />
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
