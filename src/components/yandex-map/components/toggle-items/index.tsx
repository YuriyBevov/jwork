import Image from 'next/image';
import React from 'react';

import { SliderResultList } from '@/shared/components/slider';

import styles from './toggle-sidebar.module.scss';
import { MapDataItem } from './types';

export const ToggleItems = ({ data }: { data: MapDataItem[] }) => {
  return (
    <aside className={styles.root}>
      <div className={styles.items}>
        {data?.map((item: MapDataItem) => (
          <React.Fragment key={item.data.id}>
            <SliderResultList
              slidesPerViewTabletLg={1}
              slidesPerView={1}
              slidesPerViewXs={1}
              slidesPerViewMobile={1}
              slidesPerViewTablet={1}
            >
              {item.data.imgs.map((img) => (
                <div key={img.id} className={styles.item}>
                  <Image
                    src={'/assets/images/result-list/result-list_img_2.png'}
                    alt={img.alt}
                    width={333}
                    height={333}
                  />
                </div>
              ))}
            </SliderResultList>
            <div className={styles.item}>
              <div className={styles.itemTitle}>{item.data.title}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </aside>
  );
};
