import React, { FC } from 'react';
import { Clusterer, Map, Placemark } from 'react-yandex-maps';
import { observer } from 'mobx-react-lite';

import { mapState } from 'globalConstants';
import { GET_CAR_CRASH_ICON_COLOR, GET_CAR_CRASH_ICON_NAME } from 'store/CarCrashEventStore/CarCrashEvent/types';
import { getCarCrashStore } from 'store/CarCrashEventStore';

import { Coordinate } from '../types';


export interface IProps {
  chosePlayMarker: (id: string) => void,
  className?: string,
}

export const MapView: FC<IProps> = observer(({ chosePlayMarker, className }) => {
  const { carCrashList } = getCarCrashStore();
  return (
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
          carCrashList.map((coordinate) => {
            return (
              <Placemark
                options={{
                  iconShadow: true,
                  iconColor: GET_CAR_CRASH_ICON_COLOR[coordinate.carCrashAffectType],
                  preset: GET_CAR_CRASH_ICON_NAME[coordinate.carCrashType],
                }}
                onCLick={() => chosePlayMarker(coordinate.id)}
                key={coordinate.id}
                geometry={coordinate.coordinate as Coordinate}
              />
            );
          })
        }
      </Clusterer>
      );
    </Map>
  );
});
