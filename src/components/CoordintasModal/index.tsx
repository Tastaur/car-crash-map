import { Modal } from 'antd';
import React, { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { Coordinate } from '../EventListPage/MapWithCoordinates/types';
import { getCarCrashStore } from '../../store/CarCrashEventStore';
import { CarCrashEvent } from '../../store/CarCrashEventStore/CarCrashEvent/CarCrashEvent';
import CarCrashEventForm from '../CarCrashEventForm';
import { generateId } from '../../utils/generateId';

// todo add save fn
interface IProps {
  isOpen: boolean,
  setPickedCoords?: (coord: Coordinate | null) => void,
  eventId: string,
  readOnly?: boolean,
}

const CoordinatesModal: FC<IProps> = ({
  setPickedCoords,
  isOpen,
  eventId,
  readOnly,
}) => {
  const { getCarCrashById, setChosenCarCrash } = getCarCrashStore();
  const currentItem = getCarCrashById(eventId) || new CarCrashEvent(generateId());
  const {
    eventDescription,
    eventTime,
    eventDate,
    carCrashType,
    practiciansAmount,
    affectedPeopleAmount,
    deathPeopleAmount,
    setData,
    coordinate,
    district,
  } = currentItem;
  const [description, setDescription] = useState(eventDescription);
  const [time, setTime] = useState(eventTime);
  const [date, setDate] = useState(eventDate);
  const [type, setType] = useState(carCrashType);
  const [practicians, setPracticians] = useState(practiciansAmount);
  const [affectedAmount, setAffectedAmount] = useState(affectedPeopleAmount);
  const [deathAmount, setDeathAmount] = useState(deathPeopleAmount);
  const [eventDistrict, setEventDistrict] = useState(district);
  const closeModal = () => {
    setPickedCoords && setPickedCoords(null);
    setChosenCarCrash('');
  };

  if (currentItem.id !== eventId) {
    closeModal();
  }

  const onOkHandler = () => {
    setData({
      coordinate,
      eventDescription: description,
      eventTime: time,
      eventDate: date,
      carCrashType: type,
      practiciansAmount: practicians,
      affectedPeopleAmount: affectedAmount,
      deathPeopleAmount: deathAmount,
      district: eventDistrict,
    });
    closeModal();
  };

  const onCancelHandler = () => {
    closeModal();
  };

  return (
    <Modal
      okButtonProps={{
        disabled: readOnly,
      }}
      title="Информация о ДТП"
      visible={isOpen}
      onCancel={onCancelHandler}
      okText="Сохранить изменения"
      cancelText={readOnly ? 'Закрыть' : 'Отмена'}
      onOk={onOkHandler}
    >
      <CarCrashEventForm
        district={eventDistrict}
        setDistrict={setEventDistrict}
        affectedAmount={affectedAmount}
        deathAmount={deathAmount}
        description={description}
        practicians={practicians}
        setAffectedAmount={setAffectedAmount}
        setDate={setDate}
        setDeathAmount={setDeathAmount}
        date={date}
        setPracticians={setPracticians}
        setType={setType}
        setDescription={setDescription}
        setTime={setTime}
        time={time}
        type={type}
        readOnly={readOnly}
      />
    </Modal>
  );
};

export default observer(CoordinatesModal);
