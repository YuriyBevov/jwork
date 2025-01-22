'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React, { useState } from 'react';

import {
  FilterItem,
  FilterItemSelect,
  FilterItems,
} from '@/components/map/types';
import { IconFilter } from '@/shared/icons/icon-filter';
import { IconListType } from '@/shared/icons/icon-list-type';
import { IconSmallArrow } from '@/shared/icons/icon-small-arrow';
import {
  AutocompleteUi,
  CheckboxBtnUi,
  CheckboxUi,
  MultiSelectUi,
  RangeSliderUi,
  SelectUi,
} from '@/shared/ui';

import { ButtonUi } from '../button';
import styles from './filter.module.scss';

export const Filter = ({
  data,
  className,
}: {
  data: FilterItems;
  className?: string;
}) => {
  const [openFilter, setOpenFilter] = useState(false);

  const [activeIds, setActiveIds] = useState<string[]>([]);

  function blockRenderer(block: FilterItem) {
    switch (block.type) {
      case 'range':
        return <RangeSliderUi key={block.id} data={block} />;
      case 'checkbox_btn':
        return <CheckboxBtnUi key={block.id} data={block} />;
      case 'checkbox':
        return <CheckboxUi key={block.id} data={block} />;
      case 'select':
        return <SelectUi className={styles.select} item={block} />;
      case 'multi_select':
        return (
          <MultiSelectUi classNameInput={styles.multi_input} item={block} />
        );
      case 'search':
        return <AutocompleteUi item={block} />;

      default:
        return null;
    }
  }

  const filterStateHandler = () => {
    setOpenFilter(!openFilter);
  };

  const toggleActiveId = (id: string) => {
    if (activeIds.includes(id)) {
      setActiveIds(activeIds.filter((activeId) => activeId !== id));
    } else {
      setActiveIds([...activeIds, id]);
    }
  };

  return (
    <div className={clsx(styles.root, className, openFilter && styles.open)}>
      <div className={clsx(styles.header, openFilter && styles.header_active)}>
        <div className={styles.opener} onClick={filterStateHandler}>
          <IconFilter width={32} height={32} />
          <span className={styles.opener_count}>5</span>
          <span className={styles.opener_title}>{data.title}</span>
        </div>
        <Link href="#" className={styles.view_toggler}>
          <IconListType />
          <span>Списком</span>
        </Link>
      </div>
      {openFilter && (
        <>
          <div className={styles.content}>
            <div className={styles.selects}>
              {data.select.map((item: FilterItemSelect) => (
                <React.Fragment key={item.id}>
                  {blockRenderer(item as FilterItem)}
                </React.Fragment>
              ))}
            </div>
            {data.items
              .sort((block, blocks) => parseInt(block.id) - parseInt(blocks.id))
              .map((block: FilterItem) => (
                <div className={clsx(styles.block)} key={block.id}>
                  <div
                    onClick={() => toggleActiveId(block.id)}
                    className={clsx(
                      activeIds.includes(block.id) ? styles.active : null,
                      styles.title,
                    )}
                  >
                    <span>{block.title}</span>
                    <IconSmallArrow width={12} height={7} />
                  </div>
                  <div className={styles.content}>{blockRenderer(block)}</div>
                </div>
              ))}
          </div>
          <div className={styles.footer}>
            <ButtonUi>Искать</ButtonUi>
          </div>
        </>
      )}
    </div>
  );
};
