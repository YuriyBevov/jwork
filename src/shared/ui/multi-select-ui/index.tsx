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
  classNameInput,
}: {
  title?: string;
  radius?: 'xs' | 'sm' | 'lg' | 'xl';
  item: HeroItem;
  className?: string;
  classNameInput?: string;
}) => {
  return (
    <MultiSelect
      placeholder={title}
      checkIconPosition="right"
      classNames={{
        input: clsx(styles.input, classNameInput),
        pillsList: styles.pillsList,
        dropdown: clsx(
          styles.dropdown,
          className,
          radius && styles[`radius__${radius}`],
        ),
        option: clsx(styles.option, className),
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
