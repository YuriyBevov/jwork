import clsx from 'clsx';
import React from 'react';

import { MainBtn } from '@/shared/ui/main-btn';

import { IconPrinter } from '../../../shared/icons/icon-printer';
import styles from './services-type-6.module.scss';

type Props = {
  data: {
    title: string;
    description?: string;
    list: { id: string; title: string; description: string; image: string }[];
  };
};

export const ServicesTypeSix: React.FC<Props> = ({ data }) => {
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
                  <div className={styles.item_test}>
                    <IconPrinter width={80} height={80} />
                  </div>

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
