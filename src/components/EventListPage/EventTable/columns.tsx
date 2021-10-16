import { AlignType } from 'rc-table/lib/interface';
import { PresetStatusColorType } from 'antd/lib/_util/colors';
import { ColumnsType } from 'antd/lib/table/interface';
import { Badge, Button, Typography } from 'antd';
import React from 'react';

import { EVENT_TABLE_COLUMN, IRowItem } from './types';
import { CAR_CRASH_AFFECT_TYPE } from '../../../store/CarCrashEventStore/CarCrashEvent/types';


export const getBaseColumnData = (key: EVENT_TABLE_COLUMN) => {
  return {
    align: 'left' as AlignType,
    dataIndex: key,
    key,
  };
};

export const GET_BADGE_STATUS: Record<CAR_CRASH_AFFECT_TYPE, PresetStatusColorType> = {
  [CAR_CRASH_AFFECT_TYPE.WITHOUT_AFFECTED_PEOPLE]: 'success',
  [CAR_CRASH_AFFECT_TYPE.WITH_AFFECTED]: 'warning',
  [CAR_CRASH_AFFECT_TYPE.WITH_DEATH]: 'error',
};

export const columns: ColumnsType<IRowItem> = [
  {
    ...getBaseColumnData(EVENT_TABLE_COLUMN.INDEX),
    render: ([index, type]) => {
      return (
        <span>
          <Typography>
            <Badge status={GET_BADGE_STATUS[type]} />
            {index}
          </Typography>
        </span>
      );
    },
  },
  {
    ...getBaseColumnData(EVENT_TABLE_COLUMN.DATE),
    title: 'Дата',
  },
  {
    ...getBaseColumnData(EVENT_TABLE_COLUMN.TYPE),
    title: 'Тип',
  },
  {
    ...getBaseColumnData(EVENT_TABLE_COLUMN.INFO),
    title: 'Информация',
  },
  {
    ...getBaseColumnData(EVENT_TABLE_COLUMN.PRACTICIANS_COUNT),
    title: 'Колличество участников',
  },
  {
    ...getBaseColumnData(EVENT_TABLE_COLUMN.AFFECTED_AMOUNT),
    title: 'Колличество пострадавших',
  },
  {
    ...getBaseColumnData(EVENT_TABLE_COLUMN.DEATH_AMOUNT),
    title: 'Колличество погибших',
  },
  {
    ...getBaseColumnData(EVENT_TABLE_COLUMN.ACTION),
    render: (onInfo: () => void) => {
      return (
        <Button onClick={onInfo}>
          Редактировать
        </Button>
      );
    },
  },
];
