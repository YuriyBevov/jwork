'use client';

import Script from 'next/script';
import { useState } from 'react';

import { ToggleItems } from './components/toggle-items/';
import data from './data.json';
import style from './yandex-map.module.scss';

export const YandexMap = () => {
  const yandexUrl = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAP_KEY}&lang=ru_RU`;

  const [clickedData, setClickedData] = useState([]);

  const handleClusterClick = (objects) => {
    // const target = e.get('target');
    // const objects = target.properties.get('geoObjects');
    // console.log('CLICKED', e.get('target'));

    if (objects) {
      const clickedObjects = objects.map((obj) => {
        console.log(obj);
        return {
          data: obj.data,
          coordinates: obj.geometry.coordinates,
        };
      });

      // setClickedData(clickedObjects);
    }
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
    console.log(element);
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: element.coords,
      },
      data: {
        order: Number(element.options.price.replaceAll(' ', '')),

        id: 'test',
        data: {
          1: 'test1',
        },
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
            const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              "<div class='lw-custom-icon' style='background-color: #000000; width: 200px; height: 80px; color: #ffffff; display: flex; width:200px; height: fit-content;'>{{ orderSum }}</div>",
            );

            // const MyIconLayout = ymaps.templateLayoutFactory.createClass(
            //   "<div style='background-color: red; color: #ffffff; display: flex; width:50px; height: fit-content;'>{{orderSum|default:'Title'}}</div>",
            // );
            // let orderSum = 0;
            // const MyIconLayout = ymaps.templateLayoutFactory.createClass(
            //   "<div style='background-color: red; color: #ffffff; display: flex; width:150px; height: fit-content;'>{{orderSum|default:'title'}}</div>",
            // );

            // const MyIconLayout2 = ymaps.templateLayoutFactory.createClass(
            //   "<div class='CUSTOM-ICON' style='border: 2px solid blue;background-color: blue; color: #ffffff; display: flex; width:150px; height: fit-content;'>icon</div>",
            // );

            // определяем ObjectManager
            const objectManager = new ymaps.ObjectManager({
              clusterize: true,
              groupByCoordinates: false,
              gridSize: 64,
              hasBalloon: false,
              clickable: true,
              viewportMargin: 128,
              // clusterIconContentLayout: MyIconContentLayout,
              // clusterIconLayout: MyIconContentLayout,
            });

            // добаляем коллекцию объектов в манагер
            objectManager.add(collection);
            // добавляем манагер на карту для вывода объектов
            myMap.geoObjects.add(objectManager);

            // проходимся по всем видимым кластерам, производим суммирование data.order во всех объектах и записываем полученное значение в options кластера
            objectManager.clusters.each((cluster) => {
              let orderSum = 0;
              cluster.features.forEach((placemark) => {
                orderSum += parseFloat(placemark.data.order);
              });

              cluster.orderSum = orderSum;
            });

            objectManager.clusters.events.add('add', function () {
              objectManager.clusters.each((cluster) => {
                let orderSum = 0;
                cluster.features.forEach((placemark) => {
                  orderSum += parseFloat(placemark.data.order);
                });

                cluster.orderSum = orderSum;
              });
            });

            objectManager.objects.events.add(['click'], (evt) => {
              console.log('CLICK по плейсмарку', evt.get('coords'));
            });

            objectManager.clusters.events.add(['click'], function (evt) {
              const cluster = objectManager.clusters.getById(
                evt.get('objectId'),
              );
              const objects = cluster.properties.geoObjects;

              handleClusterClick(objects);
            });

            // обрабатываем клик по кластеру
            // objectManager.clusters.events.add('click', handleClusterClick);
          }
        }}
      />
    </section>
  );
};
