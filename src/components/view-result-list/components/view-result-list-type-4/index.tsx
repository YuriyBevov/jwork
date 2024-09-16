'use client';

import React, { useEffect, useState } from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { ViewMode } from '@/shared/components/view-mode';

import { ResultListTypeColumn_4 } from '../../../result-list-column/components/result-list-type-column-4';
import { ResultListType_4 } from '../../../result-list/components/result-list-type-4';
import { ResultListDTO } from '../../types';

export const ViewResultListType_4 = () => {
  const [data, setData] = useState<ResultListDTO | null>(null);
  const [isContent, setIsContent] = useState<boolean>(true);
  // Состояние для отслеживания количества видимых элементов
  const [visibleCounts, setVisibleCounts] = useState<Record<number, number>>(
    {},
  );
  const [visibleCountsLocations, setVisibleCountsLocations] = useState<
    Record<number, number>
  >({});

  // Функция для обработки нажатия кнопки "Показать ещё"
  const handleShowMore = (id: number) => {
    setVisibleCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 2) + 2,
    }));
  };

  // Функция для обработки нажатия кнопки "Показать ещё"
  const handleShowMoreLocation = (id: number) => {
    setVisibleCountsLocations((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 1) + 1,
    }));
  };

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
        <ResultListType_4 data={data} />
      ) : (
        <ResultListTypeColumn_4
          data={data}
          handleShowMore={handleShowMore}
          handleShowMoreLocation={handleShowMoreLocation}
          visibleCounts={visibleCounts}
          visibleCountsLocations={visibleCountsLocations}
        />
      )}
    </MainSectionLayout>
  );
};
