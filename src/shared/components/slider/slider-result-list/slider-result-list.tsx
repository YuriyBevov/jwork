'use client';

import clsx from 'clsx';
import React, { ReactNode, useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Импортируем тип Swiper
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
  // Типизируем реф
  const swiperRef = useRef<SwiperType | null>(null); // Указываем, что реф может быть либо SwiperType, либо null

  const [activeSlide, setActiveSlide] = useState<number>(0);

  // Типизируем swiper в обработчике
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveSlide(swiper.activeIndex);
  };

  const handleSlideClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Переход к следующему слайду
    }
  };

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
      onSlideChange={handleSlideChange}
    >
      {React.Children.map(children, (child: ReactNode, index) => {
        // Проверяем, является ли child валидным React элементом
        if (React.isValidElement(child)) {
          return (
            <SwiperSlide
              onClick={handleSlideClick} // Обработчик клика на картинку
              className={clsx(
                styles.slide,
                activeSlide === index ? styles.activeSlide : '',
              )}
              style={{
                backgroundImage:
                  activeSlide === index ? `url(${child.props.src})` : '',
                height: '100%',
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {child}
            </SwiperSlide>
          );
        }

        // Если child не является валидным React элементом, возвращаем его как есть
        return <>{child}</>;
      })}
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
        <IconArrow width={48} height={48} fill="#111111" />
      </button>
      <button
        className={clsx(
          'slider-result-list-button-next',
          styles.slider_result_list_button,
          styles.slider_result_list_button_next,
        )}
      >
        <IconArrow width={48} height={48} fill="#111111" />
      </button>
    </Swiper>
  );
};
