//'use client';
import clsx from 'clsx';
import React from 'react';

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
  visibleCountsMetro: number;
  itemId: number;
  handleShowMoreMetro: (id: number) => void;
};

export const MetrosListAlt: React.FC<Props> = ({
  metros,
  visibleCountsMetro,
  itemId,
  handleShowMoreMetro,
}) => {
  return (
    <div className={clsx(styles.content_section)}>
      <ul className={clsx(styles.content_section_metros)}>
        {metros
          .slice(0, visibleCountsMetro) // Показываем только два элемента по умолчанию
          .map((elem, index) => (
            <li
              key={`${elem.subway_id}-${index}`}
              className={clsx(styles.content_section_metros_details)}
            >
              <IconMetro />
              <span className={clsx('base_text', styles.base_text)}>
                {elem.metro}
              </span>
              {elem.distance.includes('пешком') ? (
                <>
                  <IconMan />
                  <span className={clsx('base_text', styles.base_text)}>
                    {elem.distance.replace('пешком', '').trim()}
                  </span>
                </>
              ) : elem.distance.includes('транспортом') ? (
                <>
                  <IconTransport />
                  <span className={clsx('base_text', styles.base_text)}>
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
        {metros.length > visibleCountsMetro && (
          <button
            className={clsx(styles.content_section_show_more)}
            onClick={() => handleShowMoreMetro(itemId)} // При клике передаем id для конкретного элемента
          >
            Показать ещё...
          </button>
        )}
      </ul>
    </div>
  );
};
