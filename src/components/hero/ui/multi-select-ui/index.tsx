import { MultiSelect } from '@mantine/core';
import React from 'react';

import { HeroItem } from '../../types';
import styles from '../hero-ui.module.scss';

export const MultiSelectUi = ({ item }: { item: HeroItem }) => {
  return (
    <MultiSelect
      placeholder="1,2 комнаты"
      checkIconPosition="right"
      style={{ width: '150px' }}
      classNames={{
        input: styles.input,
        pillsList: styles.pillsList,
        dropdown: styles.dropdown,
        option: styles.option,
      }}
      data={
        item.content &&
        item.content.map((value) => ({
          label: value.value,
          value: value.value,
        }))
      }
      comboboxProps={{
        dropdownPadding: 12,
      }}
    />
  );
};
