import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { MainBtn } from '@/shared/components/main-btn';

import { AboutDTO } from '../../types';
import styles from './about-type-3.module.scss';

export const AboutType_3 = async () => {
  const data: AboutDTO = await getLocalData(
    '/src/components/about/components/about-type-3/data.json',
  );
  return (
    <MainSectionLayout title={data.title} align={'center'}>
      <div className={styles.root}>
        <div className={styles.grid_layout}>
          <div className={styles.grid_layout_item}>
            <h2 className={clsx('base_title', styles.base_title)}>
              {data.content.title}
            </h2>
            <p className={clsx('base_text', styles.base_text)}>
              {data.content.description}
            </p>
            <MainBtn outlined={true} />
          </div>

          <div className={styles.grid_layout_item}>
            <Image
              src={data.content.image.url}
              alt={data.title}
              width={720}
              height={700}
            />
          </div>
        </div>
      </div>
    </MainSectionLayout>
    // <section className={styles.root}>
    //   <div className="container">
    //     <div className={styles.root_wrapper}>
    //       <div className={styles.root_content}>
    //         <h2 className={clsx('base_title', styles.base_title)}>
    //           {data.title}
    //         </h2>
    //         <p>{data.description}</p>
    //         <MainBtn outlined={true} />
    //       </div>
    //       <Image
    //         src={data.image.url}
    //         alt={data.title}
    //         width={720}
    //         height={700}
    //       />
    //     </div>
    //   </div>
    // </section>
  );
};
