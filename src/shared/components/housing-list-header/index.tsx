import clsx from 'clsx';
import React from 'react';

import { ByDefault } from '../../icons/housing-list/by-default';
import { FormatCardsBulleted } from '../../icons/housing-list/format-cards-bulleted';
import { FormatListBulleted } from '../../icons/housing-list/format-list-bulleted';
import styles from './housing-list-header.module.scss';

export const HousingListHeader = ({
  title,
  quantity,
  bgColor,
  borderColor,
  textColor,
  fillColor,
}: {
  title?: string;
  quantity?: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  fillColor?: string;
}) => {
  return (
    <div className={clsx(styles.root)}>
      <div className={clsx(styles.layout)}>
        <div className={clsx(styles.layout_item)}>
          <span className={clsx(styles.title)}>{title}</span>
          <span className={clsx(styles.note)}>{quantity}</span>
        </div>
        <div className={clsx(styles.layout_item)}>
          <div className={clsx(styles.sort, textColor)}>
            <span>По умолчанию</span>
            <ByDefault width={24} height={24} fill={fillColor} />
          </div>
          <div className={clsx(styles.btn_group, borderColor)}>
            <button type="button" className={clsx(styles.btn)}>
              <FormatListBulleted width={24} height={24} fill="#D1D5DB" />
              <span style={{ color: '#D1D5DB' }}>Списком</span>
            </button>
            <button type="button" className={clsx(styles.btn, bgColor)}>
              <FormatCardsBulleted width={24} height={24} fill={fillColor} />
              <span className={clsx(textColor)}>Карточками</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
