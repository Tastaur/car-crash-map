import React, { FC } from 'react';
import { Table } from 'antd';

import { columns } from './columns';
import { IRowItem } from './types';
import CoordinatesModal from '../../CoordintasModal';


interface IProps {
  carCrashList: Array<IRowItem>,
  chosenCarCrash: string,
}

const EventTable: FC<IProps> = ({ carCrashList, chosenCarCrash }) => {
  return (
    <div className="wrapper">
      <Table
        columns={columns}
        dataSource={carCrashList}
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

export default EventTable;
