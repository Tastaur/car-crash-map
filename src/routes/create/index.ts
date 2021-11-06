import { RouteProps } from 'react-router-dom';

import { CreatePage } from '../../components/CreatePage';


export const createPage: RouteProps = {
  path: '/create',
  children: CreatePage,
};
