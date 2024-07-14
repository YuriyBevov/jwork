import clsx from 'clsx';
import React from 'react';

import { getLocalData } from '@/lib/localdata';

import { IconHands } from '../../../shared/icons/icon-hands';
import styles from './advantages-type-1.module.scss';
import { AdvantagesDTO } from './types';

export const AdvantagesType_1 = async () => {
  const data: AdvantagesDTO = await getLocalData(
    '/src/components/advantages/advantages-type-1/data.json',
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
      </div>
    </section>
  );
};
