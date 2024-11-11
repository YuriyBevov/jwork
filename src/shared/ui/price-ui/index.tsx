'use client';

import { Combobox, Input, useCombobox } from '@mantine/core';
import clsx from 'clsx';

import { HeroItem } from '@/components/hero/types';

import styles from '../hero-ui.module.scss';

export const PriceRangeDropdownUi = ({
  item,
  radius = 'xs',
  className,
}: {
  item?: HeroItem;
  radius?: 'xs' | 'sm' | 'lg' | 'xl';
  className?: string;
}) => {
  const combobox = useCombobox();

  return (
    <Combobox store={combobox}>
      <Combobox.Target>
        <Input
          classNames={{ input: styles.input }}
          className={clsx(className, radius && styles[`radius__${radius}`])}
          component="button"
          type="button"
          pointer
          onClick={() => combobox.toggleDropdown()}
          rightSection={<Combobox.Chevron />}
        >
          {item?.title}
        </Input>
      </Combobox.Target>

      <Combobox.Dropdown
        className={clsx(styles.dropdown, radius && styles[`radius__${radius}`])}
      >
        <div className={styles.dropdown_item}>
          <label htmlFor="">От</label>
          <input type="number" placeholder="От" />
        </div>
        <div className={styles.dropdown_item}>
          <label htmlFor="">До</label>
          <input type="number" placeholder="До" />
        </div>
      </Combobox.Dropdown>
    </Combobox>
  );
};
