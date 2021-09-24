import React from 'react';

import { HeaderMenu } from './HeaderMenu';
import { BodyLayout } from './BodyLayout';


export const MainLayout = () => {
  return (
    <div>
      <HeaderMenu />
      <BodyLayout />
    </div>
  );
};
