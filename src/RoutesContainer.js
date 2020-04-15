import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import PrivateRoute from './components/routing/PrivateRoute';
import Auth from './components/pages/auth/Auth';

const RoutesContainer = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute
          exact
          path={process.env.PUBLIC_URL + '/'}
          component={App}
        />
        <Route exact path={process.env.PUBLIC_URL + '/auth'} component={Auth} />
      </Switch>
    </Router>
  );
};

export default RoutesContainer;
