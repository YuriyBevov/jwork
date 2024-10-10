import clsx from 'clsx';
import React from 'react';

import styles from './main-btn.module.scss';

type Props = {
  outlined?: boolean;
  bordered?: boolean;
  simple?: boolean;
  rounded?: 'xs' | 'lg';
  text?: string;
  type?: 'link' | 'submit' | 'button';
  className?: string;
  displayBtn?: boolean;
};

export const MainBtn: React.FC<Props> = ({
  outlined,
  rounded,
  bordered,
  simple,
  text = 'Подробнее',
  className,
  displayBtn,
}) => {
  return (
    <button
      className={clsx(
        outlined ? styles.outlined : null,
        bordered ? styles.bordered : null,
        displayBtn ? styles.displayBtn : null,
        simple ? styles.simple : null,
        rounded === 'xs'
          ? styles.rounded_xs
          : rounded === 'lg'
            ? styles.rounded_lg
            : null,
        styles.root,
        className,
      )}
    >
      {text}
    </button>
  );
};
