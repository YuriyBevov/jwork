import React from 'react';

import { AboutType_1 } from './components';
import { AboutType_2 } from './components';
import { AboutType_3 } from './components';
import { AboutType_4 } from './components';
import { AboutType_5 } from './components';
import { AboutType_6 } from './components';
import { AboutType_7 } from './components';

export const About = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <AboutType_1 />;
    case '2':
      return <AboutType_2 />;
    case '3':
      return <AboutType_3 />;
    case '4':
      return <AboutType_4 />;
    case '5':
      return <AboutType_5 />;
    case '6':
      return <AboutType_6 />;
    case '7':
      return <AboutType_7 />;
    default:
      return null;
  }
};
