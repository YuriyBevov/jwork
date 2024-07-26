import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { IconHands } from '@/shared/icons/icon-hands';

import { LayoutAdvantages } from '../../layout/layout-type-1';
import { AdvantagesDTO } from '../../types';
import styles from './advantages-type-2.module.scss';

export const AdvantagesType_2 = async () => {
  const data: AdvantagesDTO = await getLocalData(
    '/src/components/advantages/components/advantages-type-2/data.json',
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
            <div className={styles.item_icon}>
              <IconHands />
            </div>
            <div className={styles.item_content}>
              <span className={'base_subtitle'}>{item.title}</span>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </LayoutAdvantages>
  );
};
