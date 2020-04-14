import React, { useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';
import AlertContext from '../../../context/alert/alertContext';

const HomeMainItem = ({ board }) => {
  const userContext = useContext(UserContext);
  const boardContext = useContext(BoardContext);
  const alertContext = useContext(AlertContext);

  const { setCurrentBoardId } = userContext;
  const { setStar } = boardContext;
  const { setAlert } = alertContext;

  const itemStyle = {
    background: board.color
  }

  const onClick = (e) => {
    if(!e.target.classList.contains('fa-star')) {
      setCurrentBoardId(board.id);
    }
  }

  const onStarClicked = () => {
    setStar(board.id);
    setAlert(`${board.starred ? 'board added to favorites' : 'board removed from favorites'}`, `${board.starred ? 'success' : 'dark'}`, 2500);
  }

  return (
    <div
      className='trello-home-main-item mt-1 mr-1'
      style={itemStyle}
      onClick={onClick}>
        <div className='text-white func-title'>
          { board.title.charAt(0).toUpperCase() + board.title.slice(1) }
        </div>
        <div
          className='trello-home-main-item-star'
          onClick={onStarClicked}>
          <i className={`fa-star ${board.starred ? 'fas text-warning' : 'far'}`}></i>
        </div>
    </div>
  )
}

export default HomeMainItem
