import React, { FC } from 'react';
import { Button, Typography } from 'antd';
import { observer } from 'mobx-react-lite';

import CarCrashEventForm, { IFormProps } from '../../CarCrashEventForm';
import * as styles from './styles.less';


interface IProps extends IFormProps {
  onClear: () => void,
  onSaveHandler: () => void,
}

export const CreateForm: FC<IProps> = observer(({
  readOnly,
  onSaveHandler,
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
        <Button type="primary" onClick={onSaveHandler}> Сохранить </Button>
        <Button onClick={onClear}> Очистить </Button>
      </div>

    </div>
  );
});
