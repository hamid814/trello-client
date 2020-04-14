import React, { useContext } from 'react';

import userContext from '../../../context/user/userContext';
import boardContext from '../../../context/board/boardContext';

const AddDemo = () => {
  const { clearCurrentBoardId, setOptionsModal, clearRecent } = useContext(
    userContext
  );
  const { setDemoBoards } = useContext(boardContext);

  const onAdd = () => {
    setOptionsModal('off');
    clearCurrentBoardId();
    clearRecent();

    setDemoBoards();
  };

  return (
    <div>
      <div className="p">
        you can add demo and reload for your data to be back
      </div>
      <div className="btn mt-1 btn-success btn-block" onClick={onAdd}>
        Add
      </div>
    </div>
  );
};

export default AddDemo;
