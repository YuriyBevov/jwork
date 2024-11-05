// 'use client';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { Badge } from '@/shared/components/badge';
import { MetrosListAlt } from '@/shared/components/metros-list-alt';
import { SliderResultList } from '@/shared/components/slider/slider-result-list/slider-result-list';

import { ResultListDTO } from '../../types';
import styles from '../result-list-column-item.module.scss';

type Props = {
  data: ResultListDTO;
  visibleCounts: Record<number, number>; // Объект, где ключ — это id элемента, а значение — количество видимых элементов
  handleShowMore: (id: number) => void; // Функция, которая принимает id элемента для показа дополнительных данных
  visibleCountsMetros: Record<number, number>;
  handleShowMoreMetro: (id: number) => void;
};

export const ResultListColumnItemType_1: React.FC<Props> = ({ data }) => {
  // Получаем минимальную цену
  const minPrice = data?.blocks
    ? (Math.min(
        ...data.blocks.reduce<number[]>((acc, elem) => {
          return acc.concat(
            elem.apartments.map((apartment) => apartment.price),
          );
        }, []),
      ) ?? Infinity) // Устанавливаем значение по умолчанию
    : Infinity; // Если data или blocks не определены

  // Форматируем минимальную цену
  const finalMinPrice =
    minPrice !== Infinity ? minPrice.toLocaleString('ru-RU') : 'Нет данных';

  // Получаем минимальную цену за квадратный метр
  const minMeterPrice = data?.blocks
    ? (Math.min(
        ...data.blocks.reduce<number[]>((acc, elem) => {
          return acc.concat(
            elem.apartments.map((apartment) => apartment.meter_price),
          );
        }, []),
      ) ?? Infinity) // Устанавливаем значение по умолчанию
    : Infinity; // Если data или blocks не определены

  // Форматируем минимальную цену
  const finalMinMeterPrice =
    minMeterPrice !== Infinity
      ? minMeterPrice.toLocaleString('ru-RU')
      : 'Нет данных';

  return (
    <div className={clsx(styles.root)}>
      <ul className={clsx(styles.list)}>
        {data?.blocks.map((item) => {
          return (
            <li key={item.id} className={clsx(styles.list_item)}>
              <div className={clsx(styles.list_item_gallery)}>
                <SliderResultList>
                  {item?.block_img.map((img, index) => (
                    <Image
                      key={`картина-${index}`}
                      src={img}
                      alt={`slider-${index}`}
                      width={600}
                      height={410}
                      className={clsx(styles.content_section_gallery_slide)}
                    />
                  ))}
                </SliderResultList>
              </div>
              <div className={clsx(styles.list_item_content)}>
                <div className={clsx(styles.list_item_content_headers)}>
                  {data?.type === 'newbuildings' && (
                    <div className={clsx(styles.list_item_content_badge)}>
                      <Badge
                        text={
                          data?.type === 'newbuildings' ? 'Новостройка' : ''
                        }
                        outlined={true}
                        accent={true}
                      />
                    </div>
                  )}
                </div>
                <span className={clsx(styles.base_title)}>
                  {' '}
                  {item?.apartment?.room_type_name}, {item?.name}
                </span>
                <span className={clsx('base_subtitle', styles.base_subtitle)}>
                  {item?.address}
                </span>
                <span className={clsx('base_subtitle', styles.base_subtitle)}>
                  {item?.region_name}
                </span>
                <MetrosListAlt metros={item?.metros} />
                <ul className={clsx(styles.list_item_apart)}>
                  <li className={clsx(styles.list_item_apart_details)}>
                    <span>Тип квартиры:</span>
                    <span>{item?.apartment?.room_type_name}</span>
                  </li>
                  <li className={clsx(styles.list_item_apart_details)}>
                    <span>Этаж:</span>
                    <span>{item?.apartment?.flat_floor}</span>
                  </li>
                  <li className={clsx(styles.list_item_apart_details)}>
                    <span>Площадь:</span>
                    <span>{item?.apartment?.space_total}</span>
                  </li>
                  <li className={clsx(styles.list_item_apart_details)}>
                    <span>Площадь кухни:</span>
                    <span>{item?.apartment?.space_kitchen}</span>
                  </li>
                  <li className={clsx(styles?.list_item_apart_details)}>
                    <span>Общая площадь:</span>
                    <span>{item?.apartment?.space_total}</span>
                  </li>
                  <li className={clsx(styles.list_item_apart_details)}>
                    <span>Площадь комнат:</span>
                    <span>{item?.apartment?.space_room}</span>
                  </li>
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
            </li>
          );
        })}
      </ul>
    </div>
  );
};
