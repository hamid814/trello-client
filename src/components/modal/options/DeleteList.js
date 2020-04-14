import React, { useContext } from 'react';

import BoardContext from '../../../context/board/boardContext';
import UserContext from '../../../context/user/userContext';
import AlertContext from '../../../context/alert/alertContext';

const DeleteList = () => {
  const { deleteList } = useContext(BoardContext);
  const { setAlert } = useContext(AlertContext);
  const { currentBoardId, currentListId, setOptionsModal } = useContext(UserContext);

  const onClick = () => {
    deleteList(currentBoardId, currentListId);
    setOptionsModal('off');
    setAlert('list deleted', 'dark');
  }

  return (
    <div>
      <div className="mb-1 mt p-1">
        delete this list ?
        its permanent
      </div>
      <div className="btn btn-block btn-danger" onClick={onClick}>
        Delete
      </div>
    </div>
  )
}

export default DeleteList
