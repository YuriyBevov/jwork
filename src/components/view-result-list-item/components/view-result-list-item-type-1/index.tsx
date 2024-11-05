'use client';

import React, { useEffect, useState } from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { FilterPopup } from '@/shared/components/filter-popup';
import { ResultListFilter } from '@/shared/components/result-list-filters';
import { ViewMode } from '@/shared/components/view-mode';

import { ResultListColumnItemType_1 } from '../../../result-list-column-item/components/result-list-column-item-type-1';
import { ResultListItemType_1 } from '../../../result-list-item/components/result-list-item-type-1';
import { ResultListDTO } from '../../types';

export const ViewResultListItemType_1 = () => {
  const [data, setData] = useState<ResultListDTO | null>(null);
  const [isContent, setIsContent] = useState<boolean>(true);
  const [isPopup, setIsPopup] = useState<boolean>(false);
  // Состояние для отслеживания количества видимых элементов
  const [visibleCounts, setVisibleCounts] = useState<Record<number, number>>(
    {},
  );

  // Функция для обработки нажатия кнопки "Показать ещё"
  const handleShowMore = (id: number) => {
    setVisibleCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 2) + 2,
    }));
  };

  const openPopup = () => {
    setIsPopup(true);
  };
  const closePopup = () => {
    setIsPopup(false);
  };
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data.json');
      const result = await response.json();
      setData(result.data);
    }

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Отображение загрузки, пока данные не загружены
  }

  return (
    <MainSectionLayout>
      <ResultListFilter openPopup={openPopup} />
      <ViewMode
        title="Купить квартиру Москве и Московской области"
        quantity={data?.count_blocks}
        accent={true}
        border={true}
        fillColor={'#1A56DB'}
        setIsContent={setIsContent}
        isContent={isContent}
      />
      {isContent ? (
        <ResultListItemType_1 data={data} />
      ) : (
        <ResultListColumnItemType_1
          data={data}
          handleShowMore={handleShowMore}
          visibleCounts={visibleCounts}
        />
      )}
      {isPopup && <FilterPopup closePopup={closePopup} />}
    </MainSectionLayout>
  );
};
