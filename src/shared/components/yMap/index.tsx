'use client';

import { Clusterer, Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import React from 'react';

import styles from './map.module.scss';

export const YMap = () => {
  const plm = [
    { pos: [55.451574, 37.573456], caption: 'от 7 млн' },
    { pos: [55.451574, 37.593856], caption: 'от 15 млн' },
    { pos: [55.151574, 37.573856], caption: 'от 9 млн. руб.' },
  ];
  return (
    <YMaps
      query={{
        load: 'package.full',
        apikey: 'e1dab60f-d712-4098-b4f4-b3aa11594356&lang=ru_RU',
      }}
    >
      <Map
        defaultState={{
          center: [55.751574, 37.573856],
          zoom: 5,
        }}
        width={'100%'}
        height={'100dvh'}
        className={styles.componentMap}
        modules={['templateLayoutFactory', 'layout.ImageWithContent']}
      >
        <Clusterer
          options={{
            // preset: 'default#imageWithContent',
            // preset: 'islands#circleDotIcon',
            groupByCoordinates: false,
            // iconLayout: layout,
          }}
        >
          {plm.map((pl, i) => (
            <Placemark
              key={i}
              geometry={pl.pos}
              options={{
                hasBalloon: false,
                // iconLayout: 'default#imageWithContent',
                // iconImageSize: [50, 50],
                // iconImageHref: `https://img.icons8.com/ios-filled/2x/marker-y.png`,
                // iconContentLayout: layout,
                // iconContentSize: [100, 100],
                // iconContentOffset: [10, 10],
              }}
              properties={{
                iconCaption: pl.caption,
              }}
            />
          ))}
        </Clusterer>
      </Map>
    </YMaps>
  );
};
