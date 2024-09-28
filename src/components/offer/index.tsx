import React from 'react';

import { OfferType_1 } from './components';
import { OfferType_2 } from './components';
import { OfferType_3 } from './components';
import { OfferType_4 } from './components';
import { OfferType_5 } from './components';
import { OfferType_6 } from './components';
import { OfferType_7 } from './components';

export const Offer = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <OfferType_1 />;
    case '2':
      return <OfferType_2 />;
    case '3':
      return <OfferType_3 />;
    case '4':
      return <OfferType_4 />;
    case '5':
      return <OfferType_5 />;
    case '6':
      return <OfferType_6 />;
    case '7':
      return <OfferType_7 />;
    default:
      return null;
  }
};
