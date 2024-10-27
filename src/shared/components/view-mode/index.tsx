import clsx from 'clsx';
import React from 'react';

import { ByDefault } from '../../icons/view-mode/by-default';
import { FormatCardsBulleted } from '../../icons/view-mode/format-cards-bulleted';
import { FormatListBulleted } from '../../icons/view-mode/format-list-bulleted';
import styles from './view-mode.module.scss';

export const ViewMode = ({
  title,
  quantity,
  fillColor,
  accent,
  border,
  setIsContent,
  isContent,
}: {
  title?: string;
  quantity?: number;
  fillColor?: string;
  accent?: boolean;
  border?: boolean;
  setIsContent: React.Dispatch<React.SetStateAction<boolean>>;
  isContent: boolean;
}) => {
  return (
    <div className={clsx(styles.root)}>
      <div className={clsx(styles.layout)}>
        <div className={clsx(styles.layout_item)}>
          <span className={clsx(styles.title)}>{title}</span>
          <span className={clsx(styles.note)}>{quantity}</span>
        </div>
        <div className={clsx(styles.layout_item)}>
          <div
            className={clsx(styles.sort, accent ? styles.color_primary : null)}
          >
            <span>По умолчанию</span>
            <ByDefault width={24} height={24} fill={fillColor} />
          </div>
          <div
            className={clsx(styles.btn_group, border ? styles.border : null)}
          >
            <button
              type="button"
              onClick={() => setIsContent(true)}
              className={clsx(styles.btn, isContent ? styles.outlined : null)}
            >
              <FormatListBulleted
                width={24}
                height={24}
                fill={isContent ? fillColor : '#D1D5DB'}
              />
              <span
                className={clsx(isContent ? styles.color_primary : '#D1D5DB')}
              >
                Списком
              </span>
            </button>
            <button
              type="button"
              onClick={() => setIsContent(false)}
              className={clsx(styles.btn, !isContent ? styles.outlined : null)}
            >
              <FormatCardsBulleted
                width={24}
                height={24}
                fill={!isContent ? fillColor : '#D1D5DB'}
              />
              <span
                className={clsx(!isContent ? styles.color_primary : '#D1D5DB')}
              >
                Карточками
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
