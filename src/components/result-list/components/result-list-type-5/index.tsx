// 'use client';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { Badge } from '@/shared/components/badge';
import { SliderResultList } from '@/shared/components/slider/slider-result-list/slider-result-list';

import IconWalk from '../../../../../public/assets/images/result-list/directions_walk.svg';
import { ByDetails } from '../../../../shared/icons/view-mode/by-details';
import { ResultListDTO } from '../../types';
import common from '../result-list.module.scss';
import custom from './result-list-type-5.module.scss';

export const ResultListType_5 = ({ data }: { data: ResultListDTO }) => {
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
                {item.image.map((img, index) => (
                  <Image
                    key={`${img.url}-${index}`}
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
              <div className={clsx(common.list_item_content_headers)}>
                <div className={clsx(common.list_item_content_badge)}>
                  <Badge text={item.badge.text} outlined={true} accent={true} />
                </div>
                {item.quantity && <span>{item.quantity} квартир</span>}
              </div>
              <span className={clsx('base_title', common.base_title)}>
                {item.title}
              </span>
              {item.badge.text_2 !== '' && (
                <div
                  className={clsx(
                    common.list_item_content_badge,
                    common.list_item_content_badge_alt,
                  )}
                >
                  <ByDetails width={24} height={24} fill="#6B7280" />
                  <Badge
                    text={item.badge.text_2}
                    outlined={true}
                    accent={true}
                  />
                </div>
              )}
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
                  {item.properties_alt?.map((elem, index) => (
                    <div
                      key={`${elem.title}-${index}`}
                      className={clsx(common.list_item_properties_alt_details)}
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
                </div>
              )}
              {item.price_alt ? (
                <span
                  className={clsx(
                    common.list_item_price,
                    custom.list_item_price,
                  )}
                >
                  от {item.price_alt} руб
                </span>
              ) : (
                <span
                  className={clsx(
                    common.list_item_price,
                    custom.list_item_price,
                  )}
                >
                  {item.price} руб
                </span>
              )}
              {item.priceMeasure_alt ? (
                <span className={clsx(common.list_item_price_measure)}>
                  за {item.priceMeasure_alt} руб./м2
                </span>
              ) : (
                <span className={clsx(common.list_item_price_measure)}>
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
