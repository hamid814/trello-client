import React, { useContext } from 'react'

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const DeleteChecklist = () => {
  const { currentBoardId, currentListId, currentCard, setCurrentCard, setOptionsModal, data, setData } = useContext(UserContext);
  const { updateCard } = useContext(BoardContext);

  const onClick = () => {
    const newListOfChecklists = currentCard.checklists.filter(l => l.id !== data)

    const newCard = {
      ...currentCard,
      checklists: newListOfChecklists
    }    

    updateCard(currentBoardId, currentListId, currentCard.id, newCard);
    setCurrentCard(newCard);

    setOptionsModal('off');

    setData(null);
  }
  
  return (
    <div>
      <div className='p text-85'>
        are you sure you want to delete this checklist?
      </div>
      <div className='btn btn-block btn-danger mt' onClick={onClick}>
        Delete Checklist
      </div>
    </div>
  )
}

export default DeleteChecklist
