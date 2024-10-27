import React from 'react';

import { ViewResultListItemType_1 } from './components';

export const ViewResultListItem = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <ViewResultListItemType_1 />;
    default:
      return null;
  }
};
