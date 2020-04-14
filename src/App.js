import React, { useEffect, useContext } from 'react';
import Navbar from './components/layout/Navbar';
import ListOfBoards from './components/layout/ListOfBoards';
import Home from './components/pages/home/Home';
import Board from './components/pages/board/Board';
import Modal from './components/modal/Modal';
import OptionsModal from './components/modal/OptionsModal';
import Alerts from './components/alert/Alerts';

import userContext from './context/user/userContext';
import boardContext from './context/board/boardContext';

import './trello-clone.css';

const App = () => {
  console.log('data positions are not saved');

  const {
    currentBoardId,
    setMousePos,
    getUserdata,
    keepBoardsList,
    showBoardsList,
    toggleShowBoardsList,
    optionsModalStatus,
  } = useContext(userContext);

  const { getBoardsData } = useContext(boardContext);

  useEffect(() => {
    getBoardsData();
    getUserdata();
    // eslint-disable-next-line
  }, []);

  const onClick = (e) => {
    if (optionsModalStatus === 'off') {
      setMousePos(e.clientX, e.clientY);
    }
  };

  const CloseListOfBoards = (e) => {
    if (!keepBoardsList) {
      if (showBoardsList) {
        toggleShowBoardsList();
      }
    }
  };

  return (
    <>
      <div onClick={onClick} className="all-wrapper">
        <Modal />
        <OptionsModal />
        <Alerts />
        <div
          className={`all-wrapper ${keepBoardsList ? 'grid-1-4 gap-none' : ''}`}
        >
          {/* <div className='all-wrapper'> */}
          <ListOfBoards />
          {/* </div> */}
          <div className="all-wrapper" onClick={CloseListOfBoards}>
            <Navbar />
            {!currentBoardId ? <Home /> : <Board />}
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
