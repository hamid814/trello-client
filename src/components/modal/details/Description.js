import React, { useState, useEffect, useContext } from 'react';

import userContext from '../../../context/user/userContext';
import boardContext from '../../../context/board/boardContext';

const Description = () => {
  const { setCurrentCard,currentBoardId, currentListId, currentCard } = useContext(userContext);
  const { updateCard } = useContext(boardContext);

  const [text, setText] = useState('');
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    currentCard.desc && setText(currentCard.desc);
    // eslint-disable-next-line
  }, [])

  const startEdit = () => {
    setIsEditing(true);
  }

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onBlur = () => {
    onSave();
  }

  const onCancel = () => {
    setIsEditing(false);
  }

  const onSave = () => {
    if(text !== currentCard.desc) {
      const newCard = {
        ...currentCard,
        desc: text
      }
      updateCard(currentBoardId, currentListId, currentCard.id, newCard);

      setCurrentCard(newCard);
    }

    setIsEditing(false);
  }

  return (
    <div className='pos-rel mb-2'>
      <i className='fas fa-align-left top-0'></i>
      <div className="ml-2">
        <div className='text-85 mb text-bold'>
          Description
        </div>
        <div className={`details-desc ${isEditing && 'd-n'}`} onClick={startEdit}>
          { text ? text : 'add more detailed description' }
        </div>
        <div className={`details-desc-compose-area ${!isEditing && 'd-n'}`}>
          <textarea
            placeholder='enter description'
            className='widht-100 border-0'
            value={text}
            onChange={onChange}
            onBlur={onBlur}>
          </textarea>
          <div className='btn btn-success m' onClick={onSave}>
            Save
          </div>
          <div className='d-i-b text-lg cursor-p m' onClick={onCancel}>
            &times;
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
