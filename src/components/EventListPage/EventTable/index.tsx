import React, { FC } from 'react';
import { Table } from 'antd';
import { observer } from 'mobx-react-lite';

import { columns } from './columns';
import CoordinatesModal from '../../CoordintasModal';
import { getCarCrashStore } from '../../../store/CarCrashEventStore';


const EventTable: FC = () => {
  const { carCrashListForTable, chosenCarCrash } = getCarCrashStore();
  return (
    <div className="wrapper">
      <Table
        columns={columns}
        dataSource={carCrashListForTable}
        pagination={{ hideOnSinglePage: true, pageSize: 10 }}
      />
      {chosenCarCrash
        ? (
          <CoordinatesModal
            eventId={chosenCarCrash}
            isOpen={Boolean(chosenCarCrash)}
          />
        ) : null}
    </div>
  );
};

export default observer(EventTable);
