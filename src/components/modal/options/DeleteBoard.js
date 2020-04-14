import React, { useContext } from 'react';

import boardContext from '../../../context/board/boardContext';
import userContext from '../../../context/user/userContext';
import AlertContext from '../../../context/alert/alertContext';

const DeleteBoard = () => {
  const { getBoard, deleteBoard } = useContext(boardContext);
  const {
    currentBoardId,
    clearCurrentBoardId,
    setModal,
    setOptionsModal,
    deleteFromRecent,
  } = useContext(userContext);
  const { setAlert } = useContext(AlertContext);

  const onClick = () => {
    deleteBoard(currentBoardId);
    deleteFromRecent(currentBoardId);
    setOptionsModal('off');
    setModal('off');
    setAlert(`board ${getBoard(currentBoardId).title} was deleted`, 'dark');
    clearCurrentBoardId();
  };

  return (
    <div>
      <div className="text-85 m mb-1">
        are you sure you want to delete this board? its permanent
      </div>
      <div
        className="btn btn-danger btn-block hover-op-10 hover-lighten"
        onClick={onClick}
      >
        Delete
      </div>
    </div>
  );
};

export default DeleteBoard;
