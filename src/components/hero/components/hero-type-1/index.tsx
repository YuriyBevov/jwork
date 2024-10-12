import React from 'react';

import { HeaderType_1 } from '@/components/header/components';
import { getLocalData } from '@/lib/localdata';
import { HeroTab } from '@/shared/components/hero-tab';
import {
  AutocompleteUi,
  MultiSelectUi,
  PriceRangeDropdownUi,
  SelectUi,
} from '@/shared/ui';

import { HeroDTO, HeroItem } from '../../types';
import styles from '../hero.module.scss';

export const HeroType_1 = async () => {
  const data: HeroDTO = await getLocalData(
    'src/components/hero/components/data.json',
  );

  const selectItem = (item: HeroItem) => {
    switch (item.type) {
      case 'select':
        return <SelectUi className={styles.select} item={item} />;
      case 'multi_select':
        return <MultiSelectUi item={item} />;
      case 'search':
        return <AutocompleteUi item={item} />;
      case 'price_range':
        return <PriceRangeDropdownUi />;
      default:
        return null;
    }
  };

  return (
    <>
      <HeaderType_1 />
      <HeroTab data={data} selectItem={selectItem} />
    </>
  );
};
