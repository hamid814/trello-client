import React, { useState, useContext } from 'react';

import userContext from '../../../context/user/userContext';
import boardContext from '../../../context/board/boardContext';

const BoardAbout = ({ back }) => {
  const { currentBoardId } = useContext(userContext);
  const { getBoard, setDescribtion } = useContext(boardContext);

  const [changed, setChanged] = useState(false);
  const [text, setText] = useState(getBoard(currentBoardId).description);

  const onSubmit = () => {
    if (changed) {
      setDescribtion(text, currentBoardId);
      setChanged(false);
    }
    back();
  };

  const onChange = (e) => {
    setChanged(true);
    setText(e.target.value);
  };

  return (
    <div className="p-1">
      you can edit board describtion here
      <textarea
        className="normal-textarea mt"
        value={text}
        onChange={onChange}
      ></textarea>
      <div className="btn btn-success mt" onClick={onSubmit}>
        submit
      </div>
    </div>
  );
};

export default BoardAbout;
