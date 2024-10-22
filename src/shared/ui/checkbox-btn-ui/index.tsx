import React from 'react';

import { FilterItemValue } from '@/components/map/types';

import styles from './checkbox-btn-ui.module.scss';

export const CheckboxBtnUi = ({ data }: { data: FilterItemValue }) => {
  return (
    <div className={styles.root}>
      {data.value.map((item) => (
        <div key={item.id}>
          <input type="checkbox" id={item.id} />
          <label htmlFor={item.id} key={item.id}>
            <span>{item.value}</span>
          </label>
        </div>
      ))}
    </div>
  );
};
