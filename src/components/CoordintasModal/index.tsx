import {
  DatePicker, Input, InputNumber, Modal, Select, Space, TimePicker, Typography,
} from 'antd';
import React, { FC, useEffect, useMemo } from 'react';
import moment from 'moment';
import { observer } from 'mobx-react-lite';

import { Coordinate } from '../MapWithCoordinates/types';
import { getCarCrashStore } from '../../store/CarCrashEventStore';
import { CarCrashEvent } from '../../store/CarCrashEventStore/CarCrashEvent/CarCrashEvent';
import { generateId } from '../../utils/generateId';
import { carCrashSelectOptions } from './config';
import { GET_CAR_CRASH_DESCRIPTION } from '../../store/CarCrashEventStore/CarCrashEvent/types';


interface IProps {
  isOpen: boolean,
  pickedCoords: Coordinate | null,
  setPickedCoords: (coord: Coordinate | null) => void,
  setNewMark: (data: CarCrashEvent) => void,
  eventId: string,
}

export const CoordinatesModal: FC<IProps> = observer(({
  pickedCoords, setPickedCoords, setNewMark, isOpen, eventId,
}) => {
  const { getCarCrashById, carCrashes, deleteCarCrash, setChosenCarCrash } = getCarCrashStore();
  const currentItem = useMemo(() => getCarCrashById(eventId) || new CarCrashEvent(generateId()), [eventId]);
  const {
    id,
    carAmount,
    setCarAmount,
    deathPeopleAmount,
    affectedPeopleAmount,
    setAffectedPeopleAmount,
    eventDescription,
    setDeathPeopleAmount,
    setDescription,
    eventTime,
    setCoordinate,
    setDate,
    coordinate,
    setTime,
    eventDate,
    setCarCrashType,
    carCrashType,
  } = currentItem;
  useEffect(() => {
    if (!coordinate && pickedCoords) {
      setCoordinate(pickedCoords);
    }
  }, [pickedCoords?.length]);
  const isNew = !carCrashes.has(id);


  const closeModal = () => {
    setPickedCoords(null);
    setChosenCarCrash('');
  };
  const onOkHandler = () => {
    if (isNew) {
      setNewMark(currentItem);
    }
    closeModal();
  };

  const onCancelHandler = () => {
    if (isNew) {
      deleteCarCrash(id);
    }
    closeModal();
  };

  return (
    <Modal
      title="Информация о ДТП"
      visible={isOpen}
      onCancel={onCancelHandler}
      okText={isNew ? 'Добавить' : 'Сохранить изменения'}
      cancelText="Отменить"
      onOk={onOkHandler}
    >
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <div>
          <Typography>Информация о ДТП: </Typography>
          <Input.TextArea
            rows={4}
            placeholder="Введите описание"
            value={eventDescription}
            onChange={event => setDescription(event.target.value)}
          />
        </div>
        <div>
          <Typography>Тип ДТП: </Typography>
          <Select
            style={{ width: '100%' }}
            onChange={type => setCarCrashType(type)}
            defaultValue={carCrashType}
            size="large"
            placeholder="Выберите тип"
          >
            {carCrashSelectOptions.map(item => {
              return (
                <Select.Option
                  value={item}
                  key={item}
                >
                  {GET_CAR_CRASH_DESCRIPTION[item]}
                </Select.Option>
              );
            })}
          </Select>
        </div>
        <div>
          <Typography>Колличество участников</Typography>
          <InputNumber
            type="number"
            min={0}
            value={carAmount}
            onChange={setCarAmount}
          />
        </div>
        <div>
          <Typography>Колличество пострадавших</Typography>
          <InputNumber
            type="number"
            min={0}
            value={affectedPeopleAmount}
            onChange={setAffectedPeopleAmount}
          />
        </div>
        <div>
          <Typography>Колличество погибших</Typography>
          <InputNumber
            type="number"
            min={0}
            value={deathPeopleAmount}
            onChange={setDeathPeopleAmount}
          />
        </div>
        <div>
          <Typography>Время происшествия</Typography>
          <Space direction="horizontal" size="large">
            <DatePicker
              value={moment(eventDate)}
              onChange={date => setDate(date?.toDate() || new Date())}
            />
            <TimePicker
              format="HH:mm"
              value={moment(eventTime)}
              onChange={time => setTime(time?.toDate() || new Date())}
            />
          </Space>
        </div>
      </Space>
    </Modal>
  );
});
