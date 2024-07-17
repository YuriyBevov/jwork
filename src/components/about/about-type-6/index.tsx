import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { MainBtn } from '@/shared/ui/main-btn';

import styles from './about-type-6.module.scss';
import { AboutDTO } from './types';

export const AboutType_6 = async () => {
  const data: AboutDTO = await getLocalData(
    '/src/components/about/about-type-6/data.json',
  );

  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={clsx('base_title', styles.base_title)}>{data.title}</h2>
        <div className={styles.root_wrapper}>
          <Image
            src={data.image.url}
            alt={data.title}
            width={800}
            height={640}
          />
          <div className={styles.root_content}>
            <small>{data.label}</small>
            <span className={clsx('base_subtitle', styles.base_subtitle)}>
              {data.subtitle}
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
