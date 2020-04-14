import React, { useState, useContext } from 'react';

import UserContext from '../../../context/user/userContext';

const SideListItem = ({ board }) => {
  const userContext = useContext(UserContext);

  const { setCurrentBoardId } = userContext;

  const [isHover, setIsHover] = useState(false);

  const hoverStyle = isHover ? {
    background: board.color,
    color: '#f4f4f4',
    opacity: '0.7'
  } : {
    opacity: '1'
  }

  const onMouseEnter = () => {
    setIsHover(true);
  }

  const onMouseLeave = () => {
    setIsHover(false);
  }

  const onClick = () => {
    setCurrentBoardId(board.id)
  }

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className='card pl-1 cursor-p p border-0 rounded-lg text-dark transition text-bold'
      style={hoverStyle}
      >
      { board.title.charAt(0).toUpperCase() + board.title.slice(1) }
      { <i className='fa fa-check m-0 float-right'></i> }
    </div> 
  );
};

export default SideListItem