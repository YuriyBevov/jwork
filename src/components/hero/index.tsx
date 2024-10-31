import React from 'react';

import { getLocalData } from '@/lib/localdata';

import { HeroType_1, HeroType_2 } from './components';
import { HeroDTO } from './types';

export const Hero = async ({ templateID }: { templateID: string }) => {
  const data: HeroDTO = await getLocalData(
    'src/components/hero/components/data.json',
  );

  switch (templateID) {
    case '1':
      return <HeroType_1 data={data} />;
    case '2':
      return <HeroType_2 data={data} />;
    default:
      return null;
  }
};
