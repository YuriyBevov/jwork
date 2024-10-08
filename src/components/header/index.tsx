import React from 'react';

import { HeaderType_1, HeaderType_3 } from './components';

export const Header = ({ layout }: { layout: string }) => {
  switch (layout) {
    case '1':
      return <HeaderType_1 />;
    case '2':
      return <HeaderType_3 />;
    default:
      return null;
  }
};
