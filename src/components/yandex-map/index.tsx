'use client';

import Script from 'next/script';

import style from './yandex-map.module.scss';

export const YandexMap = () => {
  const yandexUrl = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAP_KEY}&lang=ru_RU`;

  const placemarks = [
    {
      coordinates: [55.661574, 37.573856],
      hintContent: 'Собственный значок метки с контентом',
      balloonContent: 'А эта — новогодняя',
      iconContent: '1456',
    },
    {
      coordinates: [55.751574, 37.573856],
      hintContent: 'Вторая метка',
      balloonContent: 'Это вторая метка',
      iconContent: '2',
    },
  ];

  return (
    <>
      <div className={style.root} id="map"></div>

      <Script
        src={yandexUrl}
        onReady={() => {
          const ymaps = window.ymaps;
          ymaps.ready(function () {
            const myMap = new ymaps.Map('map', {
                center: [55.751574, 37.573856],
                zoom: 8,
              }),
              MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="display: flex; align-items: center; justify-content: center; width: 80px; height: 80px;font-size: 24px; color: #1A56DB; font-weight: bold;">$[properties.iconContent]</div>',
              );

            placemarks.forEach((placemarkData) => {
              const placemark = new ymaps.Placemark(
                placemarkData.coordinates,
                {
                  hintContent: placemarkData.hintContent,
                  balloonContent: placemarkData.balloonContent,
                  iconContent: placemarkData.iconContent,
                },
                {
                  iconLayout: 'default#imageWithContent',
                  iconImageHref: '/assets/images/placemark.svg',
                  iconImageSize: [80, 80],
                  iconImageOffset: [0, 0],
                  iconContentOffset: [0, 0],
                  iconContentLayout: MyIconContentLayout,
                },
              );
              myMap.geoObjects.add(placemark);
            });
          });
        }}
      />
    </>
  );
};
