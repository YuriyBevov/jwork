import React from 'react';

import { StaffType_1 } from './components';
import { StaffType_2 } from './components';
import { StaffType_3 } from './components';
import { StaffType_4 } from './components';
import { StaffType_5 } from './components';
import { StaffType_6 } from './components';
import { StaffType_7 } from './components';

export const Staff = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <StaffType_1 />;
    case '2':
      return <StaffType_2 />;
    case '3':
      return <StaffType_3 />;
    case '4':
      return <StaffType_4 />;
    case '5':
      return <StaffType_5 />;
    case '6':
      return <StaffType_6 />;
    case '7':
      return <StaffType_7 />;
    default:
      return null;
  }
};
