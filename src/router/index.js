import Profile from '../pages/Profile';
import Main from './../pages/Main';

export const routeName = {
  MAIN: '/',
  PROFILE: '/profile'
}

export const publicRoutes = [
  {path: routeName.MAIN, exact: true, component: Main}
]

export const privateRoutes = [
  {path: routeName.PROFILE, exact: true, component: Profile}
]