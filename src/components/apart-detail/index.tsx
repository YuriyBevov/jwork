import React from 'react';

import { ApartDetailType_1 } from './components';

export const ApartDetail = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <ApartDetailType_1 />;
    default:
      return null;
  }
};
