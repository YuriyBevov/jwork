'use client';

import React from 'react';
import 'swiper/css';
import { Swiper } from 'swiper/react';

// import styles from './slider-ui.module.scss';

export const SliderUi = ({
  children,
  slidesPerView = 4,
  spaceBetween = 20,
}: {
  children?: React.ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
}) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop={true}
    >
      {children}
    </Swiper>
  );
};
