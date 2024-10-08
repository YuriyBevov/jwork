import clsx from 'clsx';
import React, { ReactNode } from 'react';

import styles from './metros-popup.module.scss';

interface MetrosPopupProps {
  children: ReactNode; // Проп для передачи содержимого
}

export const MetrosPopup = ({ children }: MetrosPopupProps) => {
  return (
    <div className={clsx(styles.root)}>
      <div className={clsx(styles.modal)}>{children}</div>
    </div>
  );
};
