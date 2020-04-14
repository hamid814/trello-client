import React, { useContext } from 'react';

import userContext from '../../../context/user/userContext'
import boardContext from '../../../context/board/boardContext'

const BoardColor = () => {
  const { currentBoardId } = useContext(userContext);
  const { boardColors, setColor } = useContext(boardContext);

  const onClick = (e) => {
    setColor(e.target.id, currentBoardId);
  }

  return (
    <div className='mt-1'>
      <div className='grid-2 gap-half' onClick={onClick}>
        {
          boardColors.map(c => (
            <div
              id={c}
              key={c}
              style={{background: c}}
              className='board-color rounded-lg hover cursor-p'>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BoardColor