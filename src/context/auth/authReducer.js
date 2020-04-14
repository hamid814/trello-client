export default (state, action) => {
  switch (action.type) {
    case 'register-success':
      return {
        ...state,
      }
    default:
      return state;
  }
};
