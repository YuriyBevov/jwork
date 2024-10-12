import React from 'react';

import { FilterDTO } from '@/components/map/types';

export const FilterItems = ({ data }: { data: FilterDTO }) => {
  return (
    <div>
      {data.items.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </div>
  );
};
