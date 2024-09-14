// 'use client';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { Badge } from '@/shared/components/badge';
import { MainBtn } from '@/shared/components/main-btn';
import { MainInput } from '@/shared/components/main-input';
import { MainLink } from '@/shared/components/main-link';
import { SliderResultList } from '@/shared/components/slider/slider-result-list/slider-result-list';

import IconWalk from '../../../../../public/assets/images/result-list/directions_walk.svg';
import { ByDetails } from '../../../../shared/icons/view-mode/by-details';
import { ResultListDetalilsDTO } from '../../types';
import common from '../result-list-details.module.scss';
import custom from './result-list-details-type-7.module.scss';

const inputsData = [
  {
    id: '1',
    type: 'text',
    name: 'Комнатность',
    placeholder: 'Комнатность',
  },
  {
    id: '2',
    type: 'text',
    name: 'Площадь',
    placeholder: 'Площадь',
  },
  {
    id: '3',
    type: 'text',
    name: 'Стоимость',
    placeholder: 'Стоимость',
  },
];

export const ResultLisDetailstType_7 = async () => {
  const data: ResultListDetalilsDTO = await getLocalData(
    'src/components/result-list-details/components/result-list-details-type-7/data.json',
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
                  <MainLink
                    text="На карте"
                    icon={true}
                    width={24}
                    height={24}
                    path="M8 10C6.9 10 6 9.1 6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8C10 9.1 9.1 10 8 10ZM14 8.2C14 4.57 11.35 2 8 2C4.65 2 2 4.57 2 8.2C2 10.54 3.95 13.64 8 17.34C12.05 13.64 14 10.54 14 8.2ZM8 0C12.2 0 16 3.22 16 8.2C16 11.52 13.33 15.45 8 20C2.67 15.45 0 11.52 0 8.2C0 3.22 3.8 0 8 0Z"
                    fill="#046C4E"
                    outlined={true}
                  />
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
                <span className={clsx('base_title', common.base_title)}>
                  {item.table.map((elem, index) => (
                    <React.Fragment key={`${elem.id}-${index}`}>
                      {elem.title}
                    </React.Fragment>
                  ))}
                </span>
                <div className={clsx(common.list_item_filters)}>
                  {inputsData.map((field, index) => (
                    <MainInput
                      key={`${field.id}-${index}`}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      id={field.id}
                    />
                  ))}
                  <MainBtn text="Искать" />
                </div>
                <table className={common.tab}>
                  <thead>
                    <tr className={common.tab_header}>
                      {item.table.map((item, index) => (
                        <React.Fragment key={`${item.type}-${index}`}>
                          <th>{item.layout}</th>
                          <th>{item.frame}</th>
                          <th>{item.completionDate}</th>
                          <th>{item.numberApartment}</th>
                          <th>{item.type}</th>
                          <th>{item.lavel}</th>
                          <th>{item.totalArea}</th>
                          <th>{item.price}</th>
                          <th>{item.finishing}</th>
                        </React.Fragment>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {item.table.map((item) =>
                      item.data.map((data, index) => (
                        <tr
                          className={common.tab_body_content}
                          key={`${data.type}-${index}-${data.id}`}
                        >
                          <td>
                            <Image
                              src={data.image.url}
                              alt={data.image.alt}
                              width={data.image.width}
                              height={data.image.height}
                            />
                          </td>
                          <td>{data.frame}</td>
                          <td>{data.completionDate}</td>
                          <td>{data.numberApartment}</td>
                          <td>{data.type}</td>
                          <td>{data.lavel}</td>
                          <td>{data.totalArea}</td>
                          <td>{data.price}</td>
                          <td>{data.finishing}</td>
                        </tr>
                      )),
                    )}
                  </tbody>
                </table>
                <ul className={clsx(common.list_item_data)}>
                  {item.apartments.map((elem, index) => (
                    <li
                      key={`${elem.type}-${index}`}
                      className={clsx(common.list_item_data_content)}
                    >
                      <Image
                        src={elem.image.url}
                        alt={elem.image.alt}
                        width={elem.image.width}
                        height={elem.image.height}
                      />
                      <div
                        className={clsx(common.list_item_data_content_details)}
                      >
                        <span>Тип квартиры:</span>
                        <span>{elem.type}</span>
                      </div>
                      <div
                        className={clsx(common.list_item_data_content_details)}
                      >
                        <span>Этаж:</span>
                        <span>{elem.level}</span>
                      </div>
                      <div
                        className={clsx(common.list_item_data_content_details)}
                      >
                        <span>Площадь:</span>
                        <span>{elem.square}</span>
                      </div>
                      <div
                        className={clsx(common.list_item_data_content_details)}
                      >
                        <span>Площадь кухни:</span>
                        <span>{elem.kitchensArea}</span>
                      </div>
                      <div
                        className={clsx(common.list_item_data_content_details)}
                      >
                        <span>Общая площадь:</span>
                        <span>{elem.totalArea}</span>
                      </div>
                      <div
                        className={clsx(common.list_item_data_content_details)}
                      >
                        <span>Площадь комнат:</span>
                        <span>{elem.roomArea}</span>
                      </div>
                      <MainBtn text="Искать" />
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </MainSectionLayout>
  );
};
