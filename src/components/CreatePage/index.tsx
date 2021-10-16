import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { CAR_CRASH_DISTRICT_TYPE, CAR_CRASH_TYPE } from '../../store/CarCrashEventStore/CarCrashEvent/types';
import { MapForForm } from './MapForForm';
import { Coordinate } from '../EventListPage/MapWithCoordinates/types';
import * as styles from './style.less';
import { CreateForm } from './CreateForm';
import { getInvalidateFromFields, IRequiredFields } from '../CarCrashEventForm/utils';
import { getCarCrashStore } from '../../store/CarCrashEventStore';


const CreatePage = observer(() => {
  const { addCarCrashEvent } = getCarCrashStore();

  const [description, setDescription] = useState('');
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState(CAR_CRASH_TYPE.CAR);
  const [practicians, setPracticians] = useState(1);
  const [affectedAmount, setAffectedAmount] = useState(0);
  const [deathAmount, setDeathAmount] = useState(0);
  const [eventDistrict, setEventDistrict] = useState(CAR_CRASH_DISTRICT_TYPE.CENTER);
  const [coord, setCoord] = useState<Coordinate | null>(null);
  const [error, setError] = useState<IRequiredFields | null>(null);

  const setDefaultValue = () => {
    setDescription('');
    setTime(new Date());
    setDate(new Date());
    setType(CAR_CRASH_TYPE.CAR);
    setPracticians(0);
    setAffectedAmount(0);
    setDeathAmount(0);
    setEventDistrict(CAR_CRASH_DISTRICT_TYPE.CENTER);
    setCoord(null);
  };
  const onSaveHandler = () => {
    const invalidateFields = getInvalidateFromFields({
      coordinate: coord,
      eventDescription: description,
      practiciansAmount: practicians,
    });
    const hasInvalidationFields = Boolean(Object.keys(invalidateFields).length);
    if (hasInvalidationFields) {
      setError(invalidateFields);
    } else {
      setError(null);
      setDefaultValue();
      addCarCrashEvent({
        eventDescription: description,
        eventTime: time,
        eventDate: date,
        carCrashType: type,
        practiciansAmount: practicians,
        affectedPeopleAmount: affectedAmount,
        deathPeopleAmount: deathAmount,
        district: eventDistrict,
        coordinate: coord as Coordinate,
      });
    }
  };
  return (
    <div className={styles.default.wrapper}>
      <MapForForm
        setCoordinate={setCoord}
        coord={coord}
        error={error}
      />
      <CreateForm
        error={error}
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
        onSubmit={onSaveHandler}
        onClear={setDefaultValue}
      />
    </div>
  );
});

export default CreatePage;
