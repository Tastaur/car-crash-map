import React, { FC } from 'react';
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import { Typography } from 'antd';

import { mapState } from 'globalConstants';

import { Coordinate } from '../../EventListPage/MapWithCoordinates/types';
import * as styles from './styles.less';
import { IRequiredFields } from '../../CarCrashEventForm/utils';


interface IProps {
  coord: Coordinate | null,
  setCoordinate: (coord: Coordinate) => void,
  error: IRequiredFields | null,
}

export const MapForForm: FC<IProps> = ({
  setCoordinate,
  coord,
  error,
}) => {
  return (
    <YMaps
      query={{
        lang: 'ru_RU',
        apikey: '0fed4748-3e5a-4a8c-8fb3-1b146724f891',
      }}
    >
      <Map
        className={styles.default.map}
        onClick={e => setCoordinate(e.get('coords'))}
        defaultState={mapState}
      >
        {
          coord ? (
            <Placemark
              onDragEnd={e => setCoordinate(e.originalEvent.target.geometry._coordinates)}
              options={{
                iconShadow: true,
                draggable: true,
              }}
              geometry={coord}
            />
          ) : null
        }
      </Map>
      {error ? <Typography.Text type="danger">{error.coordinate}</Typography.Text> : null}
    </YMaps>
  );
};
