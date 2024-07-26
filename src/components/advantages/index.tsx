import React from 'react';

import {
  AdvantagesType_1,
  AdvantagesType_2,
  AdvantagesType_3,
  AdvantagesType_4,
  AdvantagesType_5,
  AdvantagesType_6,
  AdvantagesType_7,
} from './components';

export const Advantages = ({ layout }: { layout: string }) => {
  switch (layout) {
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
