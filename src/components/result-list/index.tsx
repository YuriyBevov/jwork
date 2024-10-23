import React from 'react';

import { ResultListType_1 } from './components';

export const ResultList = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <ResultListType_1 />;
    default:
      return null;
  }
};
