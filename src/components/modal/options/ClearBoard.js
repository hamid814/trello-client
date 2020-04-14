import React, { useContext } from 'react';

import userContext from '../../../context/user/userContext';
import boardContext from '../../../context/board/boardContext';
import alertContext from '../../../context/alert/alertContext';

const ClearBoard = () => {
  const { currentBoardId, setModal, setOptionsModal, setShowMenu } = useContext(userContext);
  const { clearBoard } = useContext(boardContext);
  const { setAlert } = useContext(alertContext);

  const onClick = () => {
    clearBoard(currentBoardId);
    setShowMenu();
    setModal('off');
    setOptionsModal('off');
    setAlert('board is empty now', 'dark');
  }

  return (
    <div>
      <div className='p'>
        are you sure you want to delete all lists in the board?
      </div>
      <div className='btn btn-block btn-danger mt-1' onClick={onClick}>
        Delete All lists
      </div>
    </div>
  )
}

export default ClearBoard
