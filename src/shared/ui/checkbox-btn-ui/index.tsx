import { useId } from '@mantine/hooks';
import React from 'react';

import { FilterItem } from '@/components/map/types';

import styles from './checkbox-btn-ui.module.scss';

export const CheckboxBtnUi = ({ data }: { data: FilterItem }) => {
  const uniqueId = useId();

  return (
    <div className={styles.root}>
      {data.value.map((input, index) => (
        <div key={index}>
          <input type="checkbox" id={`${uniqueId}-${index}`} />
          <label htmlFor={`${uniqueId}-${index}`}>{input.value}</label>
        </div>
      ))}
    </div>
  );
};
