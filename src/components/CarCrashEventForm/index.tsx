import React from 'react';
import {
  DatePicker, Input, InputNumber, Select, Space, TimePicker, Typography,
} from 'antd';
import moment from 'moment';

import { carCrashDistrictList, carCrashTypeList } from '../CoordintasModal/config';
import {
  CAR_CRASH_DISTRICT_TYPE,
  CAR_CRASH_TYPE,
  GET_CAR_CRASH_DESCRIPTION, GET_CAR_CRASH_DISTRICT_NAME,
} from '../../store/CarCrashEventStore/CarCrashEvent/types';


interface IProps {
  description: string,
  setDescription: (desc: string) => void,
  time: Date,
  setTime: (time: Date) => void,
  date: Date,
  setDate: (date: Date) => void,
  type: CAR_CRASH_TYPE,
  setType: (type: CAR_CRASH_TYPE) => void,
  practicians: number,
  setPracticians: (amount: number) => void,
  affectedAmount: number,
  setAffectedAmount: (amount: number) => void,
  deathAmount: number,
  setDeathAmount: (amount: number) => void,
  district: CAR_CRASH_DISTRICT_TYPE,
  setDistrict: (type: CAR_CRASH_DISTRICT_TYPE) => void,
  readOnly?: boolean,
}

const CarCrashEventForm = ({
  readOnly,
  description,
  setDescription,
  time,
  setTime,
  date,
  setDate,
  type,
  setType,
  practicians,
  setPracticians,
  affectedAmount,
  setAffectedAmount,
  deathAmount,
  setDeathAmount,
  setDistrict,
  district,
}: IProps) => {
  return (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <div>
        <Typography>Информация о ДТП: </Typography>
        <Input.TextArea
          disabled={readOnly}
          rows={4}
          placeholder="Введите описание"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div>
        <Typography>Тип ДТП: </Typography>
        <Select
          disabled={readOnly}
          style={{ width: '100%' }}
          onChange={t => setType(t)}
          defaultValue={type}
          size="large"
          placeholder="Выберите тип"
        >
          {carCrashTypeList.map(item => {
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
        <Typography>Район: </Typography>
        <Select
          disabled={readOnly}
          style={{ width: '100%' }}
          onChange={t => setDistrict(t)}
          defaultValue={district}
          size="large"
          placeholder="Выберите район"
        >
          {carCrashDistrictList.map(item => {
            return (
              <Select.Option
                value={item}
                key={item}
              >
                {GET_CAR_CRASH_DISTRICT_NAME[item]}
              </Select.Option>
            );
          })}
        </Select>
      </div>
      <div>
        <Typography>Колличество участников</Typography>
        <InputNumber
          disabled={readOnly}
          type="number"
          min={0}
          value={practicians}
          onChange={setPracticians}
        />
      </div>
      <div>
        <Typography>Колличество пострадавших</Typography>
        <InputNumber
          disabled={readOnly}
          type="number"
          min={0}
          value={affectedAmount}
          onChange={setAffectedAmount}
        />
      </div>
      <div>
        <Typography>Колличество погибших</Typography>
        <InputNumber
          disabled={readOnly}
          type="number"
          min={0}
          value={deathAmount}
          onChange={setDeathAmount}
        />
      </div>
      <div>
        <Typography>Время происшествия</Typography>
        <Space direction="horizontal" size="large">
          <DatePicker
            disabled={readOnly}
            value={moment(date)}
            onChange={d => setDate(d?.toDate() || new Date())}
          />
          <TimePicker
            disabled={readOnly}
            format="HH:mm"
            value={moment(time)}
            onChange={t => setTime(t?.toDate() || new Date())}
          />
        </Space>
      </div>
    </Space>
  );
};

export default CarCrashEventForm;
