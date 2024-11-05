import { Checkbox } from '@mantine/core';
import React from 'react';

import { FilterItem } from '@/components/map/types';

import styles from './checkbox-ui.module.scss';

export const CheckboxUi = ({ data }: { data: FilterItem }) => {
  return (
    <div className={styles.root}>
      {data.value.map((input, index) => (
        <Checkbox
          classNames={{
            input: styles.input,
            icon: styles.icon,
            label: styles.label,
          }}
          key={index}
          label={input.value}
          variant="outline"
        />
      ))}
    </div>
  );
};
