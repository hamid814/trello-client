import React, { useState, useEffect, useRef, useContext } from 'react';

import ListItemLabels from '../pages/board/ListItemLabels';

import UserContext from '../../context/user/userContext';
import BoardContext from '../../context/board/boardContext';

const FastEditModal = () => {
  const theTextarea = useRef(null);

  const {
    currentBoardId,
    currentListId,
    fastEditModalPos,
    currentCard,
    clearCurrentCard,
    setOptionsModal,
    setModal,
    bigLabels,
  } = useContext(UserContext);
  const { updateCard } = useContext(BoardContext);

  const [text, setText] = useState('');

  useEffect(() => {
    setText(currentCard.text);
    theTextarea.current.focus();
    // eslint-disable-next-line
  }, []);

  const modalPos = {
    position: 'absolute',
    top: fastEditModalPos.top + 'px',
    left: fastEditModalPos.left + 'px',
  };

  const rightWidth = {
    width: fastEditModalPos.width + 'px',
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      onUpdate();
    }
  };

  const onUpdate = () => {
    const newCard = {
      ...currentCard,
      text,
    };
    updateCard(currentBoardId, currentListId, currentCard._id, newCard);
    clearCurrentCard();
    setModal('off');
  };

  const onAtionsClick = (e) => {
    if (e.target.classList.contains('fas')) {
      setOptionsModal('on', e.target.parentElement.id);
    } else if (e.target.classList.contains('func-action-btn')) {
      setOptionsModal('on', e.target.id);
    } else {
      setModal('off');
    }
  };

  return (
    <div style={modalPos} className="modal-content grid-2 gap-half">
      <div style={rightWidth} className="fast-edit-modal-right-container">
        <div className="fast-edit-modal-right">
          <ListItemLabels
            father="fastEditModal"
            bigLabels={bigLabels}
            labels={currentCard.labels}
          />
          <textarea
            ref={theTextarea}
            className="m-0 border-0 p-0"
            value={text}
            onChange={onChange}
            onKeyUp={onKeyUp}
          ></textarea>
        </div>
        <div className="btn btn-success mt" onClick={onUpdate}>
          Save
        </div>
      </div>
      <div className="fast-edit-modal-action-container" onClick={onAtionsClick}>
        <div className="fast-edit-modal-action">
          <div
            className="func-action-btn fast-edit-modal-action-btn"
            id="editCardLabels"
          >
            <i className="fas fa-tag mr"></i>
            Edit labels
          </div>
        </div>
        <div className="fast-edit-modal-action">
          <div
            className="func-action-btn fast-edit-modal-action-btn"
            id="moveCard"
          >
            <i className="fas fa-arrow-right mr"></i>
            Move
          </div>
        </div>
        <div className="fast-edit-modal-action">
          <div
            className="func-action-btn fast-edit-modal-action-btn"
            id="copyCard"
          >
            <i className="fas fa-clone mr"></i>
            copy
          </div>
        </div>
        <div className="fast-edit-modal-action">
          <div
            className="func-action-btn fast-edit-modal-action-btn"
            id="deleteCard"
          >
            <i className="fas fa-trash mr"></i>
            Delete card
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastEditModal;
