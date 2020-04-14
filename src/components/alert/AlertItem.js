import React from 'react'

const AlertItem = ({ alert, deleteAlert }) => {
  const onClick = () => {
    deleteAlert(alert.id);
  }
  return (
    <div
      onClick={onClick}
      className={`trello-alert-item alert rounded-lg alert-${alert.type}`}>
        <div className='trello-alert-item-msg'>
          { alert.msg.charAt(0).toUpperCase() + alert.msg.slice(1) }
        </div>
    </div>
  )
}

export default AlertItem
