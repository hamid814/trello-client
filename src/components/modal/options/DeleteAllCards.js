import React, { useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';
import AlertContext from '../../../context/alert/alertContext';

const DeleteAllCards = () => {
  const { currentBoardId, currentListId, setOptionsModal } = useContext(UserContext);
  const { getList, deleteAllCards } = useContext(BoardContext);
  const { setAlert } = useContext(AlertContext);

  const onClick = () => {
    setOptionsModal('off');
    if(getList(currentBoardId, currentListId).items.length !== 0) {
      setAlert('all cards were deleted!!', 'dark');
      deleteAllCards(currentBoardId, currentListId);
    } else {
      setAlert('no card to delete!', 'warning', 2500);
      setTimeout(() => {
        setAlert('enter some Card first', 'light', 2500);
        setTimeout(() => {
          setAlert('then try to delete cards', 'primary', 2500);
          setTimeout(() => {
            setAlert('you undrestand?', 'danger', 2500);
            setTimeout(() => {
              setAlert('what card you want me to delete?', 'danger', 2500);
            }, 2500);
          }, 2500);
        }, 2500);
      }, 2500);
    }
  }

  return (
    <div>
      <div className='p'>
        are you sure you want to delete all cards in the list <b>{ getList(currentBoardId, currentListId).title }</b>?
      </div>
      <div className='btn btn-block btn-danger mt-1' onClick={onClick}>
        Delete All Cards
      </div>
    </div>
  )
}

export default DeleteAllCards
