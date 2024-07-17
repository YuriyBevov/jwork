import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { getLocalData } from '@/lib/localdata';

import styles from './about-type-7.module.scss';
import { AboutDTO } from './types';

export const AboutType_7 = async () => {
  const data: AboutDTO = await getLocalData(
    '/src/components/about/about-type-7/data.json',
  );
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={clsx('base_title', styles.base_title)}>{data.title}</h2>

        <p className={clsx('base_text', styles.base_text)}>
          {data.description}
        </p>

        <div className={styles.root_wrapper}>
          {data.list.map((item) => (
            <Image
              key={item.id}
              src={item.image.url}
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
