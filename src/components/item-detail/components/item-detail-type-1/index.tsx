// 'use client';
import clsx from 'clsx';
import Image from 'next/image';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { Badge } from '@/shared/components/badge';
import { MainBtn } from '@/shared/components/main-btn';
import { MainInput } from '@/shared/components/main-input';
import { MainLink } from '@/shared/components/main-link';
import { MetrosList } from '@/shared/components/metros-list';
import { SliderResultList } from '@/shared/components/slider/slider-result-list/slider-result-list';
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

  // Функция для преобразования даты в формат "N квартал YYYY"
  function formatToQuarter(input: string | number): string {
    // Если входное значение - число (например, таймстамп), преобразуем его в объект Date
    const date = typeof input === 'number' ? new Date(input) : new Date(input);

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Месяцы в JS начинаются с 0

    // Определяем квартал по месяцу
    let quarter;
    if (month >= 1 && month <= 3) {
      quarter = 1;
    } else if (month >= 4 && month <= 6) {
      quarter = 2;
    } else if (month >= 7 && month <= 9) {
      quarter = 3;
    } else {
      quarter = 4;
    }

    return `${quarter} квартал ${year}`;
  }

  // Преобразование массива deadlines
  const deadlines =
    data?.data?.block?.block_info?.deadlines?.map(formatToQuarter) || [];

  return (
    <MainSectionLayout>
      <div className={clsx(styles.root)}>
        <div className={clsx(styles.content)}>
          <div className={clsx(styles.content_row)}>
            <div className={clsx(styles.content_row_gallery)}>
              <SliderResultList>
                {data?.data?.block?.block_img.map((img, index) => (
                  <Image
                    key={`картина-${index}`}
                    src={img}
                    alt={`slider-${index}`}
                    width={420}
                    height={410}
                    className={clsx(styles.content_row_gallery_slide)}
                  />
                ))}
              </SliderResultList>
            </div>
          </div>
          <div className={clsx(styles.content_row, styles.content_column)}>
            <span
              className={clsx('base_title', styles.base_title, styles.order_2)}
            >
              {data?.data?.block?.name}
            </span>
            <MainLink
              text="На карте"
              icon={true}
              width={16}
              height={20}
              path="M8 10C6.9 10 6 9.1 6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8C10 9.1 9.1 10 8 10ZM14 8.2C14 4.57 11.35 2 8 2C4.65 2 2 4.57 2 8.2C2 10.54 3.95 13.64 8 17.34C12.05 13.64 14 10.54 14 8.2ZM8 0C12.2 0 16 3.22 16 8.2C16 11.52 13.33 15.45 8 20C2.67 15.45 0 11.52 0 8.2C0 3.22 3.8 0 8 0Z"
              fill="#046C4E"
              outlined={true}
            />
          </div>
          <div className={clsx(styles.content_row)}>
            <div className={clsx(styles.content_row_badge)}>
              <ByDetails width={24} height={24} fill="#6B7280" />
              <Badge
                text={data?.data?.type === 'newbuildings' ? 'Новостройка' : ''}
                outlined={true}
                muted={true}
              />
            </div>
          </div>
          <div className={clsx(styles.content_row)}>
            <span className={clsx('base_subtitle', styles.base_subtitle)}>
              {data?.data?.block?.address}
            </span>
          </div>
          <div className={clsx(styles.content_row)}>
            <span className={clsx('base_subtitle', styles.base_subtitle)}>
              {data?.data?.block?.region_name}
            </span>
          </div>
          <MetrosList metros={data?.data?.block?.metros ?? []} />
          <div className={clsx(styles.content_row)}>
            <ul className={clsx(styles.content_row_apart)}>
              <li className={styles.content_row_apart_item}>
                <span className={styles.content_row_apart_item_name}>
                  Корпус:
                </span>
                <div>
                  {data?.data?.block?.block_info.building_corps.map(
                    (item, index) => (
                      <span
                        className={styles.content_row_apart_item_value}
                        key={`${item}-${index}`}
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </li>
              <li className={styles.content_row_apart_item}>
                <span className={styles.content_row_apart_item_name}>
                  Этажей:
                </span>
                <span className={styles.content_row_apart_item_value}>
                  {data?.data?.block?.block_info.max_floors}
                </span>
              </li>
              <li className={styles.content_row_apart_item}>
                <span className={styles.content_row_apart_item_name}>
                  Срок сдачи:
                </span>
                <div>
                  {deadlines.map((item, index) => (
                    <span
                      className={styles.content_row_apart_item_value}
                      key={`${item}-${index}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </li>
            </ul>
          </div>
          <div className={clsx(styles.content_row)}>
            <span className={clsx('base_title', styles.base_title)}>
              Описание ЖК
            </span>
            <div
              className={clsx(styles.content_row_note)}
              dangerouslySetInnerHTML={{
                __html: data?.data?.block?.note ? data?.data?.block?.note : '',
              }}
            />
          </div>
          <div className={clsx(styles.content_row)}>
            <span className={clsx('base_title', styles.base_title)}>
              Квартиры в комплексе
            </span>
          </div>
          <div className={clsx(styles.content_row)}>
            <div className={clsx(styles.content_row_filters)}>
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
          <div className={clsx(styles.content_row)}>
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
                {data?.data?.block?.apartments.map((item, index) => (
                  <tr
                    className={styles.tab_body_content}
                    key={`${item.id}-${index}`}
                  >
                    <td>
                      <Image
                        src={item?.image}
                        alt={`apartments-${index}`}
                        width={326}
                        height={326}
                        className={styles.tab_body_content_img}
                      />
                    </td>
                    <td>{item.building_corp}</td>
                    <td>{formatToQuarter(item.building_deadline)}</td>
                    <td>{item.number}</td>
                    <td>{item.room_type_name}</td>
                    <td>{item.flat_floor}</td>
                    <td>{item.space_total}</td>
                    <td>{item.price.toLocaleString('ru-RU')}</td>
                    <td>{item.decoration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ul className={clsx(styles.content_row_list)}>
              {data?.data?.block?.apartments.map((item, index) => (
                <li
                  key={`${item.room_type_name}-${index}`}
                  className={clsx(styles.content_row_list_item)}
                >
                  <Image
                    src={item?.image}
                    alt={`apartments-${index}`}
                    width={326}
                    height={326}
                  />
                  <ul className={clsx(styles.content_row_list_item_aside)}>
                    <li
                      className={clsx(
                        styles.content_row_list_item_aside_details,
                      )}
                    >
                      <span>Тип квартиры:</span>
                      <span>{item.room_type_name}</span>
                    </li>
                    <li
                      className={clsx(
                        styles.content_row_list_item_aside_details,
                      )}
                    >
                      <span>Этаж:</span>
                      <span>{item.flat_floor}</span>
                    </li>
                    <li
                      className={clsx(
                        styles.content_row_list_item_aside_details,
                      )}
                    >
                      <span>Площадь:</span>
                      <span>{item.space_total}</span>
                    </li>
                    <li
                      className={clsx(
                        styles.content_row_list_item_aside_details,
                      )}
                    >
                      <span>Площадь кухни:</span>
                      <span>{item.space_kitchen}</span>
                    </li>
                    <li
                      className={clsx(
                        styles.content_row_list_item_aside_details,
                      )}
                    >
                      <span>Общая площадь:</span>
                      <span>{item.space_total}</span>
                    </li>
                    <li
                      className={clsx(
                        styles.content_row_list_item_aside_details,
                      )}
                    >
                      <span>Площадь комнат:</span>
                      <span>{item.space_room}</span>
                    </li>
                  </ul>
                  <MainBtn text="Искать" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MainSectionLayout>
  );
};
