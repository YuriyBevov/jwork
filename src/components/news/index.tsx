import React from 'react';

import { NewsType_1 } from './components';
import { NewsType_2 } from './components';
import { NewsType_3 } from './components';
import { NewsType_4 } from './components';
import { NewsType_5 } from './components';
import { NewsType_6 } from './components';
import { NewsType_7 } from './components';

export const News = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <NewsType_1 />;
    case '2':
      return <NewsType_2 />;
    case '3':
      return <NewsType_3 />;
    case '4':
      return <NewsType_4 />;
    case '5':
      return <NewsType_5 />;
    case '6':
      return <NewsType_6 />;
    case '7':
      return <NewsType_7 />;
    default:
      return null;
  }
};
