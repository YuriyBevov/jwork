import React from 'react';

import { FooterType_1 } from '@/components/footer/components';
import { HeaderType_1 } from '@/components/header/components';
import { ViewResultListItemType_1 } from '@/components/view-result-list-item/components';

const ItemListPage = () => {
  return (
    <>
      <HeaderType_1 />
      <main>
        <ViewResultListItemType_1 />
      </main>
      <FooterType_1 />
    </>
  );
};

export default ItemListPage;
