import React, { useState, useEffect, useContext } from 'react';
import BoardList from './BoardList';
import AddList from './AddList';
import BoardMenu from './BoardMenu';

import userContext from '../../../context/user/userContext';

const BoardMain = ({
  board,
  boardFuncs /* contains all of board context  */,
}) => {
  const { showMenu } = useContext(userContext);

  const [style, setStyle] = useState({});

  useEffect(() => {
    setScrollIflonger();
    // eslint-disable-next-line
  }, [board.lists]);

  const setScrollIflonger = () => {
    const boardWidth = (board.lists.length + 1) * 270;

    if (16 + boardWidth > window.innerWidth) {
      setStyle({
        display: 'grid',
        gridTemplateRows: '1fr',
        gridTemplateColumns: `repeat(${board && board.lists.length + 1}, 1fr)`,
      });
    }
  };

  return (
    <div className="trello-board-main" style={style}>
      {board.lists.map((l) => (
        <div key={l._id} className="trello-board-list-wrapper">
          <BoardList key={l._id} list={l} boardFuncs={boardFuncs} />
        </div>
      ))}
      <div className="trello-board-list-wrapper">
        <AddList board={board} setScrollIflonger={setScrollIflonger} />
      </div>
      <div className={`board-menu ${!showMenu && 'd-n'}`}>
        <BoardMenu />
      </div>
    </div>
  );
};

export default BoardMain;
