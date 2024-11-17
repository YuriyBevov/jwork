import clsx from 'clsx';
import React, { useState } from 'react';

import { FilterItem } from '@/components/map/types';
import { IconCloseFilter } from '@/shared/icons/icon-close-filter';
import { IconSmallArrow } from '@/shared/icons/icon-small-arrow';
import { CheckboxBtnUi, CheckboxUi, RangeSliderUi } from '@/shared/ui';

import { ButtonUi } from '../button';
import styles from './filter-popup.module.scss';

const data = {
  title: 'Фильтр',
  items: [
    {
      id: '1',
      title: 'До метро',
      type: 'checkbox_btn',
      value: [
        {
          id: '1',
          value: 'Не важно',
        },
        {
          id: '2',
          value: 'Пешком',
        },
      ],
    },
    {
      id: '2',
      title: 'Дополнительно',
      type: 'checkbox',
      value: [
        {
          id: '1',
          value: 'С детской площадкой',
        },
        {
          id: '2',
          value: 'Со спортивной площадкой',
        },
      ],
    },
    {
      id: '3',
      title: 'Лифты',
      type: 'checkbox_btn',
      value: [
        {
          id: '1',
          value: 'Не важно',
        },
        {
          id: '2',
          value: 'Есть',
        },
      ],
    },
    {
      id: '4',
      title: 'Мусоропровод',
      type: 'checkbox_btn',
      value: [
        {
          id: '1',
          value: 'Не важно',
        },
        {
          id: '2',
          value: 'Есть',
        },
      ],
    },
    {
      id: '5',
      title: 'Балкон',
      type: 'checkbox_btn',
      value: [
        {
          id: '1',
          value: 'Балкон',
        },
        {
          id: '2',
          value: 'Лоджия',
        },
        {
          id: '3',
          value: 'Нет',
        },
      ],
    },
    {
      id: '6',
      title: 'Санузел',
      type: 'checkbox_btn',
      value: [
        {
          id: '1',
          value: 'Раздельный',
        },
        {
          id: '2',
          value: 'Совмещенный',
        },
      ],
    },
    {
      id: '7',
      title: 'Вид из окна',
      type: 'checkbox_btn',
      value: [
        {
          id: '1',
          value: 'Во двор',
        },
        {
          id: '2',
          value: 'На улицу и двор',
        },
        {
          id: '3',
          value: 'На улицу',
        },
        {
          id: '4',
          value: 'На солнечную сторону',
        },
      ],
    },
    {
      id: '8',
      title: 'Ремонт',
      type: 'checkbox_btn',
      value: [
        {
          id: '1',
          value: 'Косметический',
        },
        {
          id: '2',
          value: 'Евроремонт',
        },
        {
          id: '3',
          value: 'Дизайнерский',
        },
        {
          id: '4',
          value: 'Требует ремонта',
        },
      ],
    },
    {
      id: '9',
      title: 'Высота потолков',
      type: 'checkbox_btn',
      value: [
        {
          id: '1',
          value: 'от 2,5 м',
        },
        {
          id: '2',
          value: 'от 2,7 м',
        },
        {
          id: '3',
          value: 'от 3 м',
        },
        {
          id: '4',
          value: 'от 4 м',
        },
        {
          id: '4',
          value: 'Только высокие',
        },
      ],
    },
    {
      id: '10',
      title: 'Цена, руб.',
      type: 'range',
      value: [0, 180600000],
    },
    {
      id: '11',
      title: 'Площадь, м2',
      type: 'range',
      value: [10, 675],
    },
    {
      id: '12',
      title: 'Этаж',
      type: 'range',
      value: [1, 50],
    },
    {
      id: '13',
      title: 'Год постройки',
      type: 'range',
      value: [1980, 2024],
    },
    {
      id: '14',
      title: 'Метраж жилой площади, м2',
      type: 'range',
      value: [0, 500],
    },
    {
      id: '15',
      title: 'Метраж кухни, м2',
      type: 'range',
      value: [0, 500],
    },
  ],
};

function blockRenderer(block: FilterItem) {
  switch (block.type) {
    case 'range':
      return <RangeSliderUi key={block.id} data={block} />;
    case 'checkbox_btn':
      return <CheckboxBtnUi key={block.id} data={block} />;
    case 'checkbox':
      return <CheckboxUi key={block.id} data={block} />;
    default:
      return null;
  }
}

export const FilterPopup = ({ closePopup }: { closePopup: () => void }) => {
  const [activeIds, setActiveIds] = useState<string[]>([]);
  const toggleActiveId = (id: string) => {
    if (activeIds.includes(id)) {
      setActiveIds(activeIds.filter((activeId) => activeId !== id));
    } else {
      setActiveIds([...activeIds, id]);
    }
  };

  return (
    <section className={clsx(styles.root)}>
      <div className={clsx(styles.header)}>
        <div className={styles.header_wrapper}>
          <span>{data.title}</span>
          <button type="button" onClick={closePopup}>
            <IconCloseFilter fill={'white'} />
          </button>
        </div>
      </div>
      <div className={clsx(styles.list)}>
        {data.items
          .sort((block, blocks) => parseInt(block.id) - parseInt(blocks.id))
          .map(
            (block: {
              id: string;
              title: string;
              type: string;
              value: { id: string; value: string }[] | number[];
            }) => (
              <div className={clsx(styles.block)} key={block.id}>
                <div
                  onClick={() => toggleActiveId(block.id)}
                  className={clsx(
                    activeIds.includes(block.id) ? styles.active : null,
                    styles.title,
                  )}
                >
                  <span>{block.title}</span>
                  <IconSmallArrow width={12} height={7} />
                </div>
                <div className={styles.content}>
                  {blockRenderer(block as FilterItem)}
                </div>
              </div>
            ),
          )}
        <ButtonUi height="lg" className={styles.button}>
          Искать
        </ButtonUi>
      </div>
    </section>
  );
};
