import { 
  SET_ALERT,
  DELETE_ALERT
 } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alerts: [action.payload]
      }
    case DELETE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter(a => a.id !== action.payload)
      }
    default:
      return state;
  }
};
