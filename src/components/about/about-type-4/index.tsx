import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { MainBtn } from '@/shared/components/main-btn';

import styles from './about-type-4.module.scss';
import { AboutDTO } from './types';

// type Props = {
//   data: {
//     title: string;
//     subtitle?: string;
//     description?: string;
//     image: string;
//     list: {
//       id: string;
//       label?: string;
//       boldText?: string;
//       simpleText?: string;
//       image?: string;
//     }[];
//   };
// };

export const AboutType_4 = async () => {
  const data: AboutDTO = await getLocalData(
    '/src/components/about/about-type-4/data.json',
  );
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={clsx('base_title', styles.base_title)}>{data.title}</h2>

        <div className={styles.root_wrapper}>
          <div className={styles.root_content}>
            <p>{data.description}</p>
            <ul>
              {data.list.map((item) => (
                <li key={item.id}>
                  <div className={styles.item}>
                    <strong className={styles.item_label}>{item.label}</strong>
                    <p>{item.simpleText}</p>
                  </div>
                </li>
              ))}
            </ul>
            <MainBtn rounded={'lg'} />
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
