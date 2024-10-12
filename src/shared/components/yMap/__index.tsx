'use client';

import {
  Clusterer,
  Map,
  Placemark,
  YMaps, // useYMaps,
} from '@pbe/react-yandex-maps';
import React from 'react';

import styles from './map.module.scss';

export const YMap = () => {
  <YMaps query={{ load: 'package.full' }}>
    <Map
      defaultState={{
        center: [55.751574, 37.573856],
        zoom: 5,
      }}
      className={styles.componentMap}
    >
      <Clusterer
        options={{
          // preset: 'default#imageWithContent',
          // preset: 'islands#circleDotIcon',
          groupByCoordinates: false,
          // iconLayout: layout,
        }}
      >
        <Placemark
          geometry={[55.451574, 37.573856]}
          modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          options={{
            hasBalloon: false,

            // iconLayout: `<div class="ymaps-icon-content-layout">$[properties.iconContent]</div>'`,
          }}
          properties={{
            iconCaption: 'от 14 млн. руб.',
            // hintContent: 'hit',
          }}
        />
        <Placemark geometry={[55.751574, 37.573856]} />
      </Clusterer>
    </Map>
  </YMaps>;
};
