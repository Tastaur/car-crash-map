import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Space } from 'antd';

import { getCarCrashStore } from '../../store/CarCrashEventStore';
import EventTable from './EventTable';
import MapWithCoordinates from './MapWithCoordinates';
import * as style from './styles.module.less';


const EventListPage = () => {
  const { carCrashListForTable, chosenCarCrash, carCrashList, setChosenCarCrash } = getCarCrashStore();
  const [isMapMode, setIsMapMode] = useState(false);
  if (!carCrashList.length) {
    return <div>Список пуст</div>;
  }
  return (
    <div>
      <Space direction="vertical" size="large" className={style.default.wrapper}>
        {isMapMode ? (
          <MapWithCoordinates
            readOnly
            chosenCarCrash={chosenCarCrash}
            setChosenCarCrash={setChosenCarCrash}
          />
        ) : (
          <EventTable
            chosenCarCrash={chosenCarCrash}
            carCrashList={carCrashListForTable}
          />
        )}
        <Button onClick={() => setIsMapMode(prevState => !prevState)}>
          {isMapMode ? 'Показать список' : 'Показать на карте'}
        </Button>
      </Space>
    </div>
  );
};

export default observer(EventListPage);
