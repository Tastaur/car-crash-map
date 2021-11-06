import { RouteProps } from 'react-router-dom';

import { StatisticPage } from '../../components/StatisticPage';


export const statisticPage: RouteProps = {
  path: '/statistic',
  children: StatisticPage,
};
