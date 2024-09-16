import React from 'react';

import { ResultListTypeColumn_1 } from './components';
import { ResultListTypeColumn_2 } from './components';
import { ResultListTypeColumn_3 } from './components';
import { ResultListTypeColumn_4 } from './components';
import { ResultListTypeColumn_5 } from './components';
import { ResultListTypeColumn_6 } from './components';
import { ResultListTypeColumn_7 } from './components';

export const ResultListColumn = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <ResultListTypeColumn_1 />;
    case '2':
      return <ResultListTypeColumn_2 />;
    case '3':
      return <ResultListTypeColumn_3 />;
    case '4':
      return <ResultListTypeColumn_4 />;
    case '5':
      return <ResultListTypeColumn_5 />;
    case '6':
      return <ResultListTypeColumn_6 />;
    case '7':
      return <ResultListTypeColumn_7 />;
    default:
      return null;
  }
};
