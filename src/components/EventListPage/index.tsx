import React from 'react';
import { observer } from 'mobx-react-lite';

import { getCarCrashStore } from '../../store/CarCrashEventStore';
import { EventTable } from './EventTable';


export const EventListPage = observer(() => {
  const { carCrashListForTable } = getCarCrashStore();
  return (
    <div>
      {carCrashListForTable.length ? <EventTable carCrashList={carCrashListForTable} /> : 'Список пуст'}
    </div>
  );
});
