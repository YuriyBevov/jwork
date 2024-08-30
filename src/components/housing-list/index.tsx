import React from 'react';

import { HousingListType_1 } from './components';
import { HousingListType_2 } from './components';
import { HousingListType_3 } from './components';
import { HousingListType_4 } from './components';
import { HousingListType_5 } from './components';
import { HousingListType_6 } from './components';
import { HousingListType_7 } from './components';

export const HousingList = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <HousingListType_1 />;
    case '2':
      return <HousingListType_2 />;
    case '3':
      return <HousingListType_3 />;
    case '4':
      return <HousingListType_4 />;
    case '5':
      return <HousingListType_5 />;
    case '6':
      return <HousingListType_6 />;
    case '7':
      return <HousingListType_7 />;
    default:
      return null;
  }
};
