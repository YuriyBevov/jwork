import clsx from 'clsx';
import React from 'react';

import { IconCheck } from '@/shared/icons/icon-check';

import styles from './advantages-type-7.module.scss';

type Props = {
  data: {
    title: string;
    description?: string;
    list: { id: string; title: string; description: string }[];
  };
};

export const AdvantagesTypeSeven: React.FC<Props> = ({ data }) => {
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
              <IconCheck />
              <span className={clsx('base_subtitle', styles.base_subtitle)}>
                {item.title}
              </span>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
