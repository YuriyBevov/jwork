import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainBtn } from '@/shared/ui/main-btn';

import styles from './about-type-6.module.scss';

type Props = {
  data: {
    title: string;
    subtitle?: string;
    description?: string;
    image: string;
    list: {
      id: string;
      boldText?: string;
      simpleText?: string;
      image?: string;
    }[];
  };
};

export const AboutTypeSix: React.FC<Props> = ({ data }) => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={clsx('base_title', styles.base_title)}>{data.title}</h2>
        <div className={styles.root_wrapper}>
          <Image src={data.image} alt={data.title} width={800} height={640} />
          <div className={styles.root_content}>
            <small>История нашей компании</small>
            <span className={clsx('base_subtitle', styles.base_subtitle)}>
              {data.title}
            </span>
            {data.description && (
              <p className={clsx('base_text', styles.base_text)}>
                {data.description}
              </p>
            )}

            <ul>
              {data.list.map((item) => (
                <li key={item.id}>
                  <div className={styles.item}>
                    <div className={styles.item_content}>
                      <p>{item.simpleText}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <MainBtn rounded={'xs'} />
          </div>
        </div>
      </div>
    </section>
  );
};
