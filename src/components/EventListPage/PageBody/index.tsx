import React, { useState } from 'react';
import { Button, Space } from 'antd';

import MapWithCoordinates from '../MapWithCoordinates';
import EventTable from '../EventTable';
import * as style from '../styles.module.less';


export const PageBody = () => {
  const [isMapMode, setIsMapMode] = useState(true);
  return (
    <Space direction="vertical" size="large" className={style.default.wrapper}>
      {isMapMode ? (
        <MapWithCoordinates
          readOnly
        />
      ) : (
        <EventTable />
      )}
      <Button onClick={() => setIsMapMode(prevState => !prevState)}>
        {isMapMode ? 'Показать список' : 'Показать на карте'}
      </Button>
    </Space>
  );
};
