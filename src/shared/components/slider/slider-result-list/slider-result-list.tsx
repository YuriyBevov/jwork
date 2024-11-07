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
  slidesPerView,
  slidesPerViewXs = 1,
  slidesPerViewMobile = 1,
  slidesPerViewTablet = 2,
  slidesPerViewTabletLg = 2,
  spaceBetween,
}: {
  children?: React.ReactNode;
  slidesPerView?: number;
  slidesPerViewXs?: number;
  slidesPerViewMobile?: number;
  slidesPerViewTablet?: number;
  slidesPerViewTabletLg?: number;

  spaceBetween?: number;
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      loop={false}
      className={styles.root}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      pagination={{
        el: '.slider-result-list-pagination',
        clickable: true,
        // dynamicBullets: true,
        // dynamicMainBullets: 3,
      }}
      navigation={{
        nextEl: '.slider-result-list-button-next',
        prevEl: '.slider-result-list-button-prev',
      }}
      breakpoints={{
        534: {
          slidesPerView: slidesPerViewXs,
        },
        768: {
          slidesPerView: slidesPerViewMobile,
        },
        960: {
          slidesPerView: slidesPerViewTablet,
        },
        1360: {
          slidesPerView: slidesPerViewTabletLg,
        },
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
