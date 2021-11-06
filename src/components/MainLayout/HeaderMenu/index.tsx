import React from 'react';
import { Menu } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';

import { menuPages } from './config';


export const HeaderMenu = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <Menu
      onClick={event => {
        history.push(event.key);
      }}
      selectedKeys={[pathname.slice(1)]}
      mode="horizontal"
    >
      {menuPages.map(({ title, key }) => (
        <Menu.Item key={key}>
          {title}
        </Menu.Item>
      ))}
    </Menu>
  );
};

