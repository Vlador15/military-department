import { Login } from '../pages/Login';
import { GetToken } from '../pages/GetToken';
import { Home } from '../pages/Home';
import { Error } from '../pages/Error';
import { StructureSquad } from '../pages/StructureSquad';
import { StatisticsSquad } from '../pages/StatisticsSquad';
import { Profile } from '../pages/Profile';
import { Notification } from '../pages/Notification';

export const privateRoutes = [
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/get-token',
    Component: GetToken,
  },
  {
    path: '/structure-squad/:id',
    Component: StructureSquad,
  },
  {
    path: '/statistics/:squadId',
    Component: StatisticsSquad,
  },
  {
    path: '/statistics/:squadId/profile/:id',
    Component: Profile,
  },
  {
    path: '/notification',
    Component: Notification,
  },
];

export const publicRoutes = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '*',
    Component: Error,
  },
];
