import React, { useState, useEffect, useRef, useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

// its a copy of MoveCard.js, so ... classes and names and... are copy

const CopyCard = () => {
  const boardsSelect = useRef(null);
  const listSelect = useRef(null);
  const posSelect = useRef(null);
  
  const [text, setText] = useState('');
  const [keepChecklists, setKeepChecklists] = useState(true);
  const [keepLabels, setKeepLabels] = useState(true);
  const [destBoardId, setDestBoardId] = useState('');
  const [destListId, setDestListId] = useState('');
  const [destPos, setDestPos] = useState(0);

  const { currentBoardId, currentListId, currentCard, modalType, setModal, setOptionsModal } = useContext(UserContext);
  const { boards, getBoard, getList, moveCard } = useContext(BoardContext);

  useEffect(() => {
    setDestBoardId(currentBoardId);
    setDestListId(currentListId);
    setDestPos(getList(currentBoardId, currentListId).items.findIndex(i => i.id === currentCard.id) + 1);
    setText(currentCard.text)
    // eslint-disable-next-line
  }, [currentBoardId, currentListId]);

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onKeepChecklistsChange = e => {
    setKeepChecklists(e.target.checked);
  }

  const onKeepLabelsChange = e => {
    setKeepLabels(e.target.checked);
  }

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

  const onCopy = () => {
    const newCard = {
      ...currentCard,
      text,
      labels: keepLabels ? currentCard.labels : [],
      checklists: keepChecklists ? currentCard.checklists : []
    }

    moveCard(currentBoardId, currentListId, currentCard.id, destBoardId, destListId, destPos, newCard, true);
    setOptionsModal('off');
    if(modalType === 'fastEditModal') {
      setModal('off');
    }
  }

  return (
    <div className='move-card-modal text-85'>
      <div className='p'>
        title
      </div>
      <textarea value={text} onChange={onChange}>

      </textarea>
      <div className={`${(currentCard.checklists.length === 0 && currentCard.labels.length === 0) && 'd-n'}`}>
        <div className='p'>
          Keep...
        </div>
        <div className={`${currentCard.checklists.length === 0 && 'd-n'}`}>
          <input type='checkbox' defaultChecked={keepChecklists} onChange={onKeepChecklistsChange} className='m'/>
          Keep Checklists
        </div>
        <div className={`${currentCard.labels.length === 0 && 'd-n'}`}>
          <input type='checkbox' defaultChecked={keepLabels} onChange={onKeepLabelsChange} className='m'/>
          Keep Labels
        </div>
      </div>
      <div className='p'>
        Copy to...
      </div>
      {/* board selectList */}
      <section>
        <div className='p'>
          board
        </div>
        <select ref={boardsSelect} value={destBoardId} onChange={onBoardDestChange} className='mb'>
          {
            boards.map(board => (
              board.lists.length !== 0 &&
              <option key={board.id} value={board.id}>{ board.title }</option>
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
                <option key={list.id} value={list.id}>{ list.title }</option>
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
                      <option key={item.id} value={index + 1}>{ index + 1 }</option>
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
      <div className='btn btn-success' onClick={onCopy}>
        Create Card
      </div>
    </div>
  )
}

export default CopyCard