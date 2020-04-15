import React, { useEffect, useContext } from 'react';
import AuthContext from '../../../context/auth/authContext';
import Register from './Register';
import Login from './Login';
import Loading from './Loading';

const Auth = () => {
  const { loadUser, loading, loadingMessage, register, login } = useContext(
    AuthContext
  );

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      auth page
      {loading && <Loading message={loadingMessage} />}
      <Register action={register} />
      <Login action={login} />
    </div>
  );
};

export default Auth;
