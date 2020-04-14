import React, { useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';
import AlertContext from '../../../context/alert/alertContext';

const DeleteCard = () => {
  const {
    currentBoardId,
    currentListId,
    currentCard,
    setModal,
    setOptionsModal,
  } = useContext(UserContext);
  const { deleteCard } = useContext(BoardContext);
  const { setAlert } = useContext(AlertContext);

  const onClick = () => {
    deleteCard(currentBoardId, currentListId, currentCard.id);
    setModal('off');
    setOptionsModal('off');
    setAlert('card deleted', 'dark');
  };

  return (
    <div>
      <div className="text-85 m mb-1">
        are you sure you want to delete this card? its permanent
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

export default DeleteCard;
