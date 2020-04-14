import React, { useState, useEffect, useRef, useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const MoveList = () => {
  const boardsSelect = useRef(null);
  const PosSelect = useRef(null);
  
  const [destBoardId, setDestBoardId] = useState(null);
  const [desPos, setDestPos] = useState(0);

  const { currentBoardId, currentListId, setOptionsModal } = useContext(UserContext);
  const { boards, getBoard, moveList } = useContext(BoardContext);

  useEffect(() => {
    setDestBoardId(currentBoardId);
    setDestPos(getBoard(currentBoardId).lists.findIndex(l => l.id === currentListId) + 1);
    boardsSelect.current.value = currentBoardId;
    // eslint-disable-next-line
  }, [currentBoardId, currentListId]);

  const onBoardDestChange = (e) => {
    setDestBoardId(e.target.value);
  }

  const onListDestChange = (e) => {
    setDestPos(Number(e.target.value) - 1);
  }

  const onMove = () => {
    moveList(currentBoardId, currentListId, destBoardId, desPos);
    setOptionsModal('off');
  }

  return (
    <div className='move-list-modal text-85'>
      <section>
        <div className="p">
          board
        </div>
        <select ref={boardsSelect} onChange={onBoardDestChange} className='mb'>
          {
            boards.map(board => (
              <option key={board.id} value={board.id}>{ board.title }{ board.id === currentBoardId && ' (current)' }</option>
            ))
          }
        </select>
      </section>
      <section>
        <div className="p">
          position
        </div>
        <select ref={PosSelect} value={desPos} onChange={onListDestChange} className='mb'>
          {
            destBoardId && getBoard(destBoardId).lists.map((list, index) => (
              <option key={list.id} value={index + 1}>{ index + 1 }{ list.id === currentListId && ' (current)' }</option>
            ))
          }
          {
            destBoardId
              && (destBoardId !== currentBoardId)
              && <option value={getBoard(destBoardId).lists.length + 1}>{ getBoard(destBoardId).lists.length + 1 }</option>
          }
        </select>
      </section>
      <div className='btn btn-success' onClick={onMove}>
        Move
      </div>
    </div>
  )
}

export default MoveList
