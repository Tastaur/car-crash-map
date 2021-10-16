import React, { FC } from 'react';

import { MapView } from './MapView';
import CoordinatesModal from '../../CoordintasModal';
import * as style from './style.less';


interface IProps {
  readOnly?: boolean,
  chosenCarCrash: string,
  setChosenCarCrash: (id: string) => void,
}

const MapWithCoordinates: FC<IProps> = ({ readOnly, chosenCarCrash, setChosenCarCrash }) => {
  return (
    <div className={style.default.wrapper}>
      <MapView
        chosePlayMarker={setChosenCarCrash}
        className={style.default.map}
      />
      {chosenCarCrash ? (
        <CoordinatesModal
          readOnly={readOnly}
          eventId={chosenCarCrash}
          isOpen={Boolean(chosenCarCrash)}
        />
      ) : null}
    </div>
  );
};

export default MapWithCoordinates;
