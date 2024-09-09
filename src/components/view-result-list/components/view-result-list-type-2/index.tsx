'use client';

import React, { useEffect, useState } from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { ViewMode } from '@/shared/components/view-mode';

import { ResultListTypeColumn_2 } from '../../../result-list-column/components/result-list-type-column-2';
import { ResultListType_2 } from '../../../result-list/components/result-list-type-2';
import { ResultListDTO } from '../../types';

export const ViewResultListType_2 = () => {
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
        <ResultListType_2 data={data} />
      ) : (
        <ResultListTypeColumn_2 data={data} />
      )}
    </MainSectionLayout>
  );
};
