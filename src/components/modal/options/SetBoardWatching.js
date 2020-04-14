import React, { useContext } from 'react'

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const SetBoardWatching = () => {
  const { currentBoardId, setModal, setOptionsModal } = useContext(UserContext);
  const { setBoardWatching } = useContext(BoardContext);

  const onClick = () => {
    setBoardWatching(currentBoardId);
    setModal('off');
    setOptionsModal('off');
  }

  return (
    <div>
      <div className='text-85 m mb-1'>
        You can watch again via the board menu.
      </div>
      <div className='btn btn-danger btn-block hover-op-10 hover-lighten' onClick={onClick}>
        Stop watching
      </div>
    </div>  
  )
}

export default SetBoardWatching
