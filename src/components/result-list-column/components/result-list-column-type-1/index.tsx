// 'use client';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { Badge } from '@/shared/components/badge';
import { MetrosListAlt } from '@/shared/components/metros-list-alt';
import { SliderResultList } from '@/shared/components/slider/slider-result-list/slider-result-list';

import { ByDetails } from '../../../../shared/icons/view-mode/by-details';
import { ResultListDTO } from '../../types';
import styles from '../result-list-column.module.scss';

type Props = {
  data: ResultListDTO;
  visibleCounts: Record<number, number>; // Объект, где ключ — это id элемента, а значение — количество видимых элементов
  handleShowMore: (id: number) => void; // Функция, которая принимает id элемента для показа дополнительных данных
};

export const ResultListColumnType_1: React.FC<Props> = ({
  data,
  visibleCounts,
  handleShowMore,
}) => {
  // Функция форматирования числа
  const formatPrice = (number: number) => {
    return (number / 1000000).toFixed(2).replace('.', ',');
  };

  const minPrice =
    data && data.blocks
      ? (Math.min(
          ...data.blocks.reduce<number[]>((acc, elem) => {
            return acc.concat(
              elem.apartments.map((apartment) => apartment.price),
            );
          }, []),
        ) ?? Infinity)
      : Infinity;

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
          const visibleCount = visibleCounts[item.id] || 2;
          return (
            <li key={item.id} className={clsx(styles.list_item)}>
              <div className={clsx(styles.list_item_gallery)}>
                <SliderResultList
                  slidesPerView={1}
                  slidesPerViewXs={1}
                  slidesPerViewMobile={1}
                  slidesPerViewTablet={1}
                  slidesPerViewTabletLg={1}
                  spaceBetween={24}
                >
                  {item?.block_img.map((img, index) => (
                    <Image
                      key={`картина-${index}`}
                      src={img}
                      alt={`slider-${index}`}
                      width={336}
                      height={334}
                      className={clsx(styles.content_section_gallery_slide)}
                    />
                  ))}
                </SliderResultList>
              </div>
              <div className={clsx(styles.list_item_content)}>
                <div className={clsx(styles.list_item_content_headers)}>
                  {data?.type && (
                    <div className={clsx(styles.list_item_content_badge)}>
                      <Badge
                        text={
                          data?.type === 'newbuildings' ? 'Жилые комплексы' : ''
                        }
                        outlined={true}
                        accent={true}
                      />
                    </div>
                  )}
                  {item?.apartments && (
                    <span>{item?.apartments.length} квартир</span>
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
                <MetrosListAlt metros={item?.metros} />
                <ul className={clsx(styles.list_item_properties_alt)}>
                  {item?.apartments
                    ?.slice(0, visibleCount)
                    .map((elem, index) => (
                      <li
                        key={`${elem.room_type_name}-${index}`}
                        className={clsx(
                          styles.list_item_properties_alt_details,
                        )}
                      >
                        <span>{elem.room_type_name}:</span>
                        <span>
                          {formatPrice(elem?.base_price)}-
                          {formatPrice(elem?.price)} млн.
                        </span>
                      </li>
                    ))}
                </ul>
                {item?.apartments && visibleCount < item.apartments.length && (
                  <button
                    className={clsx(styles.list_item_show_more)}
                    onClick={() => handleShowMore(item.id)}
                  >
                    Показать ещё...
                  </button>
                )}

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
