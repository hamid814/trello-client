import React, { useContext } from 'react';

import UserContext from '../../../context/user/userContext';
// import BoardContext from '../../../context/board/boardContext';

/*

    *** this component is not used ***

*/

const NewCardOptions = () => {
  const { setOptionsModalStep } = useContext(UserContext);
  // const {  } = useContext(BoardContext);

  const onLabelsClicked = () => {
    
    
  }

  const dontKnow = () => {
    
    setOptionsModalStep('on', 'listActions');
  }

  const maybeWatch = () => {
    
    setOptionsModalStep('on', 'listActions');
  }

  return (
    <div>
      <div className='list-action-item' onClick={onLabelsClicked}>
        labels
      </div>
      <div className='list-action-item' onClick={dontKnow}>
        dont know
      </div>
      <div className='list-action-item' onClick={maybeWatch}>
        maybe watch
      </div>
    </div>
  )
}

export default NewCardOptions
