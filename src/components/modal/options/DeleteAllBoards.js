import React, { useContext } from 'react';

import userContext from '../../../context/user/userContext';

const DeleteAllboards = () => {
  const { setOptionsModal } = useContext(userContext);

  const onClick = () => {
    setOptionsModal('on', 'confirmDeleteAllBoards')
  }
  
  return (
    <div>
      <div className='p'>
        are you sure you want to delete all boards?
      </div>
      <div className='btn btn-block btn-danger mt-1' onClick={onClick}>
        Delete All Boards
      </div>
    </div>
  )
}

export default DeleteAllboards
