import React, { useState, useEffect, useContext } from 'react';
import ListOfBoardsItem from './ListOfBoardsItem';

import boardContext from '../../context/board/boardContext';

const Boards = ({ searchText }) => {
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    if(searchText !== '') {
      setCollapse(false);
    }
  }, [searchText]);

  const { boards } = useContext(boardContext);

  const onCollapse = () => {
    setCollapse(!collapse);
  }

  return (
    <div className='mt-1 mb'>
      <div className='mb-1'>
        <i className='fas fa-notes-medical mr'></i>
        boards
        <div className='btn float-right btn-narrow text-sm' onClick={onCollapse}>
          <i className={`fas ${collapse ? 'fa-plus' : 'fa-minus'}`}></i>
        </div>
      </div>
      { !collapse &&
          boards.map(b => (
            <ListOfBoardsItem isFromBoards={true} searchText={searchText} key={b.id} board={b} />
          ))
      }
    </div>
  )
}

export default Boards
