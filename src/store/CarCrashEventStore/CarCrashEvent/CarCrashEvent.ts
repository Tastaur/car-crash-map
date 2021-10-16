import { makeAutoObservable } from 'mobx';
import moment from 'moment';

import { Coordinate } from '../../../components/EventListPage/MapWithCoordinates/types';
import {
  CAR_CRASH_AFFECT_TYPE,
  CAR_CRASH_DISTRICT_TYPE,
  CAR_CRASH_TYPE,
  GET_CAR_CRASH_DESCRIPTION,
  ICarCrashEventPayload,
} from './types';


export class CarCrashEvent {
  coordinate: Coordinate = [0, 0];
  affectedPeopleAmount: number = 0;
  deathPeopleAmount: number = 0;
  practiciansAmount: number = 0;
  eventDescription: string = '';
  eventDate: Date = new Date();
  eventTime: Date = new Date();
  id: string = '';
  carCrashType: CAR_CRASH_TYPE = CAR_CRASH_TYPE.CAR;
  district: CAR_CRASH_DISTRICT_TYPE;

  constructor(id: string) {
    this.id = id;
    makeAutoObservable(this);
  }

  setData = (data: ICarCrashEventPayload) => {
    Object.entries(data).forEach(item => {
      const [key, value] = item;
      this[key] = value;
    });
  };


  get carCrashTypeDescription() {
    return GET_CAR_CRASH_DESCRIPTION[this.carCrashType];
  }

  get carCrashAffectType() {
    if (this.deathPeopleAmount) {
      return CAR_CRASH_AFFECT_TYPE.WITH_DEATH;
    }
    if (this.affectedPeopleAmount) {
      return CAR_CRASH_AFFECT_TYPE.WITH_AFFECTED;
    }
    return CAR_CRASH_AFFECT_TYPE.WITHOUT_AFFECTED_PEOPLE;
  }

  get dateToString() {
    return `${moment(this.eventDate).format('DD.MM.YYYY')} ${moment(this.eventTime).format('HH:mm')}`;
  }
}
