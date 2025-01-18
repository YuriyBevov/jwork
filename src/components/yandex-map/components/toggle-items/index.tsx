import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { Badge } from '@/shared/components/badge';
import { MetrosListAlt } from '@/shared/components/metros-list-alt';
import { SliderResultList } from '@/shared/components/slider';

import styles from './toggle-sidebar.module.scss';
import { MapDto } from './types';

export const ToggleItems = ({ data }: { data: MapDto[] }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (data.length > 0) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [data]);

  const closeAsideHandler = () => {
    setOpen(false);
  };

  return (
    <aside className={clsx(open ? styles.open : '', styles.root)}>
      <div onClick={closeAsideHandler} className={styles.close}>
        X
      </div>

      <div className={styles.items}>
        {data?.map((item: MapDto) => (
          <div className={styles.item} key={item.id}>
            <SliderResultList
              slidesPerViewTabletLg={1}
              slidesPerView={1}
              slidesPerViewXs={1}
              slidesPerViewMobile={1}
              slidesPerViewTablet={1}
            >
              {item.properties.imgs.map((img) => (
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
              {item.properties?.badges && (
                <div className={styles.badges}>
                  {item.properties?.badges.map((item) => (
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
                {item.properties.title}
              </Link>
              <MetrosListAlt metros={item.properties.metros} />
              {item.properties?.chars && (
                <ul className={styles.chars}>
                  {item.properties.chars.map((item) => (
                    <li key={item.id}>
                      <span>{item.title}</span>
                      <span>{item.value}</span>
                    </li>
                  ))}
                </ul>
              )}
              {item.properties.price && (
                <div className={clsx('base_subtitle', styles.price)}>
                  {item.properties.price} руб.
                </div>
              )}
              {item.properties.price_per && (
                <div className={styles.price_per}>
                  {item.properties.price_per} руб./м2
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
