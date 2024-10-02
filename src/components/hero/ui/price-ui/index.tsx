'use client';

import { Combobox, Input, useCombobox } from '@mantine/core';

import styles from '../hero-ui.module.scss';

export const PriceRangeDropdownUi = () => {
  const combobox = useCombobox();

  return (
    <>
      <Combobox store={combobox}>
        <Combobox.Target>
          <Input
            classNames={{ input: styles.input }}
            style={{ width: '209px' }}
            component="button"
            type="button"
            pointer
            onClick={() => combobox.toggleDropdown()}
            rightSection={<Combobox.Chevron />}
          >
            Стоимость
          </Input>
        </Combobox.Target>

        <Combobox.Dropdown className={styles.dropdown}>
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
    </>
  );
};
