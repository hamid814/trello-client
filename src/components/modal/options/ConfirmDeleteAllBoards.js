import React, { useContext } from 'react';

import userContext from '../../../context/user/userContext';
import boardContext from '../../../context/board/boardContext';
import alertContext from '../../../context/alert/alertContext';

const ConfirmDeleteAllBoards = () => {
  const {
    clearRecent,
    setOptionsModal,
    keepBoardsList,
    toggleShowBoardsList,
    clearCurrentBoardId } = useContext(userContext)
  const { deleteAllBoards } = useContext(boardContext);
  const { setAlert } = useContext(alertContext);

  const onClick = () => {
    // delete all recent ids to prevent error
    clearRecent();

    // clear the state
    setTimeout(() => {
      deleteAllBoards();
    }, 100);

    setOptionsModal('off');

    if(!keepBoardsList) {
      toggleShowBoardsList()
    }

    clearCurrentBoardId();

    setAlert('all boards are deleted now, your dashboard is empty', 'light', 6000);
  }
  
  return (
    <div>
      <div className='p'>
        you should confirm to delete all boards
      </div>
      <div className='btn btn-block btn-danger mt-1' onClick={onClick}>
        Confirm
      </div>
    </div>
  )
}

export default ConfirmDeleteAllBoards
