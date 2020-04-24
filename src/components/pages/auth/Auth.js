import React, { useEffect, useContext } from 'react';
import AuthContext from '../../../context/auth/authContext';
import Register from './Register';
import Login from './Login';
import Loading from './Loading';
import AuthNavbar from './AuthNavbar';

import './auth.scss';

const Auth = (props) => {
  const {
    loadUser,
    loading,
    loadingMessage,
    register,
    login,
    isAuthenicated,
  } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenicated) {
      props.history.push('/');
    }

    loadUser();
    // eslint-disable-next-line
  }, [isAuthenicated]);

  return (
    <div className="auth-page">
      {loading && <Loading message={loadingMessage} />}
      <AuthNavbar />
      <Login action={login} />
      <Register action={register} />
    </div>
  );
};

export default Auth;
