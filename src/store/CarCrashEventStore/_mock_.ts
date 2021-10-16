import { CarCrashEvent } from './CarCrashEvent/CarCrashEvent';
import { generateId } from '../../utils/generateId';
import { CAR_CRASH_DISTRICT_TYPE, CAR_CRASH_TYPE, ICarCrashEventPayload } from './CarCrashEvent/types';


export const defaultData = () => {
  const items: Array<ICarCrashEventPayload> = [{
    coordinate: [53.508573, 49.418560],
    affectedPeopleAmount: 1,
    deathPeopleAmount: 0,
    carCrashType: CAR_CRASH_TYPE.BICYCLE,
    eventDescription: '',
    district: CAR_CRASH_DISTRICT_TYPE.CENTER,
    eventDate: new Date(),
    practiciansAmount: 2,
    eventTime: new Date(),
  }, {
    coordinate: [53.509057, 49.415075],
    affectedPeopleAmount: 1,
    deathPeopleAmount: 1,
    carCrashType: CAR_CRASH_TYPE.PEOPLE,
    eventDescription: '',
    eventDate: new Date(),
    practiciansAmount: 2,
    district: CAR_CRASH_DISTRICT_TYPE.CENTER,
    eventTime: new Date(),
  }, {
    coordinate: [53.500156, 49.390165],
    affectedPeopleAmount: 0,
    deathPeopleAmount: 0,
    carCrashType: CAR_CRASH_TYPE.CAR,
    eventDescription: '',
    eventDate: new Date(),
    practiciansAmount: 2,
    eventTime: new Date(),
    district: CAR_CRASH_DISTRICT_TYPE.CENTER,
  }, {
    coordinate: [53.539291, 49.407098],
    affectedPeopleAmount: 0,
    deathPeopleAmount: 0,
    carCrashType: CAR_CRASH_TYPE.BUS,
    eventDescription: '',
    eventDate: new Date(),
    practiciansAmount: 2,
    eventTime: new Date(),
    district: CAR_CRASH_DISTRICT_TYPE.CENTER,
  }, {
    coordinate: [53.507274, 49.268694],
    affectedPeopleAmount: 0,
    deathPeopleAmount: 0,
    carCrashType: CAR_CRASH_TYPE.BUS,
    eventDescription: '',
    eventDate: new Date(),
    practiciansAmount: 2,
    eventTime: new Date(),
    district: CAR_CRASH_DISTRICT_TYPE.CENTER,
  }, {
    coordinate: [53.507965, 49.268650],
    affectedPeopleAmount: 0,
    deathPeopleAmount: 0,
    carCrashType: CAR_CRASH_TYPE.BUS,
    eventDescription: '',
    eventDate: new Date(),
    practiciansAmount: 2,
    eventTime: new Date(),
    district: CAR_CRASH_DISTRICT_TYPE.CENTER,
  }];

  return items.reduce((acc, item) => {
    const event = new CarCrashEvent(generateId());
    event.setData(item);
    acc.set(event.id, event);
    return acc;
  }, new Map<string, CarCrashEvent>());
};
