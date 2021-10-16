import { CAR_CRASH_AFFECT_TYPE } from '../../../store/CarCrashEventStore/CarCrashEvent/types';


export enum EVENT_TABLE_COLUMN {
  INDEX = 'index',
  INFO = 'info',
  TYPE = 'type',
  AFFECTED_AMOUNT = 'affected_amount',
  DEATH_AMOUNT = 'death_amount',
  PRACTICIANS_COUNT = 'practicians_count',
  DATE = 'time',
  ACTION = 'action',
}

export interface IRowItem {
  key: string,
  [EVENT_TABLE_COLUMN.INDEX]: [number, CAR_CRASH_AFFECT_TYPE],
  [EVENT_TABLE_COLUMN.TYPE]: string,
  [EVENT_TABLE_COLUMN.INFO]: string,
  [EVENT_TABLE_COLUMN.PRACTICIANS_COUNT]: number,
  [EVENT_TABLE_COLUMN.AFFECTED_AMOUNT]: number,
  [EVENT_TABLE_COLUMN.DEATH_AMOUNT]: number,
  [EVENT_TABLE_COLUMN.DATE]: string,
  [EVENT_TABLE_COLUMN.ACTION]: () => void,
}
