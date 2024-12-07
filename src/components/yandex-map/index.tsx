'use client';

import React from 'react';
import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultFeaturesLayer,
  YMapDefaultMarker,
  YMapDefaultSchemeLayer,
} from 'ymap3-components';

import { location as LOCATION, apiKey } from './helpers';
import style from './yandex-map.module.scss';

export const YandexMap = () => {
  return (
    <YMapComponentsProvider apiKey={apiKey}>
      <YMap className={style.root} location={LOCATION}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
        <YMapDefaultMarker coordinates={LOCATION.center} />
      </YMap>
    </YMapComponentsProvider>
  );
};
