'use client';

import React from 'react';

import { HeaderDTO } from '@/components/header/components/types';

import { HeaderType_1 } from './components/header-type-1/index';
import { HeaderType_2 } from './components/header-type-2/index';
import { HeaderType_3 } from './components/header-type-3/index';
import { HeaderType_4 } from './components/header-type-4/index';
import { HeaderType_5 } from './components/header-type-5/index';
import { HeaderType_6 } from './components/header-type-6/index';
import { HeaderType_7 } from './components/header-type-7/index';

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
    case '4':
      return <HeaderType_4 data={data} />;
    case '5':
      return <HeaderType_5 data={data} />;
    case '6':
      return <HeaderType_6 data={data} />;
    case '7':
      return <HeaderType_7 data={data} />;
    default:
      return null;
  }
};
