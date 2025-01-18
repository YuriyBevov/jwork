import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { Badge } from '@/shared/components/badge';
import { MetrosListAlt } from '@/shared/components/metros-list-alt';
import { SliderResultList } from '@/shared/components/slider';

import styles from './toggle-sidebar.module.scss';
import { MapDataItem } from './types';

export const ToggleItems = ({ data }: { data: MapDataItem[] }) => {
  const [open, setOpen] = useState(false);
  const openAsideHandler = () => {
    setOpen(true);
  };

  return (
    open === false ||
    (data.length > 0 && (
      <aside className={clsx(open ? styles.open : '', styles.root)}>
        <div onClick={openAsideHandler} className={styles.close}>
          X
        </div>

        <div className={styles.items}>
          {data?.map((item: MapDataItem) => (
            <div className={styles.item} key={item.data.id}>
              <SliderResultList
                slidesPerViewTabletLg={1}
                slidesPerView={1}
                slidesPerViewXs={1}
                slidesPerViewMobile={1}
                slidesPerViewTablet={1}
              >
                {item.data.imgs.map((img) => (
                  <div key={img.id}>
                    <Image
                      src={'/assets/images/result-list/result-list_img_2.png'}
                      alt={img.alt}
                      width={333}
                      height={333}
                      style={{ height: 'auto' }}
                    />
                  </div>
                ))}
              </SliderResultList>
              <div className={styles.content}>
                {item.data?.badges && (
                  <div className={styles.badges}>
                    {item.data?.badges.map((item) => (
                      <React.Fragment key={item.id}>
                        <Badge
                          text={item.title}
                          outlined={false}
                          accent={false}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                )}
                <Link href="#" className={clsx('base_subtitle', styles.title)}>
                  {item.data.title}
                </Link>
                <MetrosListAlt metros={item.data.metros} />
                {item.data?.chars && (
                  <ul className={styles.chars}>
                    {item.data.chars.map((item) => (
                      <li key={item.id}>
                        <span>{item.title}</span>
                        <span>{item.value}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.data.price && (
                  <div className={clsx('base_subtitle', styles.price)}>
                    {item.data.price} руб.
                  </div>
                )}
                {item.data.price_per && (
                  <div className={styles.price_per}>
                    {item.data.price_per} руб./м2
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </aside>
    ))
  );
};
