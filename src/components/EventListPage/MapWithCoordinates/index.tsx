import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { MapView } from './MapView';
import CoordinatesModal from '../../CoordintasModal';
import * as style from './style.less';
import { getCarCrashStore } from '../../../store/CarCrashEventStore';


interface IProps {
  readOnly?: boolean,
}

const MapWithCoordinates: FC<IProps> = ({ readOnly }) => {
  const { chosenCarCrash, setChosenCarCrash, carCrashList } = getCarCrashStore();

  return (
    <div className={style.default.wrapper}>
      {carCrashList.length ? (
        <MapView
          chosePlayMarker={setChosenCarCrash}
          className={style.default.map}
          carCrashList={carCrashList}
        />
      ) : <div>Список пуст</div>}
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

export default observer(MapWithCoordinates);
