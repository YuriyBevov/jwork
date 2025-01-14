'use client';

import Script from 'next/script';
import { useState } from 'react';

import { ToggleItems } from './components/toggle-items/';
import data from './data.json';
import style from './yandex-map.module.scss';

export const YandexMap = () => {
  const yandexUrl = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAP_KEY}&lang=ru_RU`;

  const [clickedData, setClickedData] = useState([]);

  const handleClusterClick = (e) => {
    // const target = e.get('target');
    // const objects = target.properties.get('geoObjects');
    console.log('CLICKED', e.get('target'));

    // if (objects) {
    //   const clickedObjects = objects.map((obj) => {
    //     return {
    //       data: obj.options.get('data'),
    //       coordinates: obj.geometry.getCoordinates(),
    //     };
    //   });

    //   setClickedData(clickedObjects);
    // } else {
    //   setClickedData([
    //     {
    //       data: target.options.get('data'),
    //       coordinates: target.geometry.getCoordinates(),
    //     },
    //   ]);
    // }
  };

  // формируем коллекцию объектов карты
  const features = data.placemarks.map((element) => {
    // console.log(element.coords, element.options.price);
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: element.coords,
      },
      data: {
        order: Number(element.options.price.replaceAll(' ', '')),
      },
    };
  });

  const collection = {
    type: 'FeatureCollection',
    features,
  };

  return (
    <section className={style.root}>
      <ToggleItems data={clickedData} />

      <main className={style.wrapper} id="map"></main>

      <Script
        src={yandexUrl}
        onReady={() => {
          ymaps.ready(init);

          function init() {
            // определяем объект кары
            const myMap = new ymaps.Map(
              'map',
              {
                center: [55.751574, 37.573856],
                zoom: 10,
              },
              {
                maxZoom: 16,
              },
            );

            // определяем шаблон вывода суммы в иконке кластера
            // const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            //   "<div style='background-color: #000000; color: #ffffff; display: flex; width:200px; height: fit-content;'>{{ orderSum }}</div>",
            // );

            const MyIconLayout = ymaps.templateLayoutFactory.createClass(
              "<div style='background-color: red; color: #ffffff; display: flex; width:50px; height: fit-content;'>{{orderSum}}</div>",
            );

            // определяем ObjectManager
            const objectManager = new ymaps.ObjectManager({
              clusterize: true,
              groupByCoordinates: false,
              gridSize: 64,
              hasBalloon: false,
              // clusterIconContentLayout: MyIconContentLayout,
              clusterIconLayout: MyIconLayout,
            });

            // добаляем коллекцию объектов в манагер
            objectManager.add(collection);

            // добавляем манагер на карту для вывода объектов
            myMap.geoObjects.add(objectManager);

            // проходимся по всем видимым кластерам, производим суммирование data.order во всех объектах и записываем полученное значение в options кластера
            objectManager.clusters.each((cluster) => {
              let orderSum = 0;
              cluster.features.forEach((pin) => {
                orderSum += parseFloat(pin.data.order);
              });
            });

            // тоже самое что и выше только при изменении кластера
            objectManager.clusters.events.add('add', (evt) => {
              console.log('ADDED', evt, features);
              let orderSum = 777;
              // console.log(evt.get('child'));
              // let orderSum = 0;
              evt.get('child').features.forEach((pin) => {
                console.log(pin);
                orderSum += parseFloat(pin.data.order);
                pin.orderSum = orderSum;
              });

              // objectManager.clusters.setClusterOptions(evt.get('child').id, {
              //   orderSum,
              // });

              console.log(orderSum);
            });

            // обрабатываем клик по кластеру
            objectManager.clusters.events.add('click', handleClusterClick);
          }
        }}
      />
    </section>
  );
};
