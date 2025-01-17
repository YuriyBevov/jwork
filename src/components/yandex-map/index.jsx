'use client';

import Script from 'next/script';
import { useState } from 'react';

import { ToggleItems } from './components/toggle-items/';
import data from './data.json';
import style from './yandex-map.module.scss';

export const YandexMap = () => {
  const yandexUrl = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAP_KEY}&lang=ru_RU`;

  // const [clickedData, setClickedData] = useState([]);

  const handleObjectClick = (object) => {
    console.log('ДАННЫЕ ОБЪЕКТА ИЛИ ОБЪЕКТОВ:', object);
    // if (object) {
    //   return {
    //     data: object.data,
    //     coordinates: object.geometry.coordinates,
    //   };
    // }
  };

  return (
    <section className={style.root}>
      {/* <ToggleItems data={clickedData} /> */}
      <main className={style.wrapper} id="map"></main>

      <Script
        src={yandexUrl}
        onReady={() => {
          ymaps.ready(init);

          function init() {
            var myMap = new ymaps.Map(
                'map',
                {
                  center: [55.76, 37.64],
                  zoom: 10,
                },
                {
                  searchControlProvider: 'yandex#search',
                  maxZoom: 16,
                },
              ),
              objectManager = new ymaps.ObjectManager({
                // Чтобы метки начали кластеризоваться, выставляем опцию.
                clusterize: true,
                geoObjectOpenBalloonOnClick: false,
                clusterOpenBalloonOnClick: false,
                groupByCoordinates: false,
                gridSize: 64,
                hasBalloon: false,
                clickable: true,
                viewportMargin: 128,
              });

            myMap.geoObjects.add(objectManager);

            setTimeout(() => {
              console.log(data, 'типо пришло с сервера...');
              objectManager.add(data.placemarks);
            }, 500);

            const onObjectEvent = (evt) => {
              const object = objectManager.objects.getById(evt.get('objectId'));
              handleObjectClick(object);
            };

            const onClusterEvent = (evt) => {
              const cluster = objectManager.clusters.getById(
                evt.get('objectId'),
              );
              const objects = cluster.properties.geoObjects;

              objects.map((object) => {
                handleObjectClick(object);
              });
            };

            objectManager.objects.events.add(['click'], onObjectEvent);
            objectManager.clusters.events.add(['click'], onClusterEvent);
          }
        }}
      />
    </section>
  );
};
