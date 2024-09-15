import React from 'react';

import { BlogDetail_1 } from './components';
import { BlogDetail_2 } from './components';
import { BlogDetail_6 } from './components';

// import { BlogType_3 } from './components';
// import { BlogType_4 } from './components';
// import { BlogType_5 } from './components';
// import { BlogType_6 } from './components';
// import { BlogType_7 } from './components';

export const BlogDetail = ({ templateID }: { templateID: string }) => {
  switch (templateID) {
    case '1':
      return <BlogDetail_1 />;
    case '2':
      return <BlogDetail_2 />;
    // case '3':
    //   return <BlogType_3 />;
    // case '4':
    //   return <BlogType_4 />;
    // case '5':
    //   return <BlogType_5 />;
    case '6':
      return <BlogDetail_6 />;
    // case '7':
    //   return <BlogType_7 />;
    default:
      return null;
  }
};
