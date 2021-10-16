import React from 'react';
import { Menu } from 'antd';
import { observer } from 'mobx-react-lite';

import { getAppState } from '../../../store/AppState';
import { menuPages } from './config';
import { PAGE_NAMES } from '../../../store/AppState/types';


const HeaderMenu = () => {
  const { setCurrentPage, currentPage } = getAppState();

  return (
    <Menu
      onClick={event => {
        setCurrentPage(event.key as PAGE_NAMES);
      }}
      selectedKeys={[currentPage]}
      defaultValue={currentPage}
      mode="horizontal"
    >
      {menuPages.map(({ title, key, disable }) => (
        <Menu.Item key={key} disabled={disable}>
          {title}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default observer(HeaderMenu);
