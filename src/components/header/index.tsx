import React from 'react';

import {
  HeaderType_1,
  HeaderType_2,
  HeaderType_3,
  HeaderType_4,
  HeaderType_5,
  HeaderType_6,
  HeaderType_7,
} from './components';

export const Header = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <HeaderType_1 />;
    case '2':
      return <HeaderType_2 />;
    case '3':
      return <HeaderType_3 />;
    case '4':
      return <HeaderType_4 />;
    case '5':
      return <HeaderType_5 />;
    case '6':
      return <HeaderType_6 />;
    case '7':
      return <HeaderType_7 />;
    default:
      return null;
  }
};
