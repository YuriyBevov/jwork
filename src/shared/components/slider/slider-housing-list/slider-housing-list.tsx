'use client';

import clsx from 'clsx';
import React, { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IconArrow } from '@/shared/icons/housing-list/icon-arrow';

import styles from './slider-housing-list.module.scss';

export const SliderHousingList = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      loop={false}
      className={styles.root}
      pagination={{ el: '.slider-housing-list-pagination', clickable: true }}
      navigation={{
        nextEl: '.slider-housing-list-button-next',
        prevEl: '.slider-housing-list-button-prev',
      }}
    >
      {React.Children.map(children, (child: ReactNode) => (
        <SwiperSlide className={styles.slide}>{child}</SwiperSlide>
      ))}
      <div
        className={clsx('slider-housing-list-pagination', styles.pagination)}
      ></div>

      <button
        className={clsx(
          'slider-housing-list-button-prev',
          styles.slider_housing_list_button,
          styles.slider_housing_list_button_prev,
        )}
      >
        <IconArrow width={48} height={48} fill="white" rect_fill="black" />
      </button>
      <button
        className={clsx(
          'slider-housing-list-button-next',
          styles.slider_housing_list_button,
          styles.slider_housing_list_button_next,
        )}
      >
        <IconArrow width={48} height={48} fill="white" rect_fill="black" />
      </button>
    </Swiper>
  );
};
