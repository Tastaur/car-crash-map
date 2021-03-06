import { makeAutoObservable } from 'mobx';

import { CarCrashEvent } from './CarCrashEvent/CarCrashEvent';
import { EVENT_TABLE_COLUMN, IRowItem } from '../../components/EventListPage/EventTable/types';
import { CAR_CRASH_DISTRICT_TYPE, GET_CAR_CRASH_DISTRICT_NAME, ICarCrashEventPayload } from './CarCrashEvent/types';
import { generateId } from '../../utils/generateId';
import { defaultData } from './_mock_';


class CarCrashEventStore {
  carCrashes: Map<string, CarCrashEvent> = defaultData();
  chosenCarCrash: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  addCarCrashEvent = (carCrashEvent: ICarCrashEventPayload) => {
    const newCarCrashEvent = new CarCrashEvent(generateId());
    newCarCrashEvent.setData(carCrashEvent);
    this.carCrashes.set(newCarCrashEvent.id, newCarCrashEvent);
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
      [EVENT_TABLE_COLUMN.ACTION]: () => this.setChosenCarCrash(item.id),
    }));
  }

  getCarCrashById = (id: string) => this.carCrashes.get(id);

  deleteCarCrash = (id: string) => {
    this.carCrashes.delete(id);
  };

  getCarCrashByDistrict = (district: CAR_CRASH_DISTRICT_TYPE) => {
    return this.carCrashList.filter(item => item.district === district);
  };

  get getCarCrashStatisticByDistricts() {
    const data = new Map<CAR_CRASH_DISTRICT_TYPE, Array<CarCrashEvent>>();
    Object.values(CAR_CRASH_DISTRICT_TYPE).forEach(district => {
      data.set(district, this.getCarCrashByDistrict(district));
    });
    return Array.from(data.entries()).map(([district, items]) => {
      return {
        name: GET_CAR_CRASH_DISTRICT_NAME[district],
        deathAmount: items.filter(item => item.deathPeopleAmount > 0).length,
        amount: items.length,
        affectedAmount: items.filter(item => item.affectedPeopleAmount > 0 && 0 === item.deathPeopleAmount).length,
      };
    });
  }
}

export const carCrashStore = new CarCrashEventStore();
