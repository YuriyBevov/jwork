import React from 'react';

import { ItemDetailType_1 } from './components';

export const ItemDetail = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <ItemDetailType_1 />;
    default:
      return null;
  }
};
