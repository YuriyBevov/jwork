import React from 'react';

import { AdvantagesType_1 } from './components';
import { AdvantagesType_2 } from './components';
import { AdvantagesType_3 } from './components';
import { AdvantagesType_4 } from './components';
import { AdvantagesType_5 } from './components';
import { AdvantagesType_6 } from './components';
import { AdvantagesType_7 } from './components';

export const Advantages = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <AdvantagesType_1 />;
    case '2':
      return <AdvantagesType_2 />;
    case '3':
      return <AdvantagesType_3 />;
    case '4':
      return <AdvantagesType_4 />;
    case '5':
      return <AdvantagesType_5 />;
    case '6':
      return <AdvantagesType_6 />;
    case '7':
      return <AdvantagesType_7 />;
    default:
      return null;
  }
};
