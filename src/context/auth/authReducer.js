export default (state, action) => {
  switch (action.type) {
    case 'user-loaded':
      return {
        ...state,
        isAuthenicated: true,
        loading: false,
        user: action.payload,
      };
    case 'register-success':
    case 'login-success':
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
        loading: false,
        isAuthenicated: true,
      };
    case 'register-fail':
    case 'auth-error':
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenicated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
