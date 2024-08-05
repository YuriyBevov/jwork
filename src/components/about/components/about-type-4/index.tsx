import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { MainBtn } from '@/shared/components/main-btn';

import { AboutDTO } from '../../types';
import styles from './about-type-4.module.scss';

export const AboutType_4 = async () => {
  const data: AboutDTO = await getLocalData(
    '/src/components/about/components/about-type-4/data.json',
  );
  return (
    <MainSectionLayout title={data.title} align={'center'}>
      <div className={styles.root}>
        <div className={styles.grid_layout}>
          <div className={styles.grid_layout_item}>
            <p className={clsx('base_text', styles.base_text)}>
              {data.content.description}
            </p>

            <ul className={styles.list}>
              {data.content.list.map((item) => (
                <li key={item.id} className={styles.list_item}>
                  <div className={styles.list_item_content}>
                    <strong className={styles.list_item_label}>
                      {item.label}
                    </strong>
                    <p className={clsx('base_text', styles.base_text)}>
                      {item.simpleText}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <MainBtn rounded={'lg'} />
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
    // <section className={styles.root}>
    //   <div className="container">
    //     <h2 className={clsx('base_title', styles.base_title)}>{data.title}</h2>

    //     <div className={styles.root_wrapper}>
    //       <div className={styles.root_content}>
    //         <p>{data.description}</p>
    //         <ul>
    //           {data.content.list.map((item) => (
    //             <li key={item.id}>
    //               <div className={styles.item}>
    //                 <strong className={styles.item_label}>{item.label}</strong>
    //                 <p>{item.simpleText}</p>
    //               </div>
    //             </li>
    //           ))}
    //         </ul>
    //         <MainBtn rounded={'lg'} />
    //       </div>
    //       <Image
    //         src={data.content.image.url}
    //         alt={data.title}
    //         width={680}
    //         height={500}
    //       />
    //     </div>
    //   </div>
    // </section>
  );
};
