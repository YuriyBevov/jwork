import React from 'react';

import { ResultListColumnType_1 } from './components';

export const ResultListColumn = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <ResultListColumnType_1 />;
    case '2':
    default:
      return null;
  }
};
