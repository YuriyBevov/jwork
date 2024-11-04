import { Select } from '@mantine/core';
import clsx from 'clsx';
import React from 'react';

import { HeroItem } from '@/components/hero/types';

import styles from '../hero-ui.module.scss';

export const SelectUi = ({
  radius = 'xs',
  item,
  className,
}: {
  radius?: 'xs' | 'sm' | 'lg' | 'xl';
  item: HeroItem;
  className?: string;
}) => {
  return (
    <Select
      classNames={{
        input: styles.input,
        dropdown: clsx(styles.dropdown, radius && styles[`radius__${radius}`]),
        option: styles.option,
      }}
      className={clsx(className, radius && styles[`radius__${radius}`])}
      data={
        item.content &&
        item.content.map((value) => ({
          label: value.value,
          value: value.value,
        }))
      }
      radius={styles[`radius__${radius}`]}
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
