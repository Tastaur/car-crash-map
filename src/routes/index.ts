import { RouteProps } from 'react-router-dom';

import { statisticPage } from './statistic';
import { createPage } from './create';
import { listPage } from './list';


export const routes: RouteProps[] = [
  createPage,
  statisticPage,
  listPage,
];
