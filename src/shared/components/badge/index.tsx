import clsx from 'clsx';
import React from 'react';

import styles from './badge.module.scss';

type Props = {
  outlined?: boolean;
  text: string;
  accent?: boolean;
};

export const Badge: React.FC<Props> = ({ outlined, text, accent }) => {
  return (
    <div
      className={clsx(
        outlined ? styles.outlined : null,
        accent ? styles.color_primary : null,
        styles.root,
      )}
    >
      {text}
    </div>
  );
};
