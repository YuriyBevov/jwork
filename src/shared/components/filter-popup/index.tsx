import clsx from 'clsx';
import React from 'react';

import { IconCloseFilter } from '@/shared/icons/icon-close-filter';

import { MainBtn } from '../main-btn';
import { MainInput } from '../main-input';
import styles from './filter-popup.module.scss';

const data = [
  {
    id: '1',
    type: 'text',
    name: 'Поиск',
    placeholder: 'Поиск',
  },
  {
    id: '2',
    type: 'text',
    name: 'Номер лота',
    placeholder: 'Номер лота',
  },
  {
    id: '3',
    type: 'text',
    name: 'Этаж',
    placeholder: 'Этаж',
  },
  {
    id: '4',
    type: 'text',
    name: 'Год постройки',
    placeholder: 'Год постройки',
  },
  {
    id: '5',
    type: 'text',
    name: 'Балкон',
    placeholder: 'Балкон',
  },
  {
    id: '6',
    type: 'text',
    name: 'Санузел',
    placeholder: 'Санузел',
  },
  {
    id: '7',
    type: 'text',
    name: 'Вид из окна',
    placeholder: 'Вид из окна',
  },
  {
    id: '8',
    type: 'text',
    name: 'Ремонт',
    placeholder: 'Ремонт',
  },
  {
    id: '9',
    type: 'text',
    name: 'Метраж жилой площади, м2',
    placeholder: 'Метраж жилой площади, м2',
  },
  {
    id: '10',
    type: 'text',
    name: 'Метраж кухни, м2',
    placeholder: 'Метраж кухни, м2',
  },
  {
    id: '11',
    type: 'text',
    name: 'Высота потолков',
    placeholder: 'Высота потолков',
  },
  {
    id: '12',
    type: 'text',
    name: 'Лифты',
    placeholder: 'Лифты',
  },
  {
    id: '13',
    type: 'text',
    name: 'Мусоропровод',
    placeholder: 'Мусоропровод',
  },
  {
    id: '14',
    type: 'text',
    name: 'Дополнительно',
    placeholder: 'Дополнительно',
  },
];

// type Props = {};

export const FilterPopup = ({ closePopup }: { closePopup: () => void }) => {
  return (
    <div className={clsx(styles.root)}>
      <div className={clsx(styles.modal)}>
        <div className={clsx(styles.modal_header)}>
          <span>Фильтр</span>
          <button type="button" onClick={closePopup}>
            <IconCloseFilter fill={'white'} />
          </button>
        </div>
        <div className={clsx(styles.modal_list)}>
          {data.map((field, index) => (
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
    </div>
  );
};
