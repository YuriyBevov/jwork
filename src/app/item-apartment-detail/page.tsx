import React from 'react';

import { FooterType_1 } from '@/components/footer/components';
import { HeaderType_1 } from '@/components/header/components';
import { ItemDetailType_1 } from '@/components/item-detail/components';

const ItemApartmentsPage = () => {
  return (
    <>
      <HeaderType_1 />
      <main>
        <ItemDetailType_1 />
      </main>
      <FooterType_1 />
    </>
  );
};

export default ItemApartmentsPage;
