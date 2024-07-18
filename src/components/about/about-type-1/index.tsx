import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { IconSet } from '@/shared/ui/icon-set';
import { MainBtn } from '@/shared/ui/main-btn';

import styles from './about-type-1.module.scss';
import { AboutDTO } from './types';

export const AboutType_1 = async () => {
  const data: AboutDTO = await getLocalData(
    '/src/components/about/about-type-1/data.json',
  );

  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={clsx('base_title', styles.base_title)}>{data.title}</h2>
        <div className={styles.root_wrapper}>
          <div className={styles.root_content}>
            <ul>
              {data.list.map((item) => (
                <li key={item.id}>
                  <div className={styles.item}>
                    <IconSet />
                    <span
                      className={clsx('base_subtitle', styles.base_subtitle)}
                    >
                      {item.boldText}
                    </span>
                    <p>{item.simpleText}</p>
                  </div>
                </li>
              ))}
            </ul>
            <MainBtn outlined={true} rounded={'lg'} />
          </div>
          <Image
            src={data.image.url}
            alt={data.title}
            width={680}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};
