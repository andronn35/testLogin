import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes, routeName } from './../router/index';

const Approuter = () => {

  const {isAuth} = useSelector(state => state.loginPage)
  
  return (
    isAuth ? 
      <Switch>
        {privateRoutes.map(route =>
          <Route 
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
        )}
        <Redirect to={routeName.PROFILE} />
      </Switch>
      :
      <Switch>
        {publicRoutes.map(route =>
          <Route 
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
        )}
        <Redirect to={routeName.MAIN} />
      </Switch>
  );
}

export default Approuter;
