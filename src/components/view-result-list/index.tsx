import React from 'react';

import { ViewResultListType_1 } from './components';
import { ViewResultListType_2 } from './components';
import { ViewResultListType_3 } from './components';
import { ViewResultListType_4 } from './components';
import { ViewResultListType_5 } from './components';
import { ViewResultListType_6 } from './components';
import { ViewResultListType_7 } from './components';

export const ViewresultList = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <ViewResultListType_1 />;
    case '2':
      return <ViewResultListType_2 />;
    case '3':
      return <ViewResultListType_3 />;
    case '4':
      return <ViewResultListType_4 />;
    case '5':
      return <ViewResultListType_5 />;
    case '6':
      return <ViewResultListType_6 />;
    case '7':
      return <ViewResultListType_7 />;
    default:
      return null;
  }
};
