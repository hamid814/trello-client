import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthHeader from '../../utils/setAuthHeader';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    isAuthenicated: false,
    error: null,
    loading: true,
    loadingMessagge: '',
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load the logge
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthHeader(localStorage.token);
    }

    try {
      const res = await axios.get('/api/auth/me');

      dispatch({
        type: 'user-loaded',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'auth-error',
        payload: err.response.data.message,
      });
    }
  };

  // Register a new user
  const register = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/auth/register', formData, config);

      dispatch({
        type: 'register-success',
        payload: res.data.token,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: 'register-fail',
        payload: err.response.data.message,
      });
    }
  };

  // Login a user
  const login = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/auth/login', formData, config);

      dispatch({
        type: 'login-success',
        payload: res.data.token,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: 'login-error',
        payload: err.response.data.message,
      });
    }
  };

  // Log out a user
  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenicated: state.isAuthenicated,
        loading: state.loading,
        token: state.token,
        error: state.error,
        loadingMessagge: state.loadingMessagge,
        register,
        login,
        logout,
        loadUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
