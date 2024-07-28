import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { MainBtn } from '@/shared/components/main-btn';

import styles from './about-type-3.module.scss';
import { AboutDTO } from './types';

export const AboutType_3 = async () => {
  const data: AboutDTO = await getLocalData(
    '/src/components/about/about-type-3/data.json',
  );
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.root_wrapper}>
          <div className={styles.root_content}>
            <h2 className={clsx('base_title', styles.base_title)}>
              {data.title}
            </h2>
            <p>{data.description}</p>
            <MainBtn outlined={true} />
          </div>
          <Image
            src={data.image.url}
            alt={data.title}
            width={720}
            height={700}
          />
        </div>
      </div>
    </section>
  );
};
