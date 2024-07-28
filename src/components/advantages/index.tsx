import React from 'react';

import { AdvantagesType_1 } from './components';

export const Advantages = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <AdvantagesType_1 />;

    default:
      return null;
  }
};
