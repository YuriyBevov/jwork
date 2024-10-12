'use client';

import clsx from 'clsx';
import { useState } from 'react';

import { FilterDTO } from '@/components/map/types';
import { IconFilter } from '@/shared/icons/icon-filter';
import { IconSmallArrow } from '@/shared/icons/icon-small-arrow';

import { FilterItems } from '../filter-items';
import styles from './filter-map.module.scss';

export const FilterMap = ({ data }: { data: FilterDTO }) => {
  const [openFilter, setOpenFilter] = useState(false);

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
      {openFilter && <FilterItems data={data} />}
    </div>
  );
};
