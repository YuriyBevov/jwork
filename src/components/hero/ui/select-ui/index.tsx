import { Select } from '@mantine/core';
import React from 'react';

import { HeroItem } from '@/components/hero/types';

import styles from '../hero-ui.module.scss';

export const SelectUi = ({ item }: { item: HeroItem }) => {
  return (
    <Select
      style={{ width: '251px' }}
      classNames={{
        input: styles.input,
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
      checkIconPosition="right"
      defaultValue={item.content?.[0].value}
      allowDeselect={false}
      comboboxProps={{
        shadow: 'md',
        dropdownPadding: 12,
      }}
    />
  );
};
