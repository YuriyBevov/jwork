import clsx from 'clsx';
import React from 'react';

import styles from './main-link.module.scss';

type Props = {
  outlined?: boolean;
  bordered?: boolean;
  simple?: boolean;
  icon?: boolean;
  rounded?: 'xs' | 'lg';
  text?: string;
  link?: string;
  type?: 'link' | 'submit' | 'button';
  width?: number;
  height?: number;
  fill?: string;
  path?: string;
};

export const MainLink: React.FC<Props> = ({
  outlined,
  rounded,
  bordered,
  simple,
  link,
  text = 'Подробнее',
  width,
  height,
  fill,
  path,
  icon,
}) => {
  return (
    <a
      href={link ? link : '#'}
      className={clsx(
        outlined ? styles.outlined : null,
        bordered ? styles.bordered : null,
        simple ? styles.simple : null,
        rounded === 'xs'
          ? styles.rounded_xs
          : rounded === 'lg'
            ? styles.rounded_lg
            : null,
        styles.root,
      )}
    >
      {icon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          fill="none"
        >
          <path fill={fill} d={path} />
        </svg>
      )}
      {text}
    </a>
  );
};
