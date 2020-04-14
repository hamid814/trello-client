import React, { useState, useContext } from 'react';
import ListOfBoardsItem from './ListOfBoardsItem';

import boardContext from '../../context/board/boardContext';

const StarredInList = ({ searchText }) => {
  const [collapse, setCollapse] = useState(false)

  const { boards } = useContext(boardContext);

  const onCollapse = () => {
    setCollapse(!collapse);
  }

  const listOfStarred = [];

  boards.forEach(b => b.starred && listOfStarred.push(b.id))

  return (
    <div className={`mt-1 mb ${listOfStarred.length === 0 && 'd-n'} ${searchText !== '' && 'd-n'}`}>
      <div className='mb-1'>
        <i className='fas fa-star mr'></i>
        favorite boards
        <div className='btn float-right btn-narrow text-sm' onClick={onCollapse}>
          <i className={`fas ${collapse ? 'fa-plus' : 'fa-minus'}`}></i>
        </div>
      </div>
      { !collapse &&
          boards.map(b => (
            b.starred && <ListOfBoardsItem key={b.id} board={b} />
          ))
      }
    </div>
  )
}

export default StarredInList
