'use client';

import clsx from 'clsx';
import React, { useState } from 'react';

import { IconMan } from '@/shared/icons/icon-set-1/icon-man';
import { IconMetro } from '@/shared/icons/icon-set-1/icon-metro';
import { IconTransport } from '@/shared/icons/icon-set-1/icon-transport';

import styles from './metros-list-alt.module.scss';

type Metro = {
  subway_id: number;
  distance: string;
  metro: string;
};

type Props = {
  metros: Metro[]; // массив объектов типа Metro
};

export const MetrosListAlt: React.FC<Props> = ({ metros }) => {
  const [visibleCountsMetros, setVisibleCountsMetros] = useState<number>(1); // Показываем 2 станции по умолчанию

  // Функция для обработки нажатия кнопки "Показать ещё"
  const handleShowMoreMetro = () => {
    setVisibleCountsMetros((prevCount) => prevCount + 1); // При каждом нажатии показываем ещё 2 элемента
  };
  return (
    <div className={clsx(styles.content_section)}>
      <ul className={clsx(styles.content_section_metros)}>
        {metros
          .slice(0, visibleCountsMetros) // Показываем количество элементов согласно состоянию
          .map((elem, index) => (
            <li
              key={`${elem.subway_id}-${index}`}
              className={clsx(styles.content_section_metros_details)}
            >
              <IconMetro />
              <span
                className={clsx(
                  'base_text',
                  styles.base_text,
                  styles.base_text_margin_r,
                )}
              >
                {elem.metro}
              </span>
              {elem.distance.includes('пешком') ? (
                <>
                  <IconMan />
                  <span
                    className={clsx(
                      'base_text',
                      styles.base_text,
                      styles.base_text_time,
                    )}
                  >
                    {elem.distance.replace('пешком', '').trim()}
                  </span>
                </>
              ) : elem.distance.includes('транспортом') ? (
                <>
                  <IconTransport />
                  <span
                    className={clsx(
                      'base_text',
                      styles.base_text,
                      styles.base_text_time,
                    )}
                  >
                    {elem.distance.replace('транспортом', '').trim()}
                  </span>
                </>
              ) : (
                <span className={clsx('base_text', styles.base_text)}>
                  {elem.distance}
                </span>
              )}
            </li>
          ))}
      </ul>
      {metros.length > visibleCountsMetros && (
        <button
          className={clsx(styles.content_section_show_more)}
          onClick={handleShowMoreMetro} // Без передачи itemId, так как увеличиваем общее количество видимых элементов
        >
          Показать ещё...
        </button>
      )}
    </div>
  );
};
