import React, { useContext } from 'react';
import AlertItem from './AlertItem';

import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const { alerts, deleteAlert } = useContext(AlertContext);

  return (
    <div className='trello-alerts-wrapper'>
      {
        alerts.map(a => (
          <AlertItem
            key={a.id}
            alert={a}
            deleteAlert={deleteAlert} />
        ))
      }
    </div>
  )
}

export default Alerts
