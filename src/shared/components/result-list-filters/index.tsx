import clsx from 'clsx';
import React from 'react';

import { FilterIcon } from '../../icons/view-mode/filter-icon';
import { MainBtn } from '../main-btn';
import { MainInput } from '../main-input';
import { MainLink } from '../main-link';
import styles from './result-list-filters.module.scss';

const data = [
  {
    id: '1',
    type: 'text',
    name: 'Вторичка',
    placeholder: 'Вторичка',
  },
  {
    id: '2',
    type: 'text',
    name: 'Комнатность',
    placeholder: 'Комнатность',
  },
  {
    id: '3',
    type: 'text',
    name: 'Площадь',
    placeholder: 'Площадь',
  },
  {
    id: '4',
    type: 'text',
    name: 'Адрес',
    placeholder: 'Адрес',
  },
  {
    id: '5',
    type: 'text',
    name: 'Стоимость',
    placeholder: 'Стоимость',
  },
];

export const ResultListFilter = ({ openPopup }: { openPopup: () => void }) => {
  return (
    <div className={clsx(styles.root)}>
      <div className={clsx(styles.wrapper)}>
        <button
          type="button"
          className={clsx(styles.wrapper_popup_btn)}
          onClick={openPopup}
        >
          <FilterIcon width={24} height={24} fill="#1A56DB" />
          <span>Фильтр</span>
          <span>1</span>
        </button>
        <div className={clsx(styles.wrapper_selects)}>
          {data.map((field, index) => (
            <MainInput
              key={`${field.id}-${index}`}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              id={field.id}
            />
          ))}
        </div>
        <div className={clsx(styles.wrapper_btns)}>
          <MainLink
            text="На карте"
            icon={true}
            width={24}
            height={24}
            path="M8 10C6.9 10 6 9.1 6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8C10 9.1 9.1 10 8 10ZM14 8.2C14 4.57 11.35 2 8 2C4.65 2 2 4.57 2 8.2C2 10.54 3.95 13.64 8 17.34C12.05 13.64 14 10.54 14 8.2ZM8 0C12.2 0 16 3.22 16 8.2C16 11.52 13.33 15.45 8 20C2.67 15.45 0 11.52 0 8.2C0 3.22 3.8 0 8 0Z"
            fill="#046C4E"
            outlined={true}
          />
          <MainBtn text="Искать" />
        </div>
      </div>
    </div>
  );
};
