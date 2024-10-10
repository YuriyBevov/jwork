import React from 'react';

import { ViewResultListType_1 } from './components';

export const ViewresultList = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <ViewResultListType_1 />;
    default:
      return null;
  }
};
