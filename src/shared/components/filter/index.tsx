'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

import { FilterItem, FilterItems } from '@/components/map/types';
import { IconFilter } from '@/shared/icons/icon-filter';
import { IconListType } from '@/shared/icons/icon-list-type';
import { IconSmallArrow } from '@/shared/icons/icon-small-arrow';
import { CheckboxBtnUi, CheckboxUi, RangeSliderUi } from '@/shared/ui';

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
    <div className={clsx(styles.root, className)}>
      <div
        className={clsx(
          styles.header,
          openFilter ? styles.header_active : null,
        )}
      >
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
          <div className={styles.footer}>
            <ButtonUi>Искать</ButtonUi>
          </div>
        </>
      )}
    </div>
  );
};
