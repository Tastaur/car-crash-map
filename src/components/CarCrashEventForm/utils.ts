import { Coordinate } from '../EventListPage/MapWithCoordinates/types';


export interface IRequiredFields {
  practiciansAmount: number,
  eventDescription: string,
  coordinate: Coordinate | null,
}

export const getInvalidateFromFields = (formData: IRequiredFields) => {
  return Object.entries(formData).reduce((acc, [key, value]) => {
    if (!value) {
      acc[key] = 'Необходимо заполнить поле';
    }
    return acc;
  }, {} as IRequiredFields);
};
