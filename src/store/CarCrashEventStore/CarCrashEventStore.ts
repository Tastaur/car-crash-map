import { makeAutoObservable } from 'mobx';

import { CarCrashEvent } from './CarCrashEvent/CarCrashEvent';
import { EVENT_TABLE_COLUMN, IRowItem } from '../../components/EventListPage/EventTable/types';


class CarCrashEventStore {
  carCrashes: Map<string, CarCrashEvent> = new Map();
  chosenCarCrash: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  addCarCrashEvent = (placeMarker: CarCrashEvent) => {
    this.carCrashes.set(placeMarker.id, placeMarker);
  };

  setChosenCarCrash = (id: string) => {
    this.chosenCarCrash = id;
  };

  get carCrashList() {
    return Array.from(this.carCrashes.values());
  }

  get carCrashListForTable(): Array<IRowItem> {
    return this.carCrashList.map((item, index) => ({
      key: item.id,
      [EVENT_TABLE_COLUMN.AFFECTED_AMOUNT]: item.affectedPeopleAmount,
      [EVENT_TABLE_COLUMN.TYPE]: item.carCrashTypeDescription,
      [EVENT_TABLE_COLUMN.DEATH_AMOUNT]: item.deathPeopleAmount,
      [EVENT_TABLE_COLUMN.INDEX]: [index + 1, item.carCrashAffectType],
      [EVENT_TABLE_COLUMN.INFO]: item.eventDescription,
      [EVENT_TABLE_COLUMN.PRACTICIANS_COUNT]: item.practiciansAmount,
      [EVENT_TABLE_COLUMN.DATE]: item.dateToString,
    }));
  }

  getCarCrashById = (id: string) => this.carCrashes.get(id);

  deleteCarCrash = (id: string) => {
    this.carCrashes.delete(id);
  };
}

export const carCrashStore = new CarCrashEventStore();
