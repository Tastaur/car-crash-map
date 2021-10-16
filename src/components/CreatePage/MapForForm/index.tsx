import React, { FC } from 'react';
import { Map, Placemark } from 'react-yandex-maps';
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
    <div>
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
    </div>
  );
};
