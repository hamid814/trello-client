import React, { useState, useContext } from 'react';

import EditCardLabelItem from './EditCardLabelItem';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const EditCardLabels = () => {
  const [text, setText] = useState('');

  const {
    currentBoardId,
    currentListId,
    currentCard,
    setCurrentCard,
    setOptionsModal,
    setOptionsModalStep,
  } = useContext(UserContext);
  const { updateCard, labels } = useContext(BoardContext);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const setLabel = (id) => {
    let newCard;
    if (currentCard.labels.indexOf(id) === -1) {
      // card hasnt this id / add the id
      newCard = {
        ...currentCard,
        labels: [...currentCard.labels, id],
      };
    } else {
      // card has this id / remove the id
      newCard = {
        ...currentCard,
        labels: currentCard.labels.filter((l) => l !== id),
      };
    }

    updateCard(currentBoardId, currentListId, currentCard._id, newCard);
    setCurrentCard(newCard);
  };

  const goToEditLabel = (label) => {
    setOptionsModalStep('on', 'editCardLabels', { label, type: 'edit' });
    setOptionsModal('on', 'editLabel');
  };

  const onCreateClick = () => {
    setOptionsModalStep('on', 'editCardLabels', { type: 'create' });
    setOptionsModal('on', 'editLabel');
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={onChange}
        placeholder="search labels..."
        className="mt mb-1 text-85 p"
      />
      <div className="text-85 mb">Labels</div>
      {labels.map((l) => (
        <EditCardLabelItem
          key={l._id}
          searchText={text}
          label={l}
          goToEditLabel={goToEditLabel}
          setLabelId={setLabel}
          currentCard={currentCard}
        />
      ))}
      <div className="btn btn-block mt-1 text-85 mt mb" onClick={onCreateClick}>
        create new label
      </div>
    </div>
  );
};

export default EditCardLabels;
