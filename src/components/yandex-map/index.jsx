'use client';

/* global ymaps */
import clsx from 'clsx';
import Script from 'next/script';
import { useEffect, useState } from 'react';

import { Filter } from '@/shared/components/filter';
import { IconClose } from '@/shared/icons/icon-close';

import { ToggleItems } from './components/toggle-items/';
import data from './data.json';
import style from './yandex-map.module.scss';

export const YandexMap = () => {
  const yandexUrl = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAP_KEY}&lang=ru_RU`;

  const [clickedData, setClickedData] = useState([]);

  const handleObjectClick = (objects) => {
    if (objects && objects.length > 0) {
      setClickedData(objects);
    } else {
      setClickedData([objects]);
    }
  };

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (clickedData.length > 0) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [clickedData]);

  const closeAsideHandler = () => {
    setOpen(false);
    setClickedData([]);
  };

  return (
    <section className={style.root}>
      {clickedData.length > 0 && (
        <aside className={clsx(open ? style.open : '', style.aside)}>
          <div onClick={closeAsideHandler} className={style.close}>
            <IconClose />
          </div>
          <ToggleItems data={clickedData} />
        </aside>
      )}
      {clickedData.length === 0 && <Filter data={data?.filter} />}

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
                  controls: [],
                  // behaviors: [], //'drag',
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
                clusterDisableClickZoom: true,
              });

            myMap.geoObjects.add(objectManager);

            setTimeout(() => {
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

              handleObjectClick(objects);
            };

            objectManager.objects.events.add(['click'], onObjectEvent);
            objectManager.clusters.events.add(['click'], onClusterEvent);

            // ZOOM-CONTROL
            let ZoomLayout = ymaps.templateLayoutFactory.createClass(
              //Шаблон html кнопок зума
              `<div class='zoom-btns'>
                  <button id='zoom-in' class='zoom-btn zoom-btn-in' aria-label='Увеличить масштаб'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
                    </svg>
                  </button>
                  <button id='zoom-out' class='zoom-btn zoom-btn-out' aria-label='Уменьшить масштаб'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 13H5V11H19V13Z"/>
                    </svg>
                  </button>
                </div>`,
              {
                // Переопределяем методы макета, чтобы выполнять дополнительные действия
                // при построении и очистке макета.
                build: function () {
                  // Вызываем родительский метод build.
                  ZoomLayout.superclass.build.call(this);

                  // Привязываем функции-обработчики к контексту и сохраняем ссылки
                  // на них, чтобы потом отписаться от событий.
                  this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                  this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

                  // Начинаем слушать клики на кнопках макета.
                  let zoomInBtn = document.getElementById('zoom-in');
                  let zoomOutBtn = document.getElementById('zoom-out');

                  zoomInBtn.addEventListener('click', this.zoomInCallback);
                  zoomOutBtn.addEventListener('click', this.zoomOutCallback);
                },

                clear: function () {
                  let zoomInBtn = document.getElementById('zoom-in');
                  let zoomOutBtn = document.getElementById('zoom-out');
                  // Снимаем обработчики кликов.
                  zoomInBtn.removeEventListener('click', this.zoomInCallback);
                  zoomOutBtn.removeEventListener('click', this.zoomOutCallback);
                  // Вызываем родительский метод clear.
                  ZoomLayout.superclass.clear.call(this);
                },

                zoomIn: function () {
                  myMap.balloon.close();

                  let map = this.getData().control.getMap();
                  map.setZoom(map.getZoom() + 1, { checkZoomRange: true });
                },

                zoomOut: function () {
                  myMap.balloon.close();

                  let map = this.getData().control.getMap();
                  map.setZoom(map.getZoom() - 1, { checkZoomRange: true });
                },
              },
            );

            let zoomControl = new ymaps.control.ZoomControl({
              options: {
                layout: ZoomLayout,
                position: { right: '30px', top: '50vh' },
              },
            });
            myMap.controls.add(zoomControl);
          }
        }}
      />
    </section>
  );
};
