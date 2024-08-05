import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';

import { AdvantagesDTO } from '../../types';
import styles from './advantages-type-6.module.scss';

export const AdvantagesType_6 = async () => {
  const data: AdvantagesDTO = await getLocalData(
    '/src/components/advantages/components/advantages-type-6/data.json',
  );
  return (
    <MainSectionLayout>
      <div className={styles.root}>
        <div className={styles.root_content}>
          <div className={styles.root_content_side}>
            <h2 className={clsx('base_title', styles.base_title)}>
              {data.title}
            </h2>

            <ul className={styles.list}>
              {data.content.list.map((item) => (
                <li key={item.id} className={styles.list_item}>
                  <span className={clsx('base_subtitle', styles.base_subtitle)}>
                    {item.label}
                  </span>
                  <div className={styles.list_item_content}>
                    <p className={clsx('base_text', styles.base_text)}>
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.root_content_side}>
            <Image
              src={data.content.image?.url ?? ''}
              alt={data.content.image?.alt ?? ''}
              width={data.content.image?.width}
              height={data.content.image?.height}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </MainSectionLayout>
  );
};
