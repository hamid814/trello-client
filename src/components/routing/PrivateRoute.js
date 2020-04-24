import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenicated, loading } = useContext(AuthContext);

  console.log(isAuthenicated);
  console.log(loading);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenicated && !loading ? (
          <Redirect to={process.env.PUBLIC_URL + '/auth'} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
