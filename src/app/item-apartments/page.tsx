import React from 'react';

import { ApartDetailType_1 } from '@/components/apart-detail/components';
import { FooterType_1 } from '@/components/footer/components';
import { HeaderType_1 } from '@/components/header/components';

const ItemApartmentDetailPage = () => {
  return (
    <>
      <HeaderType_1 />
      <main>
        <ApartDetailType_1 />
      </main>
      <FooterType_1 />
    </>
  );
};

export default ItemApartmentDetailPage;
