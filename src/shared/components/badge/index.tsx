import clsx from 'clsx';
import React from 'react';

import styles from './badge.module.scss';

type Props = {
  outlined?: boolean;
  text: string;
};

export const Badge: React.FC<Props> = ({ outlined, text }) => {
  return (
    <div className={clsx(outlined ? styles.outlined : null, styles.root)}>
      {text}
    </div>
  );
};
