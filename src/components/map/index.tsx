import React from 'react';

import { MapType_1 } from './components';

export const Map = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <MapType_1 />;
    default:
      return null;
  }
};
