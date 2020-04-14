import React from 'react';

import Checklist from './Checklist';

const Checklists = ({ checklists }) => {
  return (
    <div className={`pos-rel mb-2 ${checklists.length === 0 && 'd-n'}`}>
      <i className='fas fa-check-square top-0'></i>
      <div className="ml-2">
        {
          checklists.map(c => (
            <Checklist key={c.id} checklist={c} />
          ))
        }
      </div>
    </div>
  )
}

export default Checklists
