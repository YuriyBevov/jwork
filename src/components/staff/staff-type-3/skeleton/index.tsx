import clsx from 'clsx';
import React from 'react';

import { SkeletonElement } from '@/shared/components/skeletons/skeleton-element';

import styles from '../staff-type-3.module.scss';

export const SkeletonStaffTypeThree = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <SkeletonElement
          type="title"
          className={clsx('base_title', styles.base_title)}
          width={500}
        />
        <p>
          <SkeletonElement
            type="text"
            className={clsx('base_text', styles.base_text)}
            width={550}
          />
        </p>
        <div className={styles.root_wrapper}>
          {Array.from(new Array(4)).map((_, index) => (
            <div key={index} className={styles.item}>
              <SkeletonElement type="image" height={288} />
              <div className={styles.item_line}>
                <SkeletonElement
                  type="text"
                  className={styles.item_label}
                  width={300}
                />
                <SkeletonElement type="text" className={styles.item_name} />
                <div className={styles.item_property}>
                  {Array.from(new Array(2)).map((_, index) => (
                    <SkeletonElement
                      key={index}
                      type="text"
                      className={styles.item_property_item}
                      width={200}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}

          <SkeletonElement width={208} height={48} />
        </div>
      </div>
    </section>
  );
};
