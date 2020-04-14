import React, { useState, useEffect, useRef, useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const MoveCard = () => {
  const boardsSelect = useRef(null);
  const listSelect = useRef(null);
  const posSelect = useRef(null);
  
  const [destBoardId, setDestBoardId] = useState('');
  const [destListId, setDestListId] = useState('');
  const [destPos, setDestPos] = useState(0);

  const { currentBoardId, currentListId, currentCard, modalType, setModal, setOptionsModal } = useContext(UserContext);
  const { boards, getBoard, getList, moveCard } = useContext(BoardContext);

  useEffect(() => {
    setDestBoardId(currentBoardId);
    setDestListId(currentListId);
    setDestPos(getList(currentBoardId, currentListId).items.findIndex(i => i.id === currentCard.id) + 1);
    // eslint-disable-next-line
  }, [currentBoardId, currentListId]);

  const onBoardDestChange = (e) => {
    setDestBoardId(e.target.value);
    setDestListId(getBoard(e.target.value).lists[0].id)
  }

  const onListDestChange = (e) => {
    setDestListId(e.target.value);
  }

  const onPosDestChange = (e) => {
    setDestPos(Number(e.target.value) - 1);
  }

  const onMove = () => {
    moveCard(currentBoardId, currentListId, currentCard.id, destBoardId, destListId, destPos, currentCard);
    setOptionsModal('off');
    if(modalType === 'fastEditModal') {
      setModal('off');
    }
  }

  return (
    <div className='move-card-modal text-85'>
      {/* board selectList */}
      <section>
        <div className='p'>
          board
        </div>
        <select ref={boardsSelect} value={destBoardId} onChange={onBoardDestChange} className='mb'>
          {
            boards.map(board => (
              board.lists.length !== 0 &&
              <option key={board.id} value={board.id}>{ board.title }{ board.id === currentBoardId && ' (current)' }</option>
            ))
          }
        </select>
      </section>
      <div className='grid-4-1 gap-half'>
        {/* list selectList */}
        <section>
          <div className='p'>
            list
          </div>
          <select ref={listSelect} value={destListId} onChange={onListDestChange} className='mb'>
            {
              destBoardId && getBoard(destBoardId).lists.map((list, index) => (
                <option key={list.id} value={list.id}>{ list.title }{ list.id === currentListId && '(current)' }</option>
              ))
            }
          </select>
        </section>
        {/* posotion selectList */}
        <section>
          <div className='p'>
            position
          </div>
          <select ref={posSelect} value={destPos} onChange={onPosDestChange} className='mb'>
            {
              destBoardId
                && destListId
                  && getList(destBoardId, destListId).items.map((item, index) => (
                      <option key={item.id} value={index + 1}>{ index + 1 }{ item.id === currentCard.id && ' (current)' }</option>
                    ))
            }
            {
              destBoardId
                && destListId
                  && (destListId !== currentListId)
                    &&  <option value={getList(destBoardId, destListId).items.length + 1}>{ getList(destBoardId, destListId).items.length + 1 }</option>
            }
          </select>
        </section>
      </div>
      <div className='btn btn-success' onClick={onMove}>
        Move
      </div>
    </div>
  )
}

export default MoveCard