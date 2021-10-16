import { Coordinate } from '../../../components/EventListPage/MapWithCoordinates/types';


export enum CAR_CRASH_DISTRICT_TYPE {
  AUTO = 'auto',
  CENTER = 'center',
  KOMSA = 'komsa',
}

export enum CAR_CRASH_AFFECT_TYPE {
  WITH_DEATH = 'withDeath',
  WITH_AFFECTED = 'withAffected',
  WITHOUT_AFFECTED_PEOPLE = 'withoutAffectedPeople',
}

export enum CAR_CRASH_TYPE {
  CHILD = 'with_child',
  BICYCLE = 'bicycle',
  CAR = 'car',
  PEOPLE = 'people',
  BUS = 'bus',
  ANIMAL = 'animal',
}


export const GET_CAR_CRASH_ICON_COLOR: Record<CAR_CRASH_AFFECT_TYPE, string> = {
  [CAR_CRASH_AFFECT_TYPE.WITH_DEATH]: '#FF0000',
  [CAR_CRASH_AFFECT_TYPE.WITH_AFFECTED]: '#FFFF00',
  [CAR_CRASH_AFFECT_TYPE.WITHOUT_AFFECTED_PEOPLE]: '#7CFC00',
};

export const GET_CAR_CRASH_ICON_NAME: Record<CAR_CRASH_TYPE, string> = {
  [CAR_CRASH_TYPE.CAR]: 'islands#blueAutoIcon',
  [CAR_CRASH_TYPE.CHILD]: 'islands#blueFamilyIcon',
  [CAR_CRASH_TYPE.BUS]: 'islands#blueMassTransitIcon',
  [CAR_CRASH_TYPE.PEOPLE]: 'islands#bluePersonIcon',
  [CAR_CRASH_TYPE.ANIMAL]: 'islands#blueDogIcon',
  [CAR_CRASH_TYPE.BICYCLE]: 'islands#blueBicycle2Icon',
};


export const GET_CAR_CRASH_DESCRIPTION: Record<CAR_CRASH_TYPE, string> = {
  [CAR_CRASH_TYPE.CAR]: 'ДТП с учасатием автомобилей',
  [CAR_CRASH_TYPE.CHILD]: 'ДТП с участием детей',
  [CAR_CRASH_TYPE.BUS]: 'ДТП с участием общественного транспорта',
  [CAR_CRASH_TYPE.PEOPLE]: 'ДТП с участем пешеходов',
  [CAR_CRASH_TYPE.ANIMAL]: 'ДТП с животными',
  [CAR_CRASH_TYPE.BICYCLE]: 'ДТП с велосипедистами',
};
export const GET_CAR_CRASH_DISTRICT_NAME: Record<CAR_CRASH_DISTRICT_TYPE, string> = {
  [CAR_CRASH_DISTRICT_TYPE.CENTER]: 'Центральный район',
  [CAR_CRASH_DISTRICT_TYPE.AUTO]: 'Автозаводский район',
  [CAR_CRASH_DISTRICT_TYPE.KOMSA]: 'Комсомольский район',
};

export interface ICarCrashEventPayload {
  coordinate: Coordinate,
  affectedPeopleAmount: number,
  deathPeopleAmount: number,
  practiciansAmount: number,
  eventDescription: string,
  eventDate: Date,
  eventTime: Date,
  carCrashType: CAR_CRASH_TYPE,
  district: CAR_CRASH_DISTRICT_TYPE,
}
