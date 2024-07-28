import clsx from 'clsx';
import React from 'react';

import styles from './main-input.module.scss';

type Props = {
  bordered?: boolean;
  rounded?: 'xs' | 'lg';
  placeholder?: string;
  type?: string;
  name?: string;
  id: string;
};

export const MainInput: React.FC<Props> = ({
  rounded,
  bordered,
  placeholder,
  name,
  id,
  type = 'text',
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={clsx(
        bordered ? styles.bordered : null,
        rounded === 'xs'
          ? styles.rounded_xs
          : rounded === 'lg'
            ? styles.rounded_lg
            : null,
        styles.root,
      )}
      placeholder={placeholder}
    />
  );
};
