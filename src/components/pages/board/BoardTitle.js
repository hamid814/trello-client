import React, { useState, useEffect, useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import AlertContext from '../../../context/alert/alertContext';
import boardContext from '../../../context/board/boardContext';

const BoardTitle = () => {
  const userContext = useContext(UserContext);
  const alertContext = useContext(AlertContext);

  const { currentBoardId } = userContext;
  const { setAlert } = alertContext;
  const { getBoard, setTitle } = useContext(boardContext);

  const [text, setText] = useState('');
  const [isSettingTitle, setIsSettingTitle] = useState(false);
  const [textHasChanged, setTextHasChanged] = useState(false);

  useEffect(() => {
    setText(getBoard(currentBoardId).title);
    document.querySelector(`#board-title-${currentBoardId}`).focus();
    // eslint-disable-next-line
  }, [isSettingTitle]);

  const onClick = () => {
    setIsSettingTitle(true);
  };

  const onChange = (e) => {
    setText(e.target.value);
    setTextHasChanged(true);
  };

  const onBlur = () => {
    onSetTitle();
  };

  const onSetTitle = () => {
    if (textHasChanged) {
      if (text !== '') {
        setTitle(text, currentBoardId);
        setAlert('board title changed', 'success');
        setIsSettingTitle(false);
      } else {
        setIsSettingTitle(false);
        setAlert('board title can not be empty', 'danger');
      }
    } else {
      setIsSettingTitle(false);
      setTextHasChanged(false);
    }
  };

  return (
    <div className="d-i-b">
      <div
        className={`text-white m-0 ml-1 ${isSettingTitle && 'd-n'}`}
        onClick={onClick}
      >
        {getBoard(currentBoardId).title.charAt(0).toUpperCase() +
          getBoard(currentBoardId).title.slice(1)}
      </div>
      <input
        type="text"
        id={`board-title-${currentBoardId}`}
        className={`m-0 rounded ${!isSettingTitle && 'd-n'}`}
        onChange={onChange}
        onBlur={onBlur}
        value={text}
      />
    </div>
  );
};

export default BoardTitle;
