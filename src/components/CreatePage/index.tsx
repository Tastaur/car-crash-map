import React, { useState } from 'react';

import CarCrashEventForm from '../CarCrashEventForm';
import { CAR_CRASH_DISTRICT_TYPE, CAR_CRASH_TYPE } from '../../store/CarCrashEventStore/CarCrashEvent/types';
import { MapForForm } from './MapForForm';
import { Coordinate } from '../EventListPage/MapWithCoordinates/types';


const CreatePage = () => {
  const [description, setDescription] = useState('');
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState(CAR_CRASH_TYPE.CAR);
  const [practicians, setPracticians] = useState(1);
  const [affectedAmount, setAffectedAmount] = useState(0);
  const [deathAmount, setDeathAmount] = useState(0);
  const [eventDistrict, setEventDistrict] = useState(CAR_CRASH_DISTRICT_TYPE.CENTER);
  const [coord, setCoord] = useState<Coordinate | null>(null);
  return (
    <>
      <MapForForm
        setCoordinate={setCoord}
        coord={coord}
      />
      <CarCrashEventForm
        description={description}
        setDescription={setDescription}
        time={time}
        setTime={setTime}
        date={date}
        setDate={setDate}
        type={type}
        setType={setType}
        practicians={practicians}
        setPracticians={setPracticians}
        affectedAmount={affectedAmount}
        setAffectedAmount={setAffectedAmount}
        deathAmount={deathAmount}
        setDeathAmount={setDeathAmount}
        district={eventDistrict}
        setDistrict={setEventDistrict}
      />
    </>
  );
};

export default CreatePage;
