import React, { FC } from 'react';
import { Clusterer, Map, Placemark, YMaps } from 'react-yandex-maps';

import { mapState } from 'globalConstants';
import { GET_CAR_CRASH_ICON_COLOR, GET_CAR_CRASH_ICON_NAME } from 'store/CarCrashEventStore/CarCrashEvent/types';
import { CarCrashEvent } from 'store/CarCrashEventStore/CarCrashEvent/CarCrashEvent';

import { Coordinate } from '../types';


export interface IProps {
  chosePlayMarker: (id: string) => void,
  className?: string,
  carCrashList: Array<CarCrashEvent>,
}

export const MapView: FC<IProps> = ({ chosePlayMarker, className, carCrashList }) => {
  return (
    <YMaps
      query={{
        lang: 'ru_RU',
        apikey: '0fed4748-3e5a-4a8c-8fb3-1b146724f891',
        load: 'package.full',
      }}
    >
      <Map
        className={className}
        defaultState={mapState}
      >
        <Clusterer
          options={{
            gridSize: 1024,
            clusterIconLayout: 'default#pieChart',
            clusterIconPieChartRadius: 25,
            clusterIconPieChartCoreRadius: 15,
            clusterIconPieChartStrokeWidth: 1,
            clusterDisableClickZoom: false,
            clusterHideIconOnBalloonOpen: false,
            geoObjectHideIconOnBalloonOpen: false,
            hasBalloon: false,
            hasHint: false,
          }}
        >
          {
            carCrashList.map((event) => {
              return (
                <Placemark
                  options={{
                    iconShadow: true,
                    iconColor: GET_CAR_CRASH_ICON_COLOR[event.carCrashAffectType],
                    preset: GET_CAR_CRASH_ICON_NAME[event.carCrashType],
                  }}
                  onCLick={() => chosePlayMarker(event.id)}
                  key={event.id}
                  geometry={event.coordinate as Coordinate}
                />
              );
            })
          }
        </Clusterer>
        );
      </Map>
    </YMaps>
  );
};
