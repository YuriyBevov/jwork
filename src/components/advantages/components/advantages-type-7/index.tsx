import clsx from 'clsx';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { IconCheck } from '@/shared/icons/icon-check';

import { LayoutAdvantages } from '../../layout/layout-type-1';
import { AdvantagesDTO } from '../../types';
import styles from './advantages-type-7.module.scss';

export const AdvantagesType_7 = async () => {
  const data: AdvantagesDTO = await getLocalData(
    '/src/components/advantages/components/advantages-type-3/data.json',
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
            <IconCheck />
            <span className={clsx('base_subtitle', styles.base_subtitle)}>
              {item.title}
            </span>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </LayoutAdvantages>
  );
};
