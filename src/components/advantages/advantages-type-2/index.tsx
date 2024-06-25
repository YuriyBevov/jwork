import clsx from 'clsx';
import React from 'react';

import { IconHands } from '../../../shared/icons/icon-hands';
import styles from './advantages-type-2.module.scss';

type Props = {
  data: {
    title: string;
    description?: string;
    list: { id: string; title: string; description: string }[];
  };
};

export const AdvantagesTypeTwo: React.FC<Props> = ({ data }) => {
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
