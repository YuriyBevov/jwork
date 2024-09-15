import React from 'react';

import { ResultLisDetailstType_1 } from './components';
import { ResultLisDetailstType_2 } from './components';
import { ResultLisDetailstType_3 } from './components';
import { ResultLisDetailstType_4 } from './components';
import { ResultLisDetailstType_5 } from './components';
import { ResultLisDetailstType_6 } from './components';
import { ResultLisDetailstType_7 } from './components';

export const ResultListDetails = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <ResultLisDetailstType_1 />;
    case '2':
      return <ResultLisDetailstType_2 />;
    case '3':
      return <ResultLisDetailstType_3 />;
    case '4':
      return <ResultLisDetailstType_4 />;
    case '5':
      return <ResultLisDetailstType_5 />;
    case '6':
      return <ResultLisDetailstType_6 />;
    case '7':
      return <ResultLisDetailstType_7 />;
    default:
      return null;
  }
};
