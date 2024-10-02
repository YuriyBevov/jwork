import React from 'react';

import { ResultLisDetailstAltType_1 } from './components';
import { ResultLisDetailstAltType_2 } from './components';
import { ResultLisDetailstAltType_3 } from './components';
import { ResultLisDetailstAltType_4 } from './components';
import { ResultLisDetailstAltType_5 } from './components';
import { ResultLisDetailstAltType_6 } from './components';
import { ResultLisDetailstAltType_7 } from './components';

export const ResultListDetailsAlt = ({
  templateID,
}: {
  templateID: string;
}) => {
  switch (templateID) {
    case '1':
      return <ResultLisDetailstAltType_1 />;
    case '2':
      return <ResultLisDetailstAltType_2 />;
    case '3':
      return <ResultLisDetailstAltType_3 />;
    case '4':
      return <ResultLisDetailstAltType_4 />;
    case '5':
      return <ResultLisDetailstAltType_5 />;
    case '6':
      return <ResultLisDetailstAltType_6 />;
    case '7':
      return <ResultLisDetailstAltType_7 />;
    default:
      return null;
  }
};
