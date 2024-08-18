import React from 'react';

import { ServicesType_1 } from './components';
import { ServicesType_2 } from './components';
import { ServicesType_3 } from './components';

// import { ServicesType_4 } from './components';
// import { ServicesType_5 } from './components';
// import { ServicesType_6 } from './components';
// import { ServicesType_7 } from './components';

export const Services = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <ServicesType_1 />;
    case '2':
      return <ServicesType_2 />;
    case '3':
      return <ServicesType_3 />;
    // case '4':
    //   return <ServicesType_4 />;
    // case '5':
    //   return <ServicesType_5 />;
    // case '6':
    //   return <ServicesType_6 />;
    // case '7':
    //   return <ServicesType_7 />;
    default:
      return null;
  }
};
