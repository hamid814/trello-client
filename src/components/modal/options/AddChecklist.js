import React, { useState, useContext } from 'react';
import uniqid from 'uniqid';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const AddChecklist = () => {
  const {
    currentBoardId,
    currentListId,
    currentCard,
    setCurrentCard,
    setOptionsModal,
  } = useContext(UserContext);
  const { updateCard } = useContext(BoardContext);

  const [text, setText] = useState('new checklist');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onAdd = () => {
    const newChecklist = {
      title: text,
      id: uniqid(),
      hideDone: false,
      items: [],
    };

    const newCard = {
      ...currentCard,
      checklists: [...currentCard.checklists, newChecklist],
    };

    updateCard(currentBoardId, currentListId, currentCard._id, newCard);

    setCurrentCard(newCard);

    setOptionsModal('off');
  };

  return (
    <div>
      <input
        value={text}
        onChange={onChange}
        type="text"
        className="m-0 text-85 p"
      />
      <div className="btn mt-1 btn-success" onClick={onAdd}>
        Add
      </div>
    </div>
  );
};

export default AddChecklist;
