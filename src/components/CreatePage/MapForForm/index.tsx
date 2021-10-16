import React, { FC } from 'react';
import { Map, Placemark } from 'react-yandex-maps';

import { Coordinate } from '../../EventListPage/MapWithCoordinates/types';
import { mapState } from '../../../globalConstants';


interface IProps {
  coord: Coordinate | null,
  setCoordinate: (coord: Coordinate) => void,
}

export const MapForForm: FC<IProps> = ({
  setCoordinate,
  coord,
}) => {
  return (
    <Map
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
  );
};
