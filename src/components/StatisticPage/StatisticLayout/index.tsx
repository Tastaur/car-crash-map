import React from 'react';
import {
  Bar, BarChart, Legend, Tooltip, XAxis, YAxis,
} from 'recharts';
import { observer } from 'mobx-react-lite';

import { getCarCrashStore } from '../../../store/CarCrashEventStore';


export const StatisticLayout = observer(() => {
  const { getCarCrashStatisticByDistricts } = getCarCrashStore();

  return (
    <div>
      <BarChart width={500} height={250} data={getCarCrashStatisticByDistricts}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="deathAmount" fill="tomato" name="Погибшие" />
        <Bar dataKey="amount" fill="green" name="Раненые" />
        <Bar dataKey="affectedAmount" fill="yellow" name="Всего ДТП" />
      </BarChart>
    </div>
  );
});

