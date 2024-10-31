'use client';

import React from 'react';

// export { HeaderType_4 } from './header-type-4/index';
// export { HeaderType_6 } from './header-type-6/index';
import { HeaderDTO } from '@/components/header/components/types';

import { HeaderType_1 } from './components/header-type-1/index';
import { HeaderType_2 } from './components/header-type-2/index';
import { HeaderType_3 } from './components/header-type-3/index';

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
    case '2':
      return <HeaderType_2 data={data} />;
    case '3':
      return <HeaderType_3 data={data} />;
    // case '6':
    //   return <HeaderType_6 />;
    default:
      return null;
  }
};
