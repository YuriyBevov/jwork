// 'use client';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { Badge } from '@/shared/components/badge';
import { SliderResultList } from '@/shared/components/slider/slider-result-list/slider-result-list';

import IconWalk from '../../../../../public/assets/images/result-list/directions_walk.svg';
import { ResultListDTO } from '../../types';
import common from '../result-list-column.module.scss';
import custom from './result-list-type-column-1.module.scss';

type Props = {
  data: ResultListDTO;
  visibleCounts: Record<number, number>; // Объект, где ключ — это id элемента, а значение — количество видимых элементов
  handleShowMore: (id: number) => void; // Функция, которая принимает id элемента для показа дополнительных данных
  visibleCountsLocations: Record<number, number>;
  handleShowMoreLocation: (id: number) => void;
};

export const ResultListTypeColumn_1: React.FC<Props> = ({
  data,
  visibleCounts,
  handleShowMore,
  visibleCountsLocations,
  handleShowMoreLocation,
}) => {
  return (
    <div className={clsx(common.root, custom.root)}>
      <ul className={clsx(common.list, custom.list)}>
        {data.content.list.map((item) => {
          const visibleCount = visibleCounts[item.id] || 2;
          const visibleCountsLocation = visibleCountsLocations[item.id] || 1;
          return (
            <li
              key={item.id}
              className={clsx(common.list_item, custom.list_item)}
            >
              <div className={clsx(common.list_item_gallery)}>
                <SliderResultList>
                  {item.image.map((img) => (
                    <Image
                      key={img.url}
                      src={img.url}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className={clsx(common.list_item_gallery_slide)}
                    />
                  ))}
                </SliderResultList>
              </div>
              <div className={clsx(common.list_item_content)}>
                <div className={clsx(common.list_item_content_badge)}>
                  <Badge text={item.badge.text} outlined={true} accent={true} />
                </div>
                <span className={clsx('base_title', common.base_title)}>
                  {item.title}
                </span>
                <span className={clsx('base_subtitle', common.base_subtitle)}>
                  {item.description}
                </span>
                <ul className={clsx(common.list_item_locations)}>
                  {item.location
                    .slice(0, visibleCountsLocation) // Показываем только два элемента по умолчанию
                    .map((elem) => (
                      <li
                        key={elem.name}
                        className={clsx(common.list_item_locations_item)}
                      >
                        <Image
                          src={elem.image.url}
                          alt={elem.image.alt}
                          width={elem.image.width}
                          height={elem.image.height}
                        />
                        <span className={clsx('base_text', common.base_text)}>
                          {elem.name}
                        </span>
                        <Image
                          src={IconWalk}
                          alt={elem.image.alt}
                          width={16}
                          height={16}
                        />
                        <span className={clsx('base_text', common.base_text)}>
                          {elem.time} мин
                        </span>
                      </li>
                    ))}
                  {item.location.length > visibleCountsLocation && (
                    <button
                      className={clsx(common.list_item_show_more)}
                      onClick={() => handleShowMoreLocation(item.id)} // При клике передаем id для конкретного элемента
                    >
                      Показать ещё...
                    </button>
                  )}
                </ul>
                {!item.properties_alt ? (
                  <ul className={clsx(common.list_item_properties)}>
                    {item.properties.map((elem, index) => (
                      <li
                        key={`properties-${index}`}
                        className={clsx(common.list_item_properties_content)}
                      >
                        {Object.entries(elem).map(([key, value]) => (
                          <div
                            key={key}
                            className={clsx(
                              common.list_item_properties_content_details,
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
                  <div className={clsx(common.list_item_properties_alt)}>
                    {item.properties_alt
                      ?.slice(0, visibleCount)
                      .map((elem, index) => (
                        <div
                          key={`${elem.title}-${index}`}
                          className={clsx(
                            common.list_item_properties_alt_details,
                          )}
                        >
                          <span
                            className={clsx(
                              common.list_item_properties_alt_details_title,
                            )}
                          >
                            {elem?.title}
                          </span>
                          <span
                            className={clsx(
                              common.list_item_properties_alt_details_desc,
                            )}
                          >
                            {elem?.description}
                          </span>
                        </div>
                      ))}
                    {item.properties_alt &&
                      visibleCount < item.properties_alt.length && (
                        <button
                          className={clsx(common.list_item_show_more)}
                          onClick={() => handleShowMore(item.id)}
                        >
                          Показать ещё...
                        </button>
                      )}
                  </div>
                )}
                <span
                  className={clsx(
                    common.list_item_price,
                    custom.list_item_price,
                  )}
                >
                  {item.price} руб
                </span>
                <span className={clsx(common.list_item_price_measure)}>
                  {item.priceMeasure} руб./м2
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
