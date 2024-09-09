'use client';

import clsx from 'clsx';
import React, { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IconArrow } from '@/shared/icons/view-mode/icon-arrow';

import styles from './slider-result-list.module.scss';

export const SliderResultList = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      loop={false}
      className={styles.root}
      pagination={{ el: '.slider-result-list-pagination', clickable: true }}
      navigation={{
        nextEl: '.slider-result-list-button-next',
        prevEl: '.slider-result-list-button-prev',
      }}
    >
      {React.Children.map(children, (child: ReactNode) => (
        <SwiperSlide className={styles.slide}>{child}</SwiperSlide>
      ))}
      <div
        className={clsx(
          'slider-result-list-pagination',
          styles.swiper_pagination,
        )}
      ></div>

      <button
        className={clsx(
          'slider-result-list-button-prev',
          styles.slider_result_list_button,
          styles.slider_result_list_button_prev,
        )}
      >
        <IconArrow width={48} height={48} fill="white" rect_fill="black" />
      </button>
      <button
        className={clsx(
          'slider-result-list-button-next',
          styles.slider_result_list_button,
          styles.slider_result_list_button_next,
        )}
      >
        <IconArrow width={48} height={48} fill="white" rect_fill="black" />
      </button>
    </Swiper>
  );
};
