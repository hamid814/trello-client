import React, { useState, useEffect, useContext } from 'react';
import RecentInList from './RecentInList';
import StarredInList from './StarredInList';
import Boards from './Boards';

import userContext from '../../context/user/userContext';

const ListOfBoards = () => {
  const [text, setText] = useState('');
  const [topDistance, setTopDistance] = useState(0);

  const {
    showBoardsList,
    keepBoardsList,
    toggleKeepBoardsList,
    toggleShowBoardsList,
    setOptionsModal,
    setModal,
  } = useContext(userContext);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('#main-navbar') &&
        setTopDistance(
          document.querySelector('#main-navbar').getBoundingClientRect().height
        );
    }, 100);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setText('');
  }, [showBoardsList]);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onKeepClicked = () => {
    toggleKeepBoardsList();
  };

  const onCreateNewBordClicked = () => {
    if (!keepBoardsList) {
      toggleShowBoardsList();
    }
    setModal('on', 'addBoardModal');
  };

  const onDeleteClicked = () => {
    setOptionsModal('on', 'deleteAllBoards');
  };

  const thisStyle = {
    top: !keepBoardsList && topDistance,
  };

  const thisStyle1 = {
    height: keepBoardsList && window.innerHeight - topDistance,
  };

  const thisStyle2 = {
    minHeight: topDistance,
  };

  return (
    <div
      style={thisStyle}
      className={`list-of-boards ${showBoardsList ? 'show' : ''} ${
        keepBoardsList ? 'keep' : ''
      }`}
    >
      <div
        style={thisStyle2}
        className={`header ${keepBoardsList ? '' : 'd-n'}`}
      >
        <div className="text-bold">boards</div>
      </div>
      <div className="main" style={thisStyle1}>
        <input
          type="text"
          placeholder="find boards by name"
          className="m-0 text-sm"
          value={text}
          onChange={onChange}
        />
        <StarredInList searchText={text} />
        <RecentInList searchText={text} />
        <Boards searchText={text} />
        <div
          className="text-85 underline m cursor-p mt-1"
          onClick={onCreateNewBordClicked}
        >
          Create new board
        </div>
        <div className="text-85 underline m cursor-p" onClick={onKeepClicked}>
          {keepBoardsList
            ? 'Dont keep this menu open'
            : 'Always keep this menu open'}
        </div>
        <div
          className="text-85 underline m cursor-p hover-danger"
          onClick={onDeleteClicked}
        >
          Delete All Boards
        </div>
      </div>
    </div>
  );
};

export default ListOfBoards;
