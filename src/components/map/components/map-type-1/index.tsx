// 'use client';
import clsx from 'clsx';
import Image from 'next/image';

// import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { Badge } from '@/shared/components/badge';
import { MainLink } from '@/shared/components/main-link';
import { MetrosListAlt } from '@/shared/components/metros-list-alt';
import { SliderResultList } from '@/shared/components/slider/slider-result-list/slider-result-list';
import { YMap } from '@/shared/components/yMap';
import { IconFilter } from '@/shared/icons/icon-filter';

import { MapDTO } from '../../types';
import styles from '../map.module.scss';

export const MapType_1 = async () => {
  const data: MapDTO = await getLocalData(
    'src/components/map/components/map-type-1/data.json',
  );

  return (
    <section>
      <div className="container-fluid">
        <div className={clsx(styles.root)}>
          <div className={styles.sidebar}>
            <div className={styles.sidebar_header}>
              <button className={styles.sidebar_opener}>
                <IconFilter width={32} height={32} />
                <span>5</span>
              </button>
              <span className={styles.sidebar_title}>Фильтр</span>
              <MainLink
                text="Списком"
                icon={true}
                width={16}
                height={16}
                path="M2.83301 7C2.27967 7 1.83301 7.44667 1.83301 8C1.83301 8.55333 2.27967 9 2.83301 9C3.38634 9 3.83301 8.55333 3.83301 8C3.83301 7.44667 3.38634 7 2.83301 7ZM2.83301 3C2.27967 3 1.83301 3.44667 1.83301 4C1.83301 4.55333 2.27967 5 2.83301 5C3.38634 5 3.83301 4.55333 3.83301 4C3.83301 3.44667 3.38634 3 2.83301 3ZM2.83301 11C2.27967 11 1.83301 11.4533 1.83301 12C1.83301 12.5467 2.28634 13 2.83301 13C3.37967 13 3.83301 12.5467 3.83301 12C3.83301 11.4533 3.38634 11 2.83301 11ZM4.83301 12.6667H14.1663V11.3333H4.83301V12.6667ZM4.83301 8.66667H14.1663V7.33333H4.83301V8.66667ZM4.83301 3.33333V4.66667H14.1663V3.33333H4.83301Z"
                fill="var(--primary)"
                outlined={true}
              />
            </div>
            <div className={styles.sidebar_content}>
              <div className={clsx(styles.sidebar_content_gallery)}>
                <SliderResultList>
                  {data?.data?.block?.block_img.map((img, index) => (
                    <Image
                      key={`картина-${index}`}
                      src={img}
                      alt={`slider-${index}`}
                      width={420}
                      height={410}
                      className={clsx(styles.sidebar_content_gallery_slide)}
                    />
                  ))}
                </SliderResultList>
              </div>
              <div className={clsx(styles.sidebar_content_info)}>
                <div className={clsx(styles.sidebar_content_info_headers)}>
                  {data?.data?.type === 'newbuildings' && (
                    <div className={clsx(styles.sidebar_content_info_badge)}>
                      <Badge
                        text={
                          data?.data?.type === 'newbuildings'
                            ? 'Новостройка'
                            : ''
                        }
                        outlined={true}
                        accent={true}
                      />
                    </div>
                  )}
                </div>
                <span className={clsx(styles.base_title)}>
                  {data?.data?.block?.apartment?.room_type_name},{' '}
                  {data?.data?.block?.name}
                </span>
                <span className={clsx('base_subtitle', styles.base_subtitle)}>
                  {data?.data?.block?.address}
                </span>
                <span className={clsx('base_subtitle', styles.base_subtitle)}>
                  {data?.data?.block?.region_name}
                </span>
                <MetrosListAlt metros={data?.data?.block?.metros} />
                <ul className={clsx(styles.sidebar_content_apart)}>
                  <li className={clsx(styles.sidebar_content_apart_details)}>
                    <span>Тип квартиры:</span>
                    <span>{data?.data?.block?.apartment?.room_type_name}</span>
                  </li>
                  <li className={clsx(styles.sidebar_content_apart_details)}>
                    <span>Этаж:</span>
                    <span>{data?.data?.block?.apartment?.flat_floor}</span>
                  </li>
                  <li className={clsx(styles.sidebar_content_apart_details)}>
                    <span>Площадь:</span>
                    <span>{data?.data?.block?.apartment?.space_total}</span>
                  </li>
                  <li className={clsx(styles.sidebar_content_apart_details)}>
                    <span>Площадь кухни:</span>
                    <span>{data?.data?.block?.apartment?.space_kitchen}</span>
                  </li>
                  <li className={clsx(styles?.sidebar_content_apart_details)}>
                    <span>Общая площадь:</span>
                    <span>{data?.data?.block?.apartment?.space_total}</span>
                  </li>
                  <li className={clsx(styles.sidebar_content_apart_details)}>
                    <span>Площадь комнат:</span>
                    <span>{data?.data?.block?.apartment?.space_room}</span>
                  </li>
                </ul>

                <div className={clsx(styles.sidebar_content_wrapper)}>
                  <span className={clsx(styles.sidebar_content_price)}>
                    от {data?.data?.block?.apartment?.base_price} руб
                  </span>
                  <span className={clsx(styles.sidebar_content_price_measure)}>
                    за {data?.data?.block?.apartment?.meter_price} руб./м2
                  </span>
                </div>
              </div>
            </div>
          </div>
          <YMap />
        </div>
      </div>
    </section>
  );
};
