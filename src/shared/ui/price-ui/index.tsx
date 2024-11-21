'use client';

import { Combobox, Input, useCombobox } from '@mantine/core';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

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

  const [title, setTitle] = useState(item?.title);
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'from') {
      setFromValue(value);
    } else if (name === 'to') {
      setToValue(value);
    }
  };

  useEffect(() => {
    if (fromValue || toValue) {
      setTitle(`${fromValue} - ${toValue}`);
    } else {
      setTitle(item?.title);
    }
  }, [fromValue, toValue, item?.title]);

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
          {title}
        </Input>
      </Combobox.Target>

      <Combobox.Dropdown
        className={clsx(
          styles.dropdown,
          className,
          radius && styles[`radius__${radius}`],
        )}
      >
        <div className={styles.dropdown_item}>
          <label htmlFor="">От</label>
          <input
            type="number"
            placeholder="От"
            name="from"
            value={fromValue}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.dropdown_item}>
          <label htmlFor="">До</label>
          <input
            type="number"
            placeholder="До"
            name="to"
            value={toValue}
            onChange={handleInputChange}
          />
        </div>
      </Combobox.Dropdown>
    </Combobox>
  );
};
