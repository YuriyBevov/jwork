'use client';

import React from 'react';

// export { HeaderType_3 } from './header-type-3/index';
// export { HeaderType_4 } from './header-type-4/index';
// export { HeaderType_6 } from './header-type-6/index';
import { HeaderDTO } from '@/components/header/components/types';

import { HeaderType_1 } from './components/header-type-1/index';

export const HeaderComponent = ({
  data,
  type,
}: {
  data: HeaderDTO;
  type: string;
}) => {
  switch (type) {
    case '1':
      return <HeaderType_1 data={data} />;
    // case '2':
    //   return <HeaderType_3 />;
    // case '4':
    //   return <HeaderType_4 />;
    // case '6':
    //   return <HeaderType_6 />;
    default:
      return null;
  }
};
