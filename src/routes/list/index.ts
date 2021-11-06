import { RouteProps } from 'react-router-dom';

import { EventListPage } from '../../components/EventListPage';


export const listPage: RouteProps = {
  path: '/list',
  children: EventListPage,
};
