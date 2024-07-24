import React from 'react';

import { FooterType_1, FooterType_2 } from './components';

export const Footer = ({ layout }: { layout: string }) => {
  switch (layout) {
    case '1':
      return <FooterType_1 />;
    case '2':
      return <FooterType_2 />;
    default:
      return null;
  }
};
