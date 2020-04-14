import React, { useContext } from 'react';
import SideListItem from './SideListItem';

import BoardContext from '../../../context/board/boardContext';

const HomeSideList = () => {
  const { boards } = useContext(BoardContext);

  return (
    <aside className='trello-aside'>
      <button className='btn btn-block btn-primary text-left rounded-lg'>
        <i className='fa fa-notes-medical mr-1'></i>
        <div className='text-bold d-i-b'>Boards</div>
      </button>
      { boards.map(b => (
        <SideListItem key={b.id} board={b} />
      )) }
    </aside>
  )
}

export default HomeSideList
