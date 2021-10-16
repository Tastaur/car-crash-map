import React from 'react';
import { observer } from 'mobx-react-lite';

import { getAppState } from '../../../store/AppState';
import { PAGE_NAMES } from '../../../store/AppState/types';
import EventListPage from '../../EventListPage';
import CreatePage from '../../CreatePage';


const BodyLayout = () => {
  const { currentPage } = getAppState();
  const PAGES: Record<PAGE_NAMES, JSX.Element> = {
    [PAGE_NAMES.CREATE]: <CreatePage />,
    [PAGE_NAMES.STATISTIC]: <div></div>,
    [PAGE_NAMES.EVENT_LIST]: <EventListPage />,
  };
  return PAGES[currentPage];
};

export default observer(BodyLayout);
