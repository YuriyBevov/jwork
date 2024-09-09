// 'use client';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { Badge } from '@/shared/components/badge';
import { SliderResultList } from '@/shared/components/slider/slider-result-list/slider-result-list';

import IconWalk from '../../../../../public/assets/images/result-list/directions_walk.svg';
import { ResultListColumnDTO } from '../../types';
import common from '../result-list-column.module.scss';
import custom from './result-list-type-column-3.module.scss';

export const ResultListTypeColumn_3 = ({
  data,
}: {
  data: ResultListColumnDTO;
}) => {
  return (
    <div className={clsx(common.root, custom.root)}>
      <ul className={clsx(common.list, custom.list)}>
        {data.content.list.map((item) => (
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
                {item.location.map((elem) => (
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
              </ul>
              <div className={clsx(common.list_item_properties)}>
                <div className={clsx(common.list_item_properties_details)}>
                  <span>Тип квартиры:</span>
                  <span>{item.properties.type}</span>
                </div>
                <div className={clsx(common.list_item_properties_details)}>
                  <span>Площадь кухни:</span>
                  <span>{item.properties.kitchensArea}</span>
                </div>
                <div className={clsx(common.list_item_properties_details)}>
                  <span>Этаж:</span>
                  <span>{item.properties.level}</span>
                </div>
                <div className={clsx(common.list_item_properties_details)}>
                  <span>Общая площадь:</span>
                  <span>{item.properties.totalArea}</span>
                </div>
                <div className={clsx(common.list_item_properties_details)}>
                  <span>Площадь:</span>
                  <span>{item.properties.square}</span>
                </div>
                <div className={clsx(common.list_item_properties_details)}>
                  <span>Площадь комнат:</span>
                  <span>{item.properties.roomArea}</span>
                </div>
              </div>
              <span
                className={clsx(common.list_item_price, custom.list_item_price)}
              >
                {item.price} руб
              </span>
              <span className={clsx(common.list_item_priceMeasure)}>
                {item.priceMeasure} руб./м2
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
