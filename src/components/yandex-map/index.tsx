'use client';

import Script from 'next/script';
import React from 'react';

import style from './yandex-map.module.scss';

export const YandexMap = () => {
  return (
    <>
      <div className={style.root} id="map"></div>

      <Script
        src="https://api-maps.yandex.ru/2.1/?apikey=43d53367-d7a5-4974-bf78-21f39213e203&lang=ru_RU"
        onReady={() => {
          const ymaps = window.ymaps;
          ymaps.ready(function () {
            const myMap = new ymaps.Map('map', {
                center: [55.751574, 37.573856],
                zoom: 9,
              }),
              // Создаём макет содержимого.
              MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #000; font-weight: bold;">$[properties.iconContent]</div>',
              ),
              myPlacemark = new ymaps.Placemark(
                myMap.getCenter(),
                {
                  hintContent: 'Собственный значок метки',
                  balloonContent: 'Это красивая метка',
                },
                {
                  // Опции.
                  // Необходимо указать данный тип макета.
                  iconLayout: 'default#image',
                  // Своё изображение иконки метки.
                  iconImageHref: 'images/myIcon.gif',
                  // Размеры метки.
                  iconImageSize: [30, 42],
                  // Смещение левого верхнего угла иконки относительно
                  // её "ножки" (точки привязки).
                  iconImageOffset: [-5, -38],
                },
              ),
              myPlacemarkWithContent = new ymaps.Placemark(
                [55.661574, 37.573856],
                {
                  hintContent: 'Собственный значок метки с контентом',
                  balloonContent: 'А эта — новогодняя',
                  iconContent: '12',
                },
                {
                  // Опции.
                  // Необходимо указать данный тип макета.
                  iconLayout: 'default#imageWithContent',
                  // Своё изображение иконки метки.
                  iconImageHref: 'images/ball.png',
                  // Размеры метки.
                  iconImageSize: [48, 48],
                  // Смещение левого верхнего угла иконки относительно
                  // её "ножки" (точки привязки).
                  iconImageOffset: [-24, -24],
                  // Смещение слоя с содержимым относительно слоя с картинкой.
                  iconContentOffset: [15, 15],
                  // Макет содержимого.
                  iconContentLayout: MyIconContentLayout,
                },
              );

            myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
          });
        }}
      />
    </>
  );
};
