import React, { useContext } from 'react';
import LabelItem from './LabelItem';

import UserContext from '../../../context/user/userContext';

const Labels = ({ labels }) => {
  const { setOptionsModal } = useContext(UserContext);

  const onClick = () => {
    setOptionsModal('on', 'editCardLabels');
  }

  return (
    <div className={`mb-2 pos-rel ${labels.length === 0 && 'd-n'}`}>
      <i className='fas fa-tag top-0'></i>
      <div className='ml-2'>
        <div className='text-85 mb text-bold'>
          labels
        </div>
        {
          labels.map(l => (
            <LabelItem key={l} label={l} onClick={onClick} />
          ))
        }
        <div className='d-i-b hover details-label bg-light text-center' onClick={onClick}>
          <i className='fas fa-plus text-lg'></i>
        </div>
      </div>
    </div>
  )
}

export default Labels
