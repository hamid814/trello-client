import React, { useState, useEffect, useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const CopyList = () => {
  const [name, setName] = useState('');
  
  const { currentBoardId, currentListId, setOptionsModal } = useContext(UserContext);
  const { getList, copyList } = useContext(BoardContext);

  useEffect(() => {
    setName(getList(currentBoardId, currentListId).title);
    // eslint-disable-next-line
  }, []);

  const onCLick = () => {
    copyList(currentBoardId, currentListId, name);
    setOptionsModal('off');
  }

  const onChange = (e) => {
    setName(e.target.value);
    // console.log(e.trgte.value)
  }

  return (
    <div>
      <div className="text-85">
        name
      </div>
      <input type="text" className="m-0 mb mt pl-1" value={name} onChange={onChange} />
      <div className="btn btn-success mt-1" onClick={onCLick}>
        Copy List
      </div>
    </div>
  )
}

export default CopyList
