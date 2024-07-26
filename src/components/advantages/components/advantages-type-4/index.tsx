import clsx from 'clsx';
import React from 'react';

import { getLocalData } from '@/lib/localdata';

import { LayoutAdvantages } from '../../layout/layout-type-1';
import { AdvantagesDTO } from '../../types';
import styles from './advantages-type-4.module.scss';

export const AdvantagesType_4 = async () => {
  const data: AdvantagesDTO = await getLocalData(
    '/src/components/advantages/components/advantages-type-4/data.json',
  );
  return (
    <LayoutAdvantages
      title={data.title}
      titleClassName={styles.base_title}
      rootClassName={styles.root}
      description={data.description}
      descriptionClassName={styles.base_text}
    >
      <ul>
        {data.list.map((item) => (
          <li key={item.id} className={styles.item}>
            <span className={clsx('base_subtitle', styles.base_subtitle)}>
              {item.title}
            </span>
            <div className={styles.item_line}></div>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </LayoutAdvantages>
  );
};
