import React, { FC } from 'react';
import { Clusterer, Map, Placemark, YMaps } from 'react-yandex-maps';

import { CarCrashEvent } from '../../../store/CarCrashEventStore/CarCrashEvent/CarCrashEvent';
import { Coordinate } from '../types';
import { GET_CAR_CRASH_ICON_COLOR, GET_CAR_CRASH_ICON_NAME } from '../../../store/CarCrashEventStore/CarCrashEvent/types';


export interface IProps {
  allMarks: Array<CarCrashEvent>,
  setPickedCoords: (coords: Coordinate) => void,
  chosePlayMarker: (id: string) => void,
}

const mapState = {
  center: [55.75, 37.57],
  zoom: 13,
  behaviors: ['default', 'scrollZoom'],
};

export const MapView: FC<IProps> = ({ allMarks, setPickedCoords, chosePlayMarker }) => {
  return (
    <div>
      <YMaps
        query={{
          lang: 'ru_RU',
          apikey: '0fed4748-3e5a-4a8c-8fb3-1b146724f891',
          load: 'package.full',
        }}
      >
        <div>
          <Map
            defaultState={mapState}
            onClick={(event) => {
              setPickedCoords(event.get('coords'));
            }}
          >
            <Clusterer
              options={{
                clusterIconLayout: 'default#pieChart',
                clusterIconPieChartRadius: 20,
                clusterIconPieChartCoreRadius: 10,
                clusterIconPieChartStrokeWidth: 1,
                clusterDisableClickZoom: true,
                clusterHideIconOnBalloonOpen: false,
                geoObjectHideIconOnBalloonOpen: false,
              }}
            >
              {
                allMarks?.map((coordinate) => {
                  return (
                    <Placemark
                      options={{
                        iconShadow: true,
                        iconColor: GET_CAR_CRASH_ICON_COLOR[coordinate.carCrashAffectType],
                        preset: GET_CAR_CRASH_ICON_NAME[coordinate.carCrashType],
                      }}
                      properties={{
                        hintContent: coordinate.amountPeopleToShow,
                      }}
                      onCLick={() => chosePlayMarker(coordinate.id)}
                      key={coordinate.id}
                      geometry={coordinate.coordinate as Coordinate}
                    />
                  );
                })
              }
            </Clusterer>
          </Map>
        </div>
      </YMaps>
    </div>
  );
};
