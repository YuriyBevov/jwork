import React from 'react';

import { ResultListType_1 } from './components';
import { ResultListType_2 } from './components';
import { ResultListType_3 } from './components';
import { ResultListType_4 } from './components';
import { ResultListType_5 } from './components';
import { ResultListType_6 } from './components';
import { ResultListType_7 } from './components';

export const ResultList = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <ResultListType_1 />;
    case '2':
      return <ResultListType_2 />;
    case '3':
      return <ResultListType_3 />;
    case '4':
      return <ResultListType_4 />;
    case '5':
      return <ResultListType_5 />;
    case '6':
      return <ResultListType_6 />;
    case '7':
      return <ResultListType_7 />;
    default:
      return null;
  }
};
