import { makeAutoObservable } from 'mobx';

import { CarCrashEvent } from './CarCrashEvent/CarCrashEvent';


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

  get getCarCrashList() {
    return Array.from(this.carCrashes.values());
  }

  getCarCrashById = (id: string) => this.carCrashes.get(id);

  deleteCarCrash = (id: string) => {
    this.carCrashes.delete(id);
  };
}

export const carCrashStore = new CarCrashEventStore();
