// 'use client';
import clsx from 'clsx';
import Image from 'next/image';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { Badge } from '@/shared/components/badge';
import { MainLink } from '@/shared/components/main-link';
import { MetrosList } from '@/shared/components/metros-list';
import { SliderResultList } from '@/shared/components/slider/slider-result-list/slider-result-list';
import { ByDetails } from '@/shared/icons/view-mode/by-details';

import { ItemDetailDTO } from '../../types';
import styles from '../apart-detail.module.scss';

export const ApartDetailType_1 = async () => {
  const data: ItemDetailDTO = await getLocalData(
    'src/components/apart-detail/components/apart-detail-type-1/data.json',
  );

  // Функция для преобразования даты в формат "N квартал YYYY"
  function formatToQuarter(dateString: string): string {
    const date = new Date(dateString);
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
  const deadlines = data?.block_info?.deadlines?.map(formatToQuarter) || [];

  const finalPrice = data?.apartment.price.toLocaleString('ru-RU');
  const finalMeterPrice = data?.apartment?.meter_price.toLocaleString('ru-RU');

  return (
    <MainSectionLayout>
      <div className={clsx(styles.root)}>
        <div className={clsx(styles.content)}>
          <div className={clsx(styles.breadcrumb)}>
            <span>Главная</span>
            <span>/</span>
            <span>ЖК “Тестовый”</span>
            <span>/</span>
            <span>Квартира 250</span>
          </div>
          <div className={clsx(styles.content_row)}>
            {data?.apartment && (
              <div className={clsx(styles.content_row_info_top)}>
                <Image
                  src={data?.apartment.image}
                  alt={`data?.apartment-${data?.apartment.id}`}
                  width={326}
                  height={326}
                  className={clsx(styles.content_row_info_top_image)}
                />
                <div className={clsx(styles.content_row_info_top_content)}>
                  {data?.type === 'newbuilding' && (
                    <div className={clsx(styles.content_row_info_top_badge)}>
                      <Badge
                        text={data?.type === 'newbuilding' ? 'Новостройка' : ''}
                        outlined={true}
                        accent={true}
                      />
                    </div>
                  )}
                  <div className={clsx(styles.content_row_info_top_header)}>
                    <span
                      className={clsx('base_subtitle', styles.base_subtitle)}
                    >
                      {data?.apartment?.room_type_name}, {data?.name}
                    </span>
                    <div
                      className={clsx(
                        styles.content_row_info_top_header_wrapper,
                      )}
                    >
                      <span
                        className={clsx(
                          styles.content_row_info_top_header_price,
                        )}
                      >
                        {finalPrice} руб
                      </span>
                      <span
                        className={clsx(
                          styles.content_row_info_top_header_measure,
                        )}
                      >
                        за {finalMeterPrice} руб./м2
                      </span>
                    </div>
                  </div>
                  <div
                    className={clsx(
                      styles.content_row_info_top_content_wrapper,
                    )}
                  >
                    <div
                      className={clsx(
                        styles.content_row_info_top_content_details,
                      )}
                    >
                      <span>Тип квартиры:</span>
                      <span>{data?.apartment.room_type_name}</span>
                    </div>
                    <div
                      className={clsx(
                        styles.content_row_info_top_content_details,
                      )}
                    >
                      <span>Этаж:</span>
                      <span>{data?.apartment.flat_floor}</span>
                    </div>
                    <div
                      className={clsx(
                        styles.content_row_info_top_content_details,
                      )}
                    >
                      <span>Площадь:</span>
                      <span>{data?.apartment.space_total}</span>
                    </div>
                    <div
                      className={clsx(
                        styles.content_row_info_top_content_details,
                      )}
                    >
                      <span>Площадь кухни:</span>
                      <span>{data?.apartment.space_kitchen}</span>
                    </div>
                    <div
                      className={clsx(
                        styles.content_row_info_top_content_details,
                      )}
                    >
                      <span>Общая площадь:</span>
                      <span>{data?.apartment.space_total}</span>
                    </div>
                    <div
                      className={clsx(
                        styles.content_row_info_top_content_details,
                      )}
                    >
                      <span>Площадь комнат:</span>
                      <span>{data?.apartment.space_room}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={clsx(styles.content_row)}>
            <span className={clsx('base_title', styles.base_title)}>
              Описание ЖК
            </span>
          </div>
          <div className={clsx(styles.content_row)}>
            <div className={clsx(styles.content_row_gallery)}>
              <SliderResultList
                slidesPerView={1}
                slidesPerViewXs={1}
                slidesPerViewMobile={1}
                slidesPerViewTablet={1}
                slidesPerViewTabletLg={1}
                spaceBetween={24}
              >
                {data?.block_img.map((img, index) => (
                  <Image
                    key={`картина-${index}`}
                    src={img}
                    alt={`slider-${index}`}
                    width={1440}
                    height={480}
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
              {data?.name}
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
                text={data?.status ? data?.status : ''}
                outlined={true}
                muted={true}
              />
            </div>
          </div>
          <div className={clsx(styles.content_row)}>
            <span className={clsx(styles.base_text)}>{data?.address}</span>
          </div>
          <div className={clsx(styles.content_row)}>
            <span className={clsx(styles.base_text)}>{data?.region_name}</span>
          </div>
          <MetrosList metros={data?.metros ?? []} />
          <div className={clsx(styles.content_row)}>
            <ul className={clsx(styles.content_row_apart)}>
              <li className={styles.content_row_apart_item}>
                <span className={styles.content_row_apart_item_name}>
                  Корпус:
                </span>
                <div>
                  {data?.block_info.building_corps.map((item, index) => (
                    <span
                      className={styles.content_row_apart_item_value}
                      key={`${item}-${index}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </li>
              <li className={styles.content_row_apart_item}>
                <span className={styles.content_row_apart_item_name}>
                  Этажей:
                </span>
                <span className={styles.content_row_apart_item_value}>
                  {data?.block_info.max_floors}
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
              dangerouslySetInnerHTML={{ __html: data?.note ? data?.note : '' }}
            />
          </div>

          <div className={clsx(styles.content_row)}>
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
              }}
            >
              <a
                href={`https://yandex.com/maps/213/moscow/?ll=${data?.longitude}%2C${data?.latitude}&utm_medium=mapframe&utm_source=maps`}
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
                href={`https://yandex.com/maps/213/moscow/house/nikoloyamskaya_ulitsa_13s17/Z04YcAJiTkMPQFtvfXt1eXpgZA==/?ll=${data?.longitude}%2C${data?.latitude}&utm_medium=mapframe&utm_source=maps&z=16`}
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
                src={`https://yandex.com/map-widget/v1/?ll=${data?.longitude}%2C${data?.latitude}&mode=whatshere&whatshere%5Bpoint%5D=${data?.longitude}%2C${data?.latitude}&whatshere%5Bzoom%5D=17&z=16`}
                width="560"
                height="400"
                allowFullScreen
                style={{ position: 'relative', width: '100%', border: 'none' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </MainSectionLayout>
  );
};
