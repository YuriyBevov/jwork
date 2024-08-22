import clsx from 'clsx';
import React from 'react';

import styles from './badge.module.scss';

type Props = {
  outlined?: boolean;
  text: string;
  accent?: boolean;
  muted?: boolean;
};

export const Badge: React.FC<Props> = ({ outlined, text, accent, muted }) => {
  return (
    <div
      className={clsx(
        outlined ? styles.outlined : null,
        accent ? styles.color_primary : null,
        muted ? styles.color_muted : null,
        styles.root,
      )}
    >
      {text}
    </div>
  );
};
