import React from 'react';

import {
  HeaderType_1,
  HeaderType_2,
  HeaderType_3, // HeaderType_4,
  // HeaderType_6,
} from './components';

export const Header = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <HeaderType_1 />;
    case '2':
      return <HeaderType_2 />;
    case '3':
      return <HeaderType_3 />;
    // case '6':
    //   return <HeaderType_6 />;
    default:
      return null;
  }
};
