import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { MapView } from './MapView';
import { getCarCrashStore } from '../../store/CarCrashEventStore';
import { Coordinate } from './types';
import '../../../ant-theme-vars.less';
import { CoordinatesModal } from '../CoordintasModal';


export const MapWithCoordinates = observer(() => {
  const { getCarCrashList, addCarCrashEvent, chosenCarCrash, setChosenCarCrash } = getCarCrashStore();
  const [pickedCoords, setPickedCoords] = useState<Coordinate | null>(null);

  return (
    <div>
      <MapView
        chosePlayMarker={setChosenCarCrash}
        allMarks={getCarCrashList}
        setPickedCoords={(coords) => setPickedCoords(coords)}
      />
      {pickedCoords || chosenCarCrash ? (
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
