import React, { useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const MoveAllCards = () => {
  const { currentBoardId, currentListId, setOptionsModal } = useContext(UserContext);
  const { getBoard, moveAllCards } = useContext(BoardContext);

  const onClick = (e) => {
    if(!e.target.classList.contains('func-not')) {
      moveAllCards(currentBoardId, currentListId, e.target.id);
      setOptionsModal('off');
    }
  }

  return (
    <div className='func-not text-85' onClick={onClick}>
      {
        getBoard(currentBoardId).lists.map(list => {
          if(list.id === currentListId) {
            return <div key={list.id} id={list.id} className="func-not list-action-item item-choosen">
                      { list.title }
                   </div>
          } else {
            return <div key={list.id} id={list.id} className="list-action-item">
                      { list.title }
                   </div>
          }
        })
      }
    </div>
  )
}

export default MoveAllCards
