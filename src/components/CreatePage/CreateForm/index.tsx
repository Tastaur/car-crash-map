import React, { FC } from 'react';
import { Button, Typography } from 'antd';

import CarCrashEventForm, { IFormProps } from '../../CarCrashEventForm';
import * as styles from './styles.less';


interface IProps extends IFormProps {
  onSubmit: () => void,
  onClear: () => void,
}

export const CreateForm: FC<IProps> = ({
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
  deathAmount, setDeathAmount,
  setDistrict,
  district,
  onSubmit,
  onClear,
  error,
}) => {
  return (
    <div className={styles.default.formWrapper}>
      <Typography> Введите данные </Typography>
      <CarCrashEventForm
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
        district={district}
        setDistrict={setDistrict}
        readOnly={readOnly}
      />
      <div>
        <Button type="primary" onClick={onSubmit}> Сохранить </Button>
        <Button onClick={onClear}> Очистить </Button>
      </div>

    </div>
  );
};
