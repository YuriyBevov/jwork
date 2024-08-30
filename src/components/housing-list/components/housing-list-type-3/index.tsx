// 'use client';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { HousingListHeader } from '@/shared/components/housing-list-header';
import { SliderHousingList } from '@/shared/components/slider/slider-housing-list/slider-housing-list';

import IconWalk from '../../../../../public/assets/images/housing-list/directions_walk.svg';
import { HousingListDTO } from '../../types';
import common from '../housing-list.module.scss';
import custom from './housing-list-type-3.module.scss';

export const HousingListType_3 = async () => {
  const data: HousingListDTO = await getLocalData(
    'src/components/housing-list/components/housing-list-type-3/data.json',
  );

  return (
    <MainSectionLayout align={data.titleAlign}>
      <div className={clsx(common.root, custom.root)}>
        <HousingListHeader
          title={data.title}
          quantity={data.quantity}
          bgColor={custom.bg_color}
          borderColor={custom.border_color}
          textColor={custom.text_color}
          fillColor={'#5145CD'}
        />
        <ul className={clsx(common.list, custom.list)}>
          {data.content.list.map((item) => (
            <li
              key={item.id}
              className={clsx(common.list_item, custom.list_item)}
            >
              <div className={clsx(common.list_item, custom.list_item)}>
                <SliderHousingList>
                  {item.image.map((img) => (
                    <Image
                      key={img.url}
                      src={img.url}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className={clsx(common.list_item__img)}
                    />
                  ))}
                </SliderHousingList>
              </div>
              <div className={clsx(common.list_item_content)}>
                <div
                  className={clsx(
                    common.list_item_content__option,
                    custom.list_item_content__option,
                  )}
                >
                  Новостройка или вторичка
                </div>
                <span className={clsx('base_title', common.base_title)}>
                  {item.title}
                </span>
                <span className={clsx('base_subtitle', common.base_subtitle)}>
                  {item.description}
                </span>
                <span className={clsx('base_subtitle', common.base_subtitle)}>
                  {item.district}
                </span>
                <ul className={clsx(common.list_item_locations)}>
                  {item.location.map((elem) => (
                    <li
                      key={elem.name}
                      className={clsx(common.list_item_locations__item)}
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
                  <div className={clsx(common.list_item_properties_item)}>
                    <span>Тип квартиры:</span>
                    <span>{item.properties.type}</span>
                  </div>
                  <div className={clsx(common.list_item_properties_item)}>
                    <span>Площадь кухни:</span>
                    <span>{item.properties.kitchensArea}</span>
                  </div>
                  <div className={clsx(common.list_item_properties_item)}>
                    <span>Этаж:</span>
                    <span>{item.properties.level}</span>
                  </div>
                  <div className={clsx(common.list_item_properties_item)}>
                    <span>Общая площадь:</span>
                    <span>{item.properties.totalArea}</span>
                  </div>
                  <div className={clsx(common.list_item_properties_item)}>
                    <span>Площадь:</span>
                    <span>{item.properties.square}</span>
                  </div>
                  <div className={clsx(common.list_item_properties_item)}>
                    <span>Площадь комнат:</span>
                    <span>{item.properties.roomArea}</span>
                  </div>
                </div>
                <span
                  className={clsx(
                    common.list_item_price,
                    custom.list_item_price,
                  )}
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
    </MainSectionLayout>
  );
};
