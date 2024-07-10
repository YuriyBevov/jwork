'use client';

import React from 'react';
import { SwiperSlide } from 'swiper/react';

export const SliderUiElement = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return <SwiperSlide>{children}</SwiperSlide>;
};
