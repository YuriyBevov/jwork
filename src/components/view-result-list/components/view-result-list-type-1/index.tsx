'use client';

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { FilterPopup } from '@/shared/components/filter-popup';
import { ResultListFilter } from '@/shared/components/result-list-filters';
import { ViewMode } from '@/shared/components/view-mode';

import { ResultListColumnType_1 } from '../../../result-list-column/components/result-list-column-type-1';
import { ResultListType_1 } from '../../../result-list/components/result-list-type-1';
import { ResultListDTO } from '../../types';
import styles from '../view-result-list.module.scss';

export const ViewResultListType_1 = () => {
  const [data, setData] = useState<ResultListDTO | null>(null);
  const [isContent, setIsContent] = useState<boolean>(true);
  const [isPopup, setIsPopup] = useState<boolean>(false);
  // Состояние для отслеживания количества видимых элементов
  const [visibleCounts, setVisibleCounts] = useState<Record<number, number>>(
    {},
  );
  const [visibleCountsAlt, setVisibleCountsAlt] = useState<
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
  const handleShowMoreAlt = (id: number) => {
    setVisibleCountsAlt((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 4) + 4,
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
    return <div className={clsx(styles.loading)}>Loading...</div>; // Отображение загрузки, пока данные не загружены
  }

  return (
    <MainSectionLayout>
      <ResultListFilter openPopup={openPopup} />
      <div className={clsx(styles.breadcrumb)}>
        <span>Главная</span>
        <span>/</span>
        <span>Жилые комплексы</span>
      </div>
      <ViewMode
        title="Жилые комплексы"
        quantity={data?.count_blocks}
        accent={true}
        border={true}
        fillColor={'#1A56DB'}
        setIsContent={setIsContent}
        isContent={isContent}
      />
      {isContent ? (
        <ResultListType_1
          data={data}
          visibleCounts={visibleCountsAlt}
          handleShowMore={handleShowMoreAlt}
        />
      ) : (
        <ResultListColumnType_1
          data={data}
          handleShowMore={handleShowMore}
          visibleCounts={visibleCounts}
        />
      )}
      {isPopup && <FilterPopup closePopup={closePopup} />}
    </MainSectionLayout>
  );
};
