import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { MainBtn } from '@/shared/components/main-btn';
// import { IconBox } from '@/shared/icons/icon-box';
import { IconBox } from '@/shared/icons/icon-box';

import { AboutDTO } from '../../types';
import styles from './about-type-2.module.scss';

export const AboutType_2 = async () => {
  const data: AboutDTO = await getLocalData(
    '/src/components/about/components/about-type-2/data.json',
  );

  return (
    <MainSectionLayout title={data.title} align={'center'}>
      <div className={styles.root}>
        <div className={styles.grid_layout}>
          <div className={styles.grid_layout_item}>
            <Image
              src={data.content.image.url}
              alt={data.title}
              width={680}
              height={500}
            />
          </div>

          <div className={styles.grid_layout_item}>
            <span className={clsx('base_subtitle', styles.base_subtitle)}>
              {data.content.subtitle}
            </span>

            <p className={clsx('base_text', styles.base_text)}>
              {data.description}
            </p>

            <ul className={styles.list}>
              {data.content.list.map((item) => (
                <li key={item.id} className={styles.list_item}>
                  <div className={styles.list_item_icon}>
                    <IconBox width={36} height={40} />
                  </div>
                  <div className={styles.list_item_content}>
                    <span className={styles.list_item_title}>
                      {item.boldText}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <MainBtn outlined={true} />
          </div>
        </div>
      </div>
    </MainSectionLayout>
  );
};
