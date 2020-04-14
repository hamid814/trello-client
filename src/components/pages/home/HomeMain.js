import React, { useContext } from 'react';
import Recent from './Recent';
import Starred from './Starred';

import UserContext from '../../../context/user/userContext';

const HomeMain = () => {
  const { setModal } = useContext(UserContext);

  const onAdd = () => {
    setModal('on', 'addBoardModal');
  }

  return (
    <main className='trello-home-main text-bold'>
      <Starred />
      <Recent />
      <div className='card border-0'>
        <div className='trello-home-main-item hover' onClick={onAdd}>
          Add Board
        </div>
      </div>
    </main>
  )
}

export default HomeMain
