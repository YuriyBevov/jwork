import { MultiSelect } from '@mantine/core';
import clsx from 'clsx';
import React from 'react';

import { HeroItem } from '@/components/hero/types';

import styles from '../hero-ui.module.scss';

export const MultiSelectUi = ({
  title = '1,2 комнаты',
  radius = 'xs',
  item,
  className,
}: {
  title?: string;
  radius?: 'xs' | 'sm' | 'lg' | 'xl';
  item: HeroItem;
  className?: string;
}) => {
  return (
    <MultiSelect
      placeholder={title}
      checkIconPosition="right"
      classNames={{
        input: styles.input,
        pillsList: styles.pillsList,
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
      comboboxProps={{
        dropdownPadding: 12,
      }}
    />
  );
};
