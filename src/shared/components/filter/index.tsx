'use client';

import clsx from 'clsx';
import { useState } from 'react';

import { FilterItem, FilterItems } from '@/components/map/types';
import { IconFilter } from '@/shared/icons/icon-filter';
import { IconSmallArrow } from '@/shared/icons/icon-small-arrow';
import { CheckboxBtnUi, CheckboxUi, RangeSliderUi } from '@/shared/ui';

import styles from './filter.module.scss';

export const Filter = ({ data }: { data: FilterItems }) => {
  const [openFilter, setOpenFilter] = useState(false);

  function blockRenderer(block: FilterItem) {
    switch (block.type) {
      case 'range':
        return <RangeSliderUi key={block.id} data={block} />;
      case 'checkbox_btn':
        return <CheckboxBtnUi key={block.id} data={block} />;
      case 'checkbox':
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
      {openFilter &&
        data.items
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((block: FilterItem) => (
            <div className={styles.block} key={block.id}>
              <div className={styles.title}>
                <span>{block.title}</span>
                <IconSmallArrow width={12} height={7} />
              </div>
              {blockRenderer(block)}
            </div>
          ))}
    </div>
  );
};
