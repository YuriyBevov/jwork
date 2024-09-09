'use client';

import React, { useEffect, useState } from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { ViewMode } from '@/shared/components/view-mode';

import { ResultListTypeColumn_1 } from '../../../result-list-column/components/result-list-type-column-1';
import { ResultListType_1 } from '../../../result-list/components/result-list-type-1';
import { ResultListDTO } from '../../types';

export const ViewResultListType_4 = () => {
  const [data, setData] = useState<ResultListDTO | null>(null);
  const [isContent, setIsContent] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data.json');
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Отображение загрузки, пока данные не загружены
  }

  return (
    <MainSectionLayout align={data.titleAlign}>
      <ViewMode
        title={data.title}
        quantity={data.quantity}
        accent={true}
        border={true}
        fillColor={'#1A56DB'}
        setIsContent={setIsContent}
        isContent={isContent}
      />
      {isContent ? (
        <ResultListType_1 data={data} />
      ) : (
        <ResultListTypeColumn_1 data={data} />
      )}
    </MainSectionLayout>
  );
};
