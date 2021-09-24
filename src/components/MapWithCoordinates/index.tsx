import React, { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { MapView } from './MapView';
import { getCarCrashStore } from '../../store/CarCrashEventStore';
import { Coordinate } from './types';
import { CoordinatesModal } from '../CoordintasModal';


interface IProps {
  readOnly?: boolean,
}

export const MapWithCoordinates: FC<IProps> = observer(({ readOnly }) => {
  const { carCrashList, addCarCrashEvent, chosenCarCrash, setChosenCarCrash } = getCarCrashStore();
  const [pickedCoords, setPickedCoords] = useState<Coordinate | null>(null);

  return (
    <div>
      <MapView
        chosePlayMarker={setChosenCarCrash}
        allMarks={carCrashList}
        setPickedCoords={(coords) => setPickedCoords(coords)}
      />
      {!readOnly && (pickedCoords || chosenCarCrash) ? (
        <CoordinatesModal
          eventId={chosenCarCrash}
          isOpen={Boolean(pickedCoords || chosenCarCrash)}
          pickedCoords={pickedCoords}
          setPickedCoords={setPickedCoords}
          setNewMark={addCarCrashEvent}
        />
      ) : null}
    </div>
  );
});
