import React, { useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const ListActions = () => {
  const {
    currentBoardId,
    currentListId,
    setOptionsModal,
    setOptionsModalStep,
    setAddCardFromListActions
  } = useContext(UserContext);
  const { getList, setWatching, sortList } = useContext(BoardContext);

  const onAddCardClicked = () => {
    setAddCardFromListActions(currentListId);
    setOptionsModal('off');
  }

  const onCopyClicked = () => {
    setOptionsModal('on', 'copyList');
    setOptionsModalStep('on', 'listActions');
  }

  const onMoveClicked = () => {
    setOptionsModal('on', 'moveList');
    setOptionsModalStep('on', 'listActions');
  }

  const onWatchClicked = () => {
    setWatching(currentBoardId, currentListId);
  }

  const onMoveAllCardsClicked = () => {
    setOptionsModal('on', 'moveAllCards');
    setOptionsModalStep('on', 'listActions');
  }

  const onSortClicked = () => {
    sortList(currentBoardId, currentListId);
    setOptionsModal('off');
  }

  const onDeleteAllCardsClicked = () => {
    setOptionsModal('on', 'deleteAllCards');
    setOptionsModalStep('on', 'listActions');
  }

  const onDeleteClicked = () => {
    setOptionsModal('on', 'deleteList');
    setOptionsModalStep('on', 'listActions');
  }

  return (
    <div>
      <div className='list-action-item' onClick={onAddCardClicked}>
        add card...
      </div>
      <div className='list-action-item' onClick={onCopyClicked}>
        copy list
      </div>
      <div className='list-action-item' onClick={onMoveClicked}>
        move list
      </div>
      <div className='list-action-item' onClick={onWatchClicked}>
        watch
        {
          getList(currentBoardId, currentListId).watching
            && <i className='fas fa-check ml text-85'></i>
        }
      </div>
      <hr />
      <div className='list-action-item' onClick={onMoveAllCardsClicked}>
        move all cards in this list
      </div>
      <div className='list-action-item' onClick={onSortClicked}>
        sort...
      </div>
      <hr />
      <div className='list-action-item delete-list' onClick={onDeleteAllCardsClicked}>
        delete all cards in this list
      </div>
      <div className='list-action-item delete-list' onClick={onDeleteClicked}>
        delete this list
      </div>
    </div>
  )
}

export default ListActions
