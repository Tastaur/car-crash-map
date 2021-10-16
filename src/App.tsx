import React from 'react';
import { YMaps } from 'react-yandex-maps';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';

import MainLayout from './components/MainLayout';


export const App = () => {
  return (
    <ConfigProvider locale={ruRU}>
      <YMaps
        query={{
          lang: 'ru_RU',
          apikey: '0fed4748-3e5a-4a8c-8fb3-1b146724f891',
          load: 'package.full',
        }}
      >
        <MainLayout />
      </YMaps>
    </ConfigProvider>
  );
};
