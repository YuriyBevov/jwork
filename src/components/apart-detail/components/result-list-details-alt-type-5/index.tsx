// 'use client';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { Badge } from '@/shared/components/badge';
import { SliderResultList } from '@/shared/components/slider/slider-result-list/slider-result-list';

import IconWalk from '../../../../../public/assets/images/result-list/directions_walk.svg';
import { ByDetails } from '../../../../shared/icons/view-mode/by-details';
import { ResultListDetalilsAltDTO } from '../../types';
import common from '../item-detail-type-1-alt.module.scss';
import custom from './item-detail-type-1-alt-type-5.module.scss';

export const ResultLisDetailstAltType_5 = async () => {
  const data: ResultListDetalilsAltDTO = await getLocalData(
    'src/components/item-detail-type-1-alt/components/item-detail-type-1-alt-type-5/data.json',
  );

  return (
    <MainSectionLayout align={data.titleAlign}>
      <div className={clsx(common.root, custom.root)}>
        <ul className={clsx(common.list, custom.list)}>
          {data.content.list.map((item, index) => (
            <li
              key={`${item.id}-${index}`}
              className={clsx(common.list_item, custom.list_item)}
            >
              <div className={clsx(common.list_item_info_top)}>
                {item.data.map((elem, index) => (
                  <>
                    <Image
                      key={`${elem.image.url}-${index}`}
                      src={elem.image.url}
                      alt={elem.image.alt}
                      width={elem.image.width}
                      height={elem.image.height}
                      className={clsx(common.list_item_info_top_image)}
                    />
                    <div className={clsx(common.list_item_info_top_content)}>
                      <div className={clsx(common.list_item_info_top_badge)}>
                        <Badge
                          text={elem.badge.text}
                          outlined={true}
                          accent={true}
                        />
                      </div>
                      <div className={clsx(common.list_item_info_top_header)}>
                        <span
                          className={clsx(
                            'base_subtitle',
                            common.base_subtitle,
                          )}
                        >
                          {elem.title}
                        </span>
                        <div
                          className={clsx(
                            common.list_item_info_top_header_wrapper,
                          )}
                        >
                          <span
                            className={clsx(
                              common.list_item_info_top_header_price,
                            )}
                          >
                            {elem.price} руб
                          </span>
                          <span
                            className={clsx(
                              common.list_item_info_top_header_measure,
                            )}
                          >
                            за {elem.priceMeasure} руб./м2
                          </span>
                        </div>
                      </div>
                      <ul
                        className={clsx(
                          common.list_item_properties,
                          custom.list_item_properties,
                        )}
                      >
                        {elem.data_content.map((elem, index) => (
                          <li
                            key={`properties-${index}`}
                            className={clsx(
                              common.list_item_properties_content,
                            )}
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
                    </div>
                  </>
                ))}
              </div>
              <span className={clsx('base_subtitle', common.base_subtitle)}>
                {item.info.title}
              </span>
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
                <div className={clsx(common.list_item_content_header)}>
                  <span className={clsx('base_title', common.base_title)}>
                    {item.title}
                  </span>
                </div>
                <div className={clsx(common.list_item_content_badge)}>
                  <ByDetails width={24} height={24} fill="#6B7280" />
                  <Badge text={item.badge.text} outlined={true} accent={true} />
                </div>
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
                <ul className={clsx(common.list_item_properties)}>
                  {item.properties.map((elem, index) => {
                    // Разделяем ключи на обычные и массивные
                    const simpleValues = Object.entries(elem).filter(
                      ([, value]) => !Array.isArray(value),
                    );
                    const arrayValues = Object.entries(elem).filter(
                      ([, value]) => Array.isArray(value),
                    );

                    return (
                      <li
                        key={`properties-${index}`}
                        className={clsx(common.list_item_properties_content)}
                      >
                        {/* Сначала выводим простые значения */}
                        {simpleValues.map(([key, value]) => (
                          <div
                            key={key}
                            className={clsx(
                              common.list_item_properties_content_details,
                            )}
                          >
                            <span>{key}:</span>
                            <span>
                              {' '}
                              {typeof value === 'string' ||
                              typeof value === 'number'
                                ? value
                                : JSON.stringify(value)}
                            </span>
                          </div>
                        ))}

                        {/* Затем выводим массивы, включая только те, которые нужно показать последними */}
                        {arrayValues.map(([key, value]) => (
                          <div
                            key={key}
                            className={clsx(
                              common.list_item_properties_content_details,
                            )}
                          >
                            <span>{key}:</span>
                            <div>
                              {Array.isArray(value) &&
                                value.map((v, i) => (
                                  <span key={`${v.title}-${i}`}>{v.title}</span>
                                ))}
                            </div>
                          </div>
                        ))}
                      </li>
                    );
                  })}
                </ul>
                <span className={clsx('base_title', common.base_title)}>
                  {item.info.title}
                </span>
                <div
                  className={clsx(common.info_description)}
                  dangerouslySetInnerHTML={{ __html: item.info.description }}
                />
              </div>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <a
                  href="https://yandex.com/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                  style={{
                    color: '#eee',
                    fontSize: '12px',
                    position: 'absolute',
                    top: '0px',
                  }}
                >
                  Москва
                </a>
                <a
                  href="https://yandex.com/maps/213/moscow/house/nikoloyamskaya_ulitsa_13s17/Z04YcAJiTkMPQFtvfXt1eXpgZA==/?ll=37.652768%2C55.748630&utm_medium=mapframe&utm_source=maps&z=16"
                  style={{
                    color: '#eee',
                    fontSize: '12px',
                    position: 'absolute',
                    top: '14px',
                  }}
                >
                  Николоямская улица, 13 c 17 — Яндекс Карты
                </a>
                <iframe
                  src="https://yandex.com/map-widget/v1/?ll=37.652768%2C55.748630&mode=whatshere&whatshere%5Bpoint%5D=37.652768%2C55.748630&whatshere%5Bzoom%5D=17&z=16"
                  width="560"
                  height="400"
                  allowFullScreen
                  style={{ position: 'relative', width: '100%' }}
                ></iframe>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </MainSectionLayout>
  );
};
