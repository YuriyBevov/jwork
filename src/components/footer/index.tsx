import React from 'react';

import {
  FooterType_1,
  FooterType_2,
  FooterType_3,
  FooterType_4,
  FooterType_5,
  FooterType_6,
  FooterType_7,
} from './components';

export const Footer = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <FooterType_1 />;
    case '2':
      return <FooterType_2 />;
    case '3':
      return <FooterType_3 />;
    case '4':
      return <FooterType_4 />;
    case '5':
      return <FooterType_5 />;
    case '6':
      return <FooterType_6 />;
    case '7':
      return <FooterType_7 />;
    default:
      return null;
  }
};
