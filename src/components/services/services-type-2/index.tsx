import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainBtn } from '@/shared/ui/main-btn';

import styles from './services-type-2.module.scss';

type Props = {
  data: {
    title: string;
    description?: string;
    list: { id: string; title: string; description: string; image: string }[];
  };
};

export const ServicesTypeTwo: React.FC<Props> = ({ data }) => {
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
                <Image
                  src={item.image}
                  alt={item.title}
                  width={560}
                  height={320}
                />
                <div className={styles.item_content}>
                  <small>Категория</small>
                  <span className={clsx('base_subtitle', styles.base_subtitle)}>
                    {item.title}
                  </span>
                  <p>{item.description}</p>

                  <MainBtn outlined={true} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
