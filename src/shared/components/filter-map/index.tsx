'use client';

import clsx from 'clsx';
import { useState } from 'react';

import { Filter, FilterItem } from '@/components/map/types';
import { IconFilter } from '@/shared/icons/icon-filter';
import { IconSmallArrow } from '@/shared/icons/icon-small-arrow';
import { CheckboxBtnUi, CheckboxUi, RangeSliderUi } from '@/shared/ui';

import styles from './filter-map.module.scss';

export const FilterMap = ({ data }: { data: Filter }) => {
  const [openFilter, setOpenFilter] = useState(false);

  function blockRenderer(block: FilterItem) {
    switch (block.type) {
      case 'range':
        return <RangeSliderUi key={block.id} data={block} />;
      case 'checkbox':
        return <CheckboxBtnUi key={block.id} data={block} />;
      case 'checkbox_btn':
        return <CheckboxUi key={block.id} data={block} />;
      default:
        return null;
    }
  }

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <div className={styles.root}>
      <div
        className={clsx(
          styles.header,
          openFilter ? styles.header_active : null,
        )}
        onClick={handleOpenFilter}
      >
        <IconFilter width={24} height={24} />
        <span className={styles.title}>{data.title}</span>
        <button>
          <IconSmallArrow width={16} height={16} />
        </button>
      </div>

      {data.items
        .sort((a, b) => parseInt(a.id) - parseInt(b.id))
        .map((block: FilterItem) => blockRenderer(block))}

      {/* {openFilter && <FilterItems data={data} />} */}
    </div>
  );
};
