import { makeAutoObservable } from 'mobx';
import moment from 'moment';

import { Coordinate } from '../../../components/MapWithCoordinates/types';
import { CAR_CRASH_AFFECT_TYPE, CAR_CRASH_TYPE, GET_CAR_CRASH_DESCRIPTION } from './types';


export class CarCrashEvent {
  coordinate: Coordinate | null = null;
  affectedPeopleAmount: number = 0;
  deathPeopleAmount: number = 0;
  practiciansAmount: number = 0;
  eventDescription: string = '';
  eventDate: Date = new Date();
  eventTime: Date = new Date();
  id: string = '';
  carCrashType: CAR_CRASH_TYPE = CAR_CRASH_TYPE.CAR;

  constructor(id: string) {
    this.id = id;
    makeAutoObservable(this);
  }


  setCoordinate = (coords: Coordinate) => {
    this.coordinate = coords;
  };

  setAffectedPeopleAmount = (amount: number) => {
    this.affectedPeopleAmount = amount;
  };

  setDeathPeopleAmount = (amount: number) => {
    this.deathPeopleAmount = amount;
  };

  setPracticiansAmount = (amount: number) => {
    this.practiciansAmount = amount;
  };

  setDescription = (description: string) => {
    this.eventDescription = description;
  };

  setDate = (date: Date) => {
    this.eventDate = date;
  };

  setTime = (time: Date) => {
    this.eventTime = time;
  };

  setCarCrashType = (type: CAR_CRASH_TYPE) => {
    this.carCrashType = type;
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

  get amountPeopleToShow() {
    if (this.affectedPeopleAmount && this.deathPeopleAmount) {
      return `${this.deathPeopleAmount}/${this.affectedPeopleAmount}`;
    }
    if (this.deathPeopleAmount) {
      return `${this.deathPeopleAmount}`;
    }
    if (this.affectedPeopleAmount) {
      return `${this.affectedPeopleAmount}`;
    }
    return '';
  }

  get dateToString() {
    return `${moment(this.eventDate).format('DD.MM.YYYY')} ${moment(this.eventTime).format('HH:mm')}`;
  }
}
