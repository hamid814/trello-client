import React, { useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const CheckListItem = ({ item, clId, hideDone }) => {
  const {
    currentBoardId,
    currentListId,
    currentCard,
    setOptionsModal,
    setData,
  } = useContext(UserContext);
  const { updateCard } = useContext(BoardContext);

  const onChange = () => {
    const newCard = {
      ...currentCard,
      checklists: currentCard.checklists.map((c) => {
        if (c.id === clId) {
          c.items = c.items.map((i) => {
            if (i.id === item.id) {
              item.done = !item.done;
            }
            return i;
          });
        }
        return c;
      }),
    };

    updateCard(currentBoardId, currentListId, currentCard.id, newCard);
  };

  const onOptionsClicked = () => {
    setOptionsModal('on', 'checklistItemActions');
    setData({
      item,
      checklistId: clId,
    });
  };

  const ifDone = {
    textDecoration: item.done ? 'line-through' : 'none',
  };

  return (
    <div className={`checklist-item ${hideDone && item.done && 'd-n'}`}>
      <input
        type="checkbox"
        defaultChecked={item.done}
        onChange={onChange}
        className="mt-0 mb-0"
      />
      <div style={ifDone} className="d-i-b text-85">
        {item.text}
      </div>
      <div className="btn btn-narrow text-sm mt-0" onClick={onOptionsClicked}>
        <i className="fas fa-ellipsis-h"></i>
      </div>
    </div>
  );
};

export default CheckListItem;
