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
  // Функция форматирования числа
  const formatPrice = (number: number) => {
    return (number / 1000000).toFixed(2).replace('.', ',');
  };

  // Получаем минимальную цену
  const minPrice = data?.blocks
    ? Math.min(
        ...data.blocks.reduce<number[]>((acc, elem) => {
          return acc.concat(
            elem.apartments.map((apartment) => apartment.price),
          );
        }, []),
      ) ?? Infinity // Устанавливаем значение по умолчанию
    : Infinity; // Если data или blocks не определены

  // Форматируем минимальную цену
  const finalMinPrice =
    minPrice !== Infinity ? minPrice.toLocaleString('ru-RU') : 'Нет данных';

  // Получаем минимальную цену за квадратный метр
  const minMeterPrice = data?.blocks
    ? Math.min(
        ...data.blocks.reduce<number[]>((acc, elem) => {
          return acc.concat(
            elem.apartments.map((apartment) => apartment.meter_price),
          );
        }, []),
      ) ?? Infinity // Устанавливаем значение по умолчанию
    : Infinity; // Если data или blocks не определены

  // Форматируем минимальную цену
  const finalMinMeterPrice =
    minMeterPrice !== Infinity
      ? minMeterPrice.toLocaleString('ru-RU')
      : 'Нет данных';

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
                {item?.apartment_count && (
                  <span>{item?.apartment_count} квартир</span>
                )}
              </div>
              <span className={clsx(styles.base_title)}>{item.name}</span>
              {item?.badge?.text2 !== '' && (
                <div className={clsx(styles.list_item_content_badge_alt)}>
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
              <MetrosList metros={item?.metros ?? []} />
              <div className={clsx(styles.list_item_wrapper)}>
                <ul className={clsx(styles.list_item_properties)}>
                  {item?.apartments.map((elem, index) => (
                    <li
                      key={`${elem.id}-${index}`}
                      className={clsx(styles.list_item_properties_details)}
                    >
                      <span>{elem.room_type_name}:</span>
                      <span>
                        {formatPrice(elem?.base_price)}-
                        {formatPrice(elem?.price)} млн.
                      </span>
                    </li>
                  ))}
                </ul>
                <div className={clsx(styles.list_item_wrapper)}>
                  <span className={clsx(styles.list_item_price)}>
                    от {finalMinPrice} руб
                  </span>
                  <span className={clsx(styles.list_item_price_measure)}>
                    за {finalMinMeterPrice} руб./м2
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
