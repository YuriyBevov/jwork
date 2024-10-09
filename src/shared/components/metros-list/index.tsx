'use client';

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import { MetrosPopup } from '@/shared/components/metros-popup';
import { IconMan } from '@/shared/icons/icon-set-1/icon-man';
import { IconMetro } from '@/shared/icons/icon-set-1/icon-metro';
import { IconTransport } from '@/shared/icons/icon-set-1/icon-transport';

import styles from './metros-list.module.scss';

type Metro = {
  subway_id: number;
  distance: string;
  metro: string;
};

type Props = {
  metros: Metro[]; // массив объектов типа Metro
};

export const MetrosList: React.FC<Props> = ({ metros }) => {
  const [showModal, setShowModal] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(3);

  const handleShowMore = () => {
    setShowModal(!showModal);
  };

  // Обработчик изменения ширины экрана
  useEffect(() => {
    const handleResize = () => {
      // Если ширина экрана меньше или равна 1200px, показываем 2 элемента
      if (window.innerWidth <= 1120) {
        setDisplayedCount(1);
      } else if (window.innerWidth <= 1490) {
        setDisplayedCount(2);
      } else {
        // Если больше 1200px, показываем 3 элемента
        setDisplayedCount(3);
      }
    };

    // Вызовем обработчик при загрузке компонента
    handleResize();

    // Добавляем слушателя на изменение размеров окна
    window.addEventListener('resize', handleResize);

    // Удаляем слушателя при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Ограничение количества отображаемых элементов
  const displayedItems = metros.slice(0, displayedCount);
  const hiddenItems = metros.slice(displayedCount); // Остальные элементы

  return (
    <div className={clsx(styles.content_section)}>
      <ul className={clsx(styles.content_section_metros)}>
        {displayedItems?.map((elem, index) => (
          <li
            key={`${elem.subway_id}-${index}`}
            className={clsx(styles.content_section_metros_item)}
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
        <div className={clsx(styles.content_section_metros_btn_wrapper)}>
          {(metros?.length || 0) > 3 && (
            <button
              className={clsx(styles.content_section_metros_item_show_more)}
              onClick={handleShowMore}
            >
              Показать ещё...
            </button>
          )}
          {showModal && (
            <MetrosPopup>
              <ul className={clsx(styles.content_section_metros_modal_list)}>
                {hiddenItems?.map((elem, index) => (
                  <li
                    key={`${elem.subway_id}-${index}`}
                    className={clsx(styles.content_section_metros_item)}
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
              </ul>
            </MetrosPopup>
          )}
        </div>
      </ul>
    </div>
  );
};
