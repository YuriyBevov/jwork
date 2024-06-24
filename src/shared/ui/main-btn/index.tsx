import clsx from 'clsx';
import React from 'react';

import styles from './main-btn.module.scss';

type Props = {
  outlined?: boolean;
  bordered?: boolean;
  rounded?: 'xs' | 'lg';
  text?: string;
};

export const MainBtn: React.FC<Props> = ({
  outlined,
  rounded,
  bordered,
  text = 'Подробнее',
}) => {
  return (
    <button
      className={clsx(
        outlined ? styles.outlined : null,
        bordered ? styles.bordered : null,
        rounded === 'xs'
          ? styles.rounded_xs
          : rounded === 'lg'
            ? styles.rounded_lg
            : null,
        styles.root,
      )}
    >
      {text}
    </button>
  );
};
