import React, { useContext } from 'react';
import Labels from './details/Labels'
import Description from './details/Description'
import Checklists from './details/Checklists'
import DetailsRightPanel from './details/DetailsRightPanel'

import UserContext from '../../context/user/userContext';
import BoardContext from '../../context/board/boardContext';

const DetailsModal = () => {
  const userContext = useContext(UserContext);
  const boardContext = useContext(BoardContext);

  const { currentBoardId, currentListId, currentCard, setModal, setOptionsModal } = userContext;
  const { getList } = boardContext;

  const onClose = () => {
    setModal('off');
  }

  const onListClick  = () => {
    setOptionsModal('on', 'moveCard');
  }

  return (
    <div className='details-modal-container'>
      <div className='details-modal-header'>
        <div className='close text-lg' onClick={onClose}>
          &times;
        </div>
        <i className='fas fa-th-list mr-1'></i>
        { currentCard.text }
        <div className='ml-2 mt text-85'>
          in the List <div onClick={onListClick} className='d-i-b mr test cursor-p text-underline'>{ getList(currentBoardId, currentListId).title }</div>
          <i className={`fas fa-eye ${!currentCard.watching && 'd-n'}`}></i>
        </div>
      </div>
      <div className='details-modal-body grid-4-1'>
        {/* left column */}
        <div>
          <Labels labels={currentCard.labels} />
          <Description />
          <Checklists checklists={currentCard.checklists} />
        </div>
        {/* right column */}
        <DetailsRightPanel />
      </div>
    </div>
  )
}

export default DetailsModal
