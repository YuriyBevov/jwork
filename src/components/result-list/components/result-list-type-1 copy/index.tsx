// 'use client';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { Badge } from '@/shared/components/badge';
import { MetrosList } from '@/shared/components/metros-list';
import { SliderResultList } from '@/shared/components/slider/slider-result-list/slider-result-list';

import { ByDetails } from '../../../../shared/icons/view-mode/by-details';
import { ResultListDTO } from '../../types';
import styles from '../result-list.module.scss';

export const ResultListType_1 = ({ data }: { data: ResultListDTO }) => {
  return (
    <div className={clsx(styles.root)}>
      <ul className={clsx(styles.list)}>
        {data?.blocks.map((item) => (
          <li key={item?.id} className={clsx(styles.list_item)}>
            <div className={clsx(styles.list_item_gallery)}>
              <SliderResultList>
                {item?.block_img.map((img, index) => (
                  <Image
                    key={`картина-${index}`}
                    src={img}
                    alt={`slider-${index}`}
                    width={420}
                    height={410}
                    className={clsx(styles.content_section_gallery_slide)}
                  />
                ))}
              </SliderResultList>
            </div>
            <div className={clsx(styles.list_item_content)}>
              <div className={clsx(styles.list_item_content_headers)}>
                <div className={clsx(styles.list_item_content_badge)}>
                  <Badge
                    text={item?.badge?.text}
                    outlined={true}
                    accent={true}
                  />
                </div>
                {item?.count_apartments && (
                  <span>{item?.count_apartments} квартир</span>
                )}
              </div>
              <span className={clsx(styles.base_title)}>{item.name}</span>
              {item?.badge?.text2 !== '' && (
                <div
                  className={clsx(
                    styles.list_item_content_badge,
                    styles.list_item_content_badge_alt,
                  )}
                >
                  <ByDetails width={24} height={24} fill="#6B7280" />
                  <Badge
                    text={item?.badge?.text2}
                    outlined={true}
                    accent={true}
                  />
                </div>
              )}
              <span className={clsx('base_subtitle', styles.base_subtitle)}>
                {item?.address}
              </span>
              <span className={clsx('base_subtitle', styles.base_subtitle)}>
                {item?.region_name}
              </span>
              <MetrosList metros={data?.metros ?? []} />
              {!item.properties_alt ? (
                <ul className={clsx(styles.list_item_properties)}>
                  {item?.apartments.map((elem, index) => (
                    <li
                      key={`properties-${index}`}
                      className={clsx(styles.list_item_properties_content)}
                    >
                      {Object.entries(elem).map(([key, value]) => (
                        <div
                          key={key}
                          className={clsx(
                            styles.list_item_properties_content_details,
                          )}
                        >
                          <span>{key}:</span>
                          <span>{value}</span>
                        </div>
                      ))}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className={clsx(styles.list_item_properties_alt)}>
                  {item.properties_alt?.map((elem, index) => (
                    <div
                      key={`${elem.title}-${index}`}
                      className={clsx(styles.list_item_properties_alt_details)}
                    >
                      <span
                        className={clsx(
                          styles.list_item_properties_alt_details_title,
                        )}
                      >
                        {elem?.title}
                      </span>
                      <span
                        className={clsx(
                          styles.list_item_properties_alt_details_desc,
                        )}
                      >
                        {elem?.description}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              {item.price_alt ? (
                <span className={clsx(styles.list_item_price)}>
                  от {item.price_alt} руб
                </span>
              ) : (
                <span className={clsx(styles.list_item_price)}>
                  {item.price} руб
                </span>
              )}
              {item.priceMeasure_alt ? (
                <span className={clsx(styles.list_item_price_measure)}>
                  за {item.priceMeasure_alt} руб./м2
                </span>
              ) : (
                <span className={clsx(styles.list_item_price_measure)}>
                  {item.priceMeasure} руб./м2
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
