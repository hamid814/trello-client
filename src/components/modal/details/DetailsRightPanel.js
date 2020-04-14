import React, { useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const DetailsRightPanel = () => {
  const {
    currentBoardId,
    currentListId,
    currentCard,
    setCurrentCard,
    setOptionsModal,
  } = useContext(UserContext);
  const { updateCard } = useContext(BoardContext);

  const onLabelClick = () => {
    setOptionsModal('on', 'editCardLabels');
  };

  const onChecklistClick = () => {
    setOptionsModal('on', 'addChecklist');
  };

  const onMoveClick = () => {
    setOptionsModal('on', 'moveCard');
  };

  const onCopyClick = () => {
    setOptionsModal('on', 'copyCard');
  };

  const onWatchClick = () => {
    const newCard = {
      ...currentCard,
      watching: !currentCard.watching,
    };

    updateCard(currentBoardId, currentListId, currentCard._id, newCard);
    setCurrentCard(newCard);
  };

  const onDeleteClick = () => {
    setOptionsModal('on', 'deleteCard');
  };

  return (
    <div className="details-right-panel">
      <section>
        <h5>ADD TO CARD</h5>
        <div onClick={onLabelClick}>
          <i className="fas fa-tag"></i>
          Label
        </div>
        <div onClick={onChecklistClick}>
          <i className="fas fa-check-square"></i>
          checkList
        </div>
      </section>
      <section>
        <h5>ACTIONS</h5>
        <div onClick={onMoveClick}>
          <i className="fas fa-arrow-right"></i>
          move
        </div>
        <div onClick={onCopyClick}>
          <i className="fas fa-clone"></i>
          copy
        </div>
        <div onClick={onWatchClick} className="pos-rel">
          <i className="fas fa-eye"></i>
          watch
          <i
            className={`fas fa-check ${
              !currentCard.watching && 'd-n'
            } btn btn-success text-50 watching-check btn-square`}
          ></i>
        </div>
        <div onClick={onDeleteClick} className="text-danger">
          <i className="fas fa-trash"></i>
          delete
        </div>
      </section>
    </div>
  );
};

export default DetailsRightPanel;
