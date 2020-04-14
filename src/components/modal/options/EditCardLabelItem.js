import React, { useState } from 'react';

const EditCardLabelItem = ({ label, searchText, setLabelId, goToEditLabel, currentCard }) => {
  const [hover, setHover] = useState(false);

  const onClick = () => {
    setLabelId(label.id);
  }

  const onMouseEnter = () => {
    setHover(true);
  }

  const onMouseLeave = () => {
    setHover(false);
  }

  const onPenClick = () => {
    goToEditLabel(label);
  }

  return (
    <div className={`label-item mb width-100 ${label.name.indexOf(searchText) === -1 && 'd-n'}`}>
      <div
        className={`rounded-lg d-i-b text-sm label-color label-color-${label.colorName} ${hover && `label-color-${label.colorName}-hover`}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}>
        {
          currentCard.labels.indexOf(label.id) !== -1
            && <i className='label-color-check fas fa-check text-white float-right'></i>
        }
        <div className='label-color-text text-85 ml text-white'>
          { label.name !== '' && label.name }
        </div>
      </div>
      <div className='btn btn-no-bg rounded-lg d-i-b float-right p' onClick={onPenClick}>
        <i className='fas fa-pen text-sm'></i>
      </div>
    </div>
  )
}

export default EditCardLabelItem
