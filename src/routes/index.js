import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Test } from '../pages';
import { Header } from '../components';

export const routes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    name: 'Test',
    path: '/test',
    exact: true,
    component: Test,
  },
];

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  </Router>
);

export default Routes;
