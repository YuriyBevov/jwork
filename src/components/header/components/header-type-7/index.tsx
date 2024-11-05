import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { HeaderComponent } from '@/shared/components/headerComponent';

import { HeaderDTO } from '../types';

export const HeaderType_7 = async () => {
  const data: HeaderDTO = await getLocalData(
    'src/components/header/components/data.json',
  );

  return <HeaderComponent data={data} type={'7'} />;
};
