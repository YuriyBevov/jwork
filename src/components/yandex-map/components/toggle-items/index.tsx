import React from 'react';

import styles from './toggle-sidebar.module.scss';
import { MapDataItem } from './types';

export const ToggleItems = ({ data }: { data: MapDataItem[] }) => {
  return (
    <aside className={styles.root}>
      {data?.map((item: MapDataItem) => (
        <div key={item.data.id}>
          <div className={styles.title}>{item.data.title}</div>
        </div>
      ))}
    </aside>
  );
};
