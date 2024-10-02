import { Autocomplete } from '@mantine/core';

import { IconSearch } from '@/shared/icons/icon-set-1/icon_search';

import { HeroItem } from '../../types';
import styles from '../hero-ui.module.scss';

export const AutocompleteUi = ({ item }: { item: HeroItem }) => {
  return (
    <Autocomplete
      placeholder={item.title}
      rightSection={<IconSearch width={15} height={15} fill="#000" />}
      classNames={{
        input: styles.input,
        dropdown: styles.dropdown,
        option: styles.option,
      }}
      style={{ width: '209px' }}
      data={
        item.content &&
        item.content.map((contentItem) => ({
          label: contentItem.value,
          value: contentItem.value,
        }))
      }
      comboboxProps={{
        shadow: 'md',
      }}
    />
  );
};
