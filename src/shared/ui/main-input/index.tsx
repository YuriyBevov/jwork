import clsx from 'clsx';
import React from 'react';

import styles from './main-input.module.scss';

type Props = {
  bordered?: boolean;
  rounded?: 'xs' | 'lg';
  text?: string;
  type?: string;
};

export const MainInput: React.FC<Props> = ({
  rounded,
  bordered,
  text = 'Подробнее',
  type = 'text',
}) => {
  return (
    <input
      type={type}
      className={clsx(
        bordered ? styles.bordered : null,
        rounded === 'xs'
          ? styles.rounded_xs
          : rounded === 'lg'
            ? styles.rounded_lg
            : null,
        styles.root,
      )}
      placeholder={text}
    />
  );
};
