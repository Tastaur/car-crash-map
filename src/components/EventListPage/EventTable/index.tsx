import React, { FC } from 'react';
import { Table } from 'antd';

import { columns } from './columns';
import { IRowItem } from './types';


interface IProps {
  carCrashList: Array<IRowItem>,
}


export const EventTable: FC<IProps> = ({ carCrashList }) => {
  return (
    <Table
      columns={columns}
      dataSource={carCrashList}
      pagination={{ hideOnSinglePage: true, pageSize: 10 }}
    />
  );
};
