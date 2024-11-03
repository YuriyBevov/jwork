import { Autocomplete } from '@mantine/core';
import clsx from 'clsx';

import { HeroItem } from '@/components/hero/types';
import { IconSearch } from '@/shared/icons/icon-set-1/icon_search';

import styles from '../hero-ui.module.scss';

export const AutocompleteUi = ({
  radius = 'xs',
  item,
  className,
}: {
  radius?: 'xs' | 'sm' | 'lg' | 'xl';
  item: HeroItem;
  className?: string;
}) => {
  return (
    <Autocomplete
      placeholder={item.title}
      rightSection={<IconSearch width={15} height={15} fill="#000" />}
      classNames={{
        input: styles.input,
        dropdown: clsx(styles.dropdown, radius && styles[`radius__${radius}`]),
        option: styles.option,
      }}
      className={clsx(className, radius && styles[`radius__${radius}`])}
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
