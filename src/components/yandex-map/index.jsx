'use client';

import Script from 'next/script';

import data from './data.json';
import style from './yandex-map.module.scss';

export const YandexMap = () => {
  const yandexUrl = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAP_KEY}&lang=ru_RU`;

  return (
    <>
      <div className={style.root} id="map"></div>

      <Script
        src={yandexUrl}
        onReady={() => {
          const ymaps = window.ymaps;
          ymaps.ready(function () {
            var myMap = new ymaps.Map(
                'map',
                {
                  center: data.center,
                  zoom: data.zoom,
                  behaviors: ['default', 'scrollZoom'],
                },
                {
                  searchControlProvider: 'yandex#search',
                  maxZoom: data.maxZoom,
                },
              ),
              /**
               * Создадим кластеризатор, вызвав функцию-конструктор.
               * Список всех опций доступен в документации.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Clusterer.xml#constructor-summary
               */
              clusterer = new ymaps.Clusterer({
                /**
                 * Через кластеризатор можно указать только стили кластеров,
                 * стили для меток нужно назначать каждой метке отдельно.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/option.presetStorage.xml
                 */
                preset: 'islands#invertedGreenClusterIcons',
                /**
                 * Ставим true, если хотим кластеризовать только точки с одинаковыми координатами.
                 */
                groupByCoordinates: false,
                /**
                 * Опции кластеров указываем в кластеризаторе с префиксом "cluster".
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ClusterPlacemark.xml
                 */
                // clusterDisableClickZoom: true,
                // clusterHideIconOnBalloonOpen: false,
                // geoObjectHideIconOnBalloonOpen: false,
                hasBalloon: false,
                // clusterDisableClickZoom: true,
                zoomMargin: 100,
              }),
              /**
               * Функция возвращает объект, содержащий данные метки.
               * Поле данных clusterCaption будет отображено в списке геообъектов в балуне кластера.
               * Поле balloonContentBody - источник данных для контента балуна.
               * Оба поля поддерживают HTML-разметку.
               * Список полей данных, которые используют стандартные макеты содержимого иконки метки
               * и балуна геообъектов, можно посмотреть в документации.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/GeoObject.xml
               */
              // getPointData = function (index) {
              //   return {
              //     // balloonContentHeader:
              //     //   '<font size=3><b><a target="_blank" href="https://yandex.ru">БАЛУН</a></b></font>',
              //     // balloonContentBody:
              //     //   '<p>Ваше имяв: <input name="login"></p><p>Телефон в формате 2xxx-xxx:  <input></p><p><input type="submit" value="Отправить"></p>',
              //     // balloonContentFooter:
              //     //   '<font size=1>Информация предоставлена: </font> балуном <strong>метки ' +
              //     //   index +
              //     //   '</strong>',
              //     // clusterCaption: 'метка <strong>' + index + '</strong>',
              //   };
              // },
              /**
               * Функция возвращает объект, содержащий опции метки.
               * Все опции, которые поддерживают геообъекты, можно посмотреть в документации.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/GeoObject.xml
               */

              geoObjects = [];

            /**
             * Данные передаются вторым параметром в конструктор метки, опции - третьим.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark.xml#constructor-summary
             */

            data.placemarks.forEach((placemark, i) => {
              geoObjects[i] = new ymaps.Placemark(
                placemark.coords,
                {},
                {
                  preset: 'islands#greenCircleIcon',
                  htmlContent: placemark.options,
                },
              );
            });
            // for (var i = 0, len = points.length; i < len; i++) {
            //   geoObjects[i] =
            // }

            /**
             * Можно менять опции кластеризатора после создания.
             */
            // clusterer.options.set({
            //   gridSize: 80,
            //   clusterDisableClickZoom: false, // отменяем проваливание в кластер при клике
            // });

            /**
             * В кластеризатор можно добавить javascript-массив меток (не геоколлекцию) или одну метку.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Clusterer.xml#add
             */
            clusterer.add(geoObjects);
            myMap.geoObjects.add(clusterer);

            clusterer.events.add('click', function (e) {
              console.log('Клик на кластер', myMap.getZoom());
              const target = e.get('target');
              const objects = target.properties.get('geoObjects');

              if (objects) {
                console.log('CLUSTER', objects);
                objects.forEach((obj) => {
                  console.log(obj.options.get('htmlContent'));
                  console.log(obj.geometry.getCoordinates());
                  console.log(myMap.getZoom() === data.maxZoom);
                });
              } else {
                console.log(target.options.get('htmlContent'));
              }
              // setTimeout(() => {
              //   let zoom = myMap.getZoom();
              //   console.log(zoom);
              //   zoom > 18 ? (zoom = 18) : zoom;

              //   myMap.setZoom(zoom);
              // }, 100);

              // myMap.setZoom(16).then(() => {
              //   // myMap.setCenter(e.get('target').geometry.getCoordinates());
              //   // myMap.checkZoomRange();
              // });
              // myMap.setCenter(e.get('target').geometry.getCoordinates());
            });

            /**
             * Спозиционируем карту так, чтобы на ней были видны все объекты.
             */

            // myMap.setBounds(clusterer.getBounds(), {
            //   checkZoomRange: true,
            // });
          });
        }}
      />
    </>
  );
};
