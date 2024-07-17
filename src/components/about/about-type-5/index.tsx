import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { getLocalData } from '@/lib/localdata';

import { IconCheck } from '../../../shared/icons/icon-check';
import styles from './about-type-5.module.scss';
import { AboutDTO } from './types';

export const AboutType_5 = async () => {
  const data: AboutDTO = await getLocalData(
    '/src/components/about/about-type-5/data.json',
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
            height={720}
          />
          <div className={styles.root_content}>
            <ul>
              {data.list.map((item) => (
                <li key={item.id}>
                  <div className={styles.item}>
                    <IconCheck />
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
          </div>
        </div>
      </div>
    </section>
  );
};
