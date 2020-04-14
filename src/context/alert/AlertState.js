import React, { useReducer } from 'react';
import uniqid from 'uniqid';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { 
  SET_ALERT,
  DELETE_ALERT
} from '../types';

const AlertState = props => {
  const initialState = {
    alerts: []
    };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Get data
  const setAlert = (msg, type, time) => {
    const listOfMsgs = state.alerts.map(a => a.msg);
    if(listOfMsgs.indexOf(msg) === -1) {
      const newAlert = {
        msg,
        id: uniqid(),
        type,
      }

      dispatch({
        type: SET_ALERT,
        payload: newAlert
      });

      setTimeout(() => {
        deleteAlert(newAlert.id);
      }, time ? time : 3000);
    }
  };

  const deleteAlert = (id) => {
    dispatch({
      type: DELETE_ALERT,
      payload: id
    });
  }

  return (
    <AlertContext.Provider
      value={{
        alerts: state.alerts,
        setAlert,
        deleteAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;