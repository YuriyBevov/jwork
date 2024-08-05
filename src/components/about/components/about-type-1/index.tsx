import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { MainBtn } from '@/shared/components/main-btn';
import { IconSet } from '@/shared/icons';

import { AboutDTO } from '../../types';
import styles from './about-type-1.module.scss';

export const AboutType_1 = async () => {
  const data: AboutDTO = await getLocalData(
    '/src/components/about/components/about-type-1/data.json',
  );

  return (
    <MainSectionLayout title={data.title} align={'center'}>
      <div className={styles.root}>
        <div className={styles.grid_layout}>
          <div className={styles.grid_layout_item}>
            <ul className={styles.list}>
              {data.content.list.map((item) => (
                <li key={item.id} className={styles.list_item}>
                  <div className={styles.list_item_icon}>
                    <IconSet />
                  </div>
                  <div className={styles.list_item_content}>
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
          <div className={styles.grid_layout_item}>
            <Image
              src={data.content.image.url}
              alt={data.title}
              width={680}
              height={500}
            />
          </div>
        </div>
      </div>
    </MainSectionLayout>
  );
};
