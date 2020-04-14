import React, { useContext } from 'react';
import BoardListItem from '../pages/board/BoardListItem';

import boardContext from '../../context/board/boardContext';
import userContext from '../../context/user/userContext';

const SearchResultItem = ({ card, clickedACard }) => {
  const { getBoard, getList } = useContext(boardContext)
  const { setCurrentBoardId, setFoundCardId } = useContext(userContext)

  const onClick = () => {
    setCurrentBoardId(card.boardId);
    setFoundCardId(card.id);
    clickedACard();
  }
  
  return (
    <div className='grid-2 gap-half' onClick={onClick}>
      <BoardListItem item={card} isFromSearch={true} />
      <div className='grid-2-row gap-half gap-none p'>
        <div className='cursor-d text-85'>
          in the board
          <div className='cursor-p text-underline d-i-b ml'>
            {getBoard(card.boardId).title}
          </div>
        </div>
        <div className='cursor-d text-85'>
          in the list
          <div className='cursor-p text-underline d-i-b ml'>
            {getList(card.boardId, card.listId).title}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResultItem
