import React, { useContext } from 'react';
import BoardTitle from './BoardTitle';

import AlertContext from '../../../context/alert/alertContext';
import userContext from '../../../context/user/userContext';
import boardContext from '../../../context/board/boardContext';

const BoardNavbar = ({ board }) => {
  const { setAlert } = useContext(AlertContext);
  const { setOptionsModal, setShowMenu } = useContext(userContext);
  const { setStar } = useContext(boardContext);

  const onStarClick = () => {
    setStar(board.id);
    setAlert(
      `${
        !board.starred
          ? 'board added to favorites'
          : 'board removed from favorites'
      }`,
      `${!board.starred ? 'success' : 'dark'}`,
      2000
    );
  };

  const onShowMenu = () => {
    setShowMenu();
  };

  const onSetWatching = () => {
    setOptionsModal('on', 'setBoardWatching');
  };

  const navbarStyle = {
    background: board && board.color,
  };

  return (
    <div
      className="trello-board-navbar trello-navbar lighten-20"
      style={navbarStyle}
    >
      <div className="card border-0 m-0 p-0">
        {board && <BoardTitle />}
        <div
          className="btn btn-transparent btn-square rounded ml-1"
          onClick={onStarClick}
        >
          <i
            className={`fa-star ${
              board && board.starred ? 'fas text-warning' : 'far'
            }`}
          ></i>
        </div>
        <div className="cursor-d ml-1 d-i-b text-white">
          {board && (board.description ? board.description : 'no description')}
        </div>
      </div>
      <div>
        <div
          className={`btn text-sm btn-narrow btn-transparent ${
            !board.watching && 'd-n'
          }`}
          onClick={onSetWatching}
        >
          <i className="fas fa-eye mr"></i>
          watching
        </div>
        <div
          className="btn text-sm btn-narrow btn-transparent"
          onClick={onShowMenu}
        >
          <i className="fas fa-ellipsis-h mr"></i>
          Show Menu
        </div>
      </div>
    </div>
  );
};

export default BoardNavbar;
