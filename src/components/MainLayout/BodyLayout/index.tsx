import React from 'react';
import { observer } from 'mobx-react-lite';

import { MapWithCoordinates } from '../../MapWithCoordinates';
import { getAppState } from '../../../store/AppState';
import { PAGE_NAMES } from '../../../store/AppState/types';
import { EventListPage } from '../../EventListPage';


export const BodyLayout = observer(() => {
  const { currentPage } = getAppState();
  const PAGES: Record<PAGE_NAMES, JSX.Element> = {
    [PAGE_NAMES.CREATE]: <MapWithCoordinates />,
    [PAGE_NAMES.STATISTIC]: <div></div>,
    [PAGE_NAMES.EVENT_LIST]: <EventListPage />,
  };
  return (
    <div>
      {PAGES[currentPage]}
    </div>
  );
});
