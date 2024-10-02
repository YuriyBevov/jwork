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
import { IconMan } from '@/shared/icons/icon-set-1/icon-man';
import { IconMetro } from '@/shared/icons/icon-set-1/icon-metro';
import { IconTransport } from '@/shared/icons/icon-set-1/icon-transport';
import { ByDetails } from '@/shared/icons/view-mode/by-details';

import { ItemDetailDTO } from '../../types';
import styles from '../item-detail.module.scss';

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

export const ItemDetailType_1 = async () => {
  const data: ItemDetailDTO = await getLocalData(
    'src/components/item-detail/components/item-detail-type-1/data.json',
  );

  return (
    <MainSectionLayout>
      <div className={clsx(styles.root)}>
        <div className={clsx(styles.content)}>
          <div className={clsx(styles.content_section)}>
            <div className={clsx(styles.content_section_gallery)}>
              <SliderResultList>
                {data.block_img.map((img, index) => (
                  <Image
                    key={`${img}-${index}`}
                    src={img}
                    alt={`slider-${index}`}
                    width={420}
                    height={410}
                    className={clsx(styles.content_section_gallery_slide)}
                  />
                ))}
              </SliderResultList>
            </div>
          </div>
          <div
            className={clsx(
              styles.content_section,
              styles.content_section_column,
            )}
          >
            <span className={clsx('base_title', styles.base_title)}>
              {data.name}
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
          <div className={clsx(styles.content_section)}>
            <div className={clsx(styles.content_section_badge)}>
              <ByDetails width={24} height={24} fill="#6B7280" />
              <Badge text={data.status} outlined={true} muted={true} />
            </div>
          </div>
          <div className={clsx(styles.content_section)}>
            <span className={clsx('base_subtitle', styles.base_subtitle)}>
              {data.address}
            </span>
          </div>
          <div className={clsx(styles.content_section)}>
            <span className={clsx('base_subtitle', styles.base_subtitle)}>
              {data.region_name}
            </span>
          </div>
          <div className={clsx(styles.content_section)}>
            <ul className={clsx(styles.content_section_metros)}>
              {data.metros.map((elem) => (
                <li
                  key={elem.subway_id}
                  className={clsx(styles.content_section_metros_item)}
                >
                  <IconMetro />
                  <span className={clsx('base_text', styles.base_text)}>
                    {elem.metro}
                  </span>
                  {elem.distance.includes('пешком') ? (
                    <>
                      <span className={clsx('base_text', styles.base_text)}>
                        {elem.distance.replace('пешком', '').trim()}
                      </span>
                      <IconMan />
                    </>
                  ) : elem.distance.includes('транспортом') ? (
                    <>
                      <span className={clsx('base_text', styles.base_text)}>
                        {elem.distance.replace('транспортом', '').trim()}
                      </span>
                      <IconTransport />
                    </>
                  ) : (
                    <span className={clsx('base_text', styles.base_text)}>
                      {elem.distance}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className={clsx(styles.content_section)}>
            <ul className={clsx(styles.content_section_apart)}>
              <li className={styles.content_section_apart_item}>
                <span className={styles.content_section_apart_item_name}>
                  Корпус:
                </span>
                <div>
                  {data.block_info.building_corps.map((item, index) => (
                    <span
                      className={styles.content_section_apart_item_value}
                      key={`${item}-${index}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </li>
              <li className={styles.content_section_apart_item}>
                <span className={styles.content_section_apart_item_name}>
                  Этажей:
                </span>
                <span className={styles.content_section_apart_item_value}>
                  {data.block_info.max_floors}
                </span>
              </li>
              <li className={styles.content_section_apart_item}>
                <span className={styles.content_section_apart_item_name}>
                  Срок сдачи:
                </span>
                <div>
                  {data.block_info.deadlines.map((item, index) => (
                    <span
                      className={styles.content_section_apart_item_value}
                      key={`${item}-${index}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </li>
            </ul>
          </div>
          <div className={clsx(styles.content_section)}>
            <span className={clsx('base_title', styles.base_title)}>
              Описание ЖК
            </span>
            <div
              className={clsx(styles.content_section_note)}
              dangerouslySetInnerHTML={{ __html: data.note }}
            />
          </div>
          <div className={clsx(styles.content_section)}>
            <span className={clsx('base_title', styles.base_title)}>
              Квартиры в комплексе
            </span>
          </div>
          <div className={clsx(styles.content_section)}>
            <div className={clsx(styles.content_section_filters)}>
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
          </div>
          <div className={clsx(styles.content_section)}>
            <table className={styles.tab}>
              <thead>
                <tr className={styles.tab_header}>
                  <th>Планировка</th>
                  <th>Корпус</th>
                  <th>Срок сдачи</th>
                  <th>№ кв</th>
                  <th>Тип</th>
                  <th>Этаж</th>
                  <th>Общая площадь</th>
                  <th>Стоимость, руб.</th>
                  <th>Отделка</th>
                </tr>
              </thead>
              <tbody>
                {data.apartments.map((item, index) => (
                  <tr
                    className={styles.tab_body_content}
                    key={`${item.id}-${index}`}
                  >
                    <td>
                      <Image
                        src={item.image}
                        alt={`apartments-${index}`}
                        width={80}
                        height={80}
                      />
                    </td>
                    <td>{item.building_corp}</td>
                    <td>{item.building_deadline}</td>
                    <td>{item.number}</td>
                    <td>{item.room_type_name}</td>
                    <td>{item.flat_floor}</td>
                    <td>{item.space_total}</td>
                    <td>{item.price}</td>
                    <td>{item.decoration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={clsx(styles.content_section)}>
            <ul className={clsx(styles.content_section_data)}>
              {data.apartments.map((item, index) => (
                <li
                  key={`${item.room_type_name}-${index}`}
                  className={clsx(styles.content_section_data_item)}
                >
                  <Image
                    src={item.image2}
                    alt={`apartments-${index}`}
                    width={326}
                    height={326}
                  />
                  <div
                    className={clsx(styles.content_section_data_item_details)}
                  >
                    <span>Тип квартиры:</span>
                    <span>{item.room_type_name}</span>
                  </div>
                  <div
                    className={clsx(styles.content_section_data_item_details)}
                  >
                    <span>Этаж:</span>
                    <span>{item.flat_floor}</span>
                  </div>
                  <div
                    className={clsx(styles.content_section_data_item_details)}
                  >
                    <span>Площадь:</span>
                    <span>{item.space_total}</span>
                  </div>
                  <div
                    className={clsx(styles.content_section_data_item_details)}
                  >
                    <span>Площадь кухни:</span>
                    <span>{item.space_kitchen}</span>
                  </div>
                  <div
                    className={clsx(styles.content_section_data_item_details)}
                  >
                    <span>Общая площадь:</span>
                    <span>{item.space_total}</span>
                  </div>
                  <div
                    className={clsx(styles.content_section_data_item_details)}
                  >
                    <span>Площадь комнат:</span>
                    <span>{item.space_room}</span>
                  </div>
                  <MainBtn text="Искать" />
                </li>
              ))}
            </ul>
          </div>

          {/* <div className={clsx(styles.content_section)}>
            <ul className="props_list" style="display:grid;grid-template-columns: autofill(minmax())repeat(3, 1fr); gap:30px;">
              list.map((item) => {
                item.value.typeof !== "string" ? "props_list_item--last" : ""
              })
              <li className={props_list_item}>
                <span>name</span>
                <span>value</span>
              </li>
            </ul>  
          </div>
          <div className={clsx(styles.content_section)}>description</div>
          <div className={clsx(styles.content_section)}>aparts</div>
        </div>
        <ul className={clsx(styles.list, styles.list)}>
          {data.content.list.map((item, index) => (
            <li
              key={`${item.id}-${index}`}
              className={clsx(styles.list_item, styles.list_item)}
            >
              <div className={clsx(styles.list_item_gallery)}>
                <SliderResultList>
                  {item.image.map((img, index) => (
                    <Image
                      key={`${img.url}-${index}`}
                      src={img.url}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className={clsx(styles.list_item_gallery_slide)}
                    />
                  ))}
                </SliderResultList>
              </div>
              <div className={clsx(styles.list_item_content)}>
                <div className={clsx(styles.list_item_content_header)}>
                  <span className={clsx('base_title', styles.base_title)}>
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
                <div className={clsx(styles.list_item_content_badge)}>
                  <ByDetails width={24} height={24} fill="#6B7280" />
                  <Badge text={item.badge.text} outlined={true} accent={true} />
                </div>
                <span className={clsx('base_subtitle', styles.base_subtitle)}>
                  {item.description}
                </span>
                <span className={clsx('base_subtitle', styles.base_subtitle)}>
                  {item.district}
                </span>
                <ul className={clsx(styles.list_item_locations)}>
                  {item.location.map((elem) => (
                    <li
                      key={elem.name}
                      className={clsx(styles.list_item_locations_item)}
                    >
                      <IconMetro />
                      <span className={clsx('base_text', styles.base_text)}>
                        {elem.name}
                      </span>
                      <Image
                        src={IconWalk}
                        alt={elem.image.alt}
                        width={16}
                        height={16}
                      />
                      <span className={clsx('base_text', styles.base_text)}>
                        {elem.time} мин
                      </span>
                    </li>
                  ))}
                </ul>
                <ul className={clsx(styles.list_item_properties)}>
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
                        className={clsx(styles.list_item_properties_content)}
                      >
                        {simpleValues.map(([key, value]) => (
                          <div
                            key={key}
                            className={clsx(
                              styles.list_item_properties_content_details,
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

                        {arrayValues.map(([key, value]) => (
                          <div
                            key={key}
                            className={clsx(
                              styles.list_item_properties_content_details,
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
                <span className={clsx('base_title', styles.base_title)}>
                  {item.info.title}
                </span>
                <div
                  className={clsx(styles.info_description)}
                  dangerouslySetInnerHTML={{ __html: item.info.description }}
                />
                <span className={clsx('base_title', styles.base_title)}>
                  {item.table.map((elem, index) => (
                    <React.Fragment key={`${elem.id}-${index}`}>
                      {elem.title}
                    </React.Fragment>
                  ))}
                </span>
                <div className={clsx(styles.list_item_filters)}>
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
                <table className={styles.tab}>
                  <thead>
                    <tr className={styles.tab_header}>
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
                          className={styles.tab_body_content}
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
                <ul className={clsx(styles.list_item_data)}>
                  {item.apartments.map((elem, index) => (
                    <li
                      key={`${elem.type}-${index}`}
                      className={clsx(styles.list_item_data_content)}
                    >
                      <Image
                        src={elem.image.url}
                        alt={elem.image.alt}
                        width={elem.image.width}
                        height={elem.image.height}
                      />
                      <div
                        className={clsx(styles.list_item_data_content_details)}
                      >
                        <span>Тип квартиры:</span>
                        <span>{elem.type}</span>
                      </div>
                      <div
                        className={clsx(styles.list_item_data_content_details)}
                      >
                        <span>Этаж:</span>
                        <span>{elem.level}</span>
                      </div>
                      <div
                        className={clsx(styles.list_item_data_content_details)}
                      >
                        <span>Площадь:</span>
                        <span>{elem.square}</span>
                      </div>
                      <div
                        className={clsx(styles.list_item_data_content_details)}
                      >
                        <span>Площадь кухни:</span>
                        <span>{elem.kitchensArea}</span>
                      </div>
                      <div
                        className={clsx(styles.list_item_data_content_details)}
                      >
                        <span>Общая площадь:</span>
                        <span>{elem.totalArea}</span>
                      </div>
                      <div
                        className={clsx(styles.list_item_data_content_details)}
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
        </ul> */}
        </div>
      </div>
    </MainSectionLayout>
  );
};
