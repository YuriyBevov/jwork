'use client';

import clsx from 'clsx';
import React, { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IconArrow } from '@/shared/icons/icon-arrow';

import styles from './slider-ui.module.scss';

export const SliderUi = ({
  children,
  slidesPerView,
  spaceBetween,
}: {
  children?: React.ReactNode;
  slidesPerView: number;
  spaceBetween?: number;
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop={true}
      className={styles.root}
      pagination={{ el: '.navigation_line-pagination', clickable: true }}
      navigation={{
        nextEl: '.navigation_line-button-next',
        prevEl: '.navigation_line-button-prev',
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: slidesPerView,
        },
      }}
    >
      {React.Children.map(children, (child: ReactNode) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}

      <div className={styles.navigation}>
        <div className={styles.navigation_line}>
          <div
            className={clsx('navigation_line-pagination', styles.pagination)}
          ></div>
        </div>
        <div className={styles.navigation_line}>
          <button
            className={clsx(
              'navigation_line-button-prev',
              styles.button,
              styles.button_prev,
            )}
          >
            <IconArrow width={16} height={16} fill="#1a57db" />
          </button>
          <button
            className={clsx(
              'navigation_line-button-next',
              styles.button,
              styles.button_next,
            )}
          >
            <IconArrow width={16} height={16} fill="#1a57db" />
          </button>
        </div>
      </div>
    </Swiper>
  );
};
