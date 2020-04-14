import React, { useState, useEffect, useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import AlertContext from '../../../context/alert/alertContext';

const ListTitle = ({ listId, title, setListTitle }) => {
  const userContext = useContext(UserContext);
  const alertContext = useContext(AlertContext);

  const { currentBoardId, currentListId } = userContext;
  const { setAlert } = alertContext;

  const [text, setText] = useState('');
  const [isSettingTitle, setIsSettingTitle] = useState(false);
  const [textHasChanged, setTextHasChanged] = useState(false);

  useEffect(() => {
    setText(title);
    document.querySelector(`#list-title-${listId}`).focus();
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
    onSetListTitle();
  };

  const onSetListTitle = () => {
    if (textHasChanged) {
      if (text !== '') {
        setListTitle(currentBoardId, currentListId, text);
        setAlert('list title changed', 'success');
        setIsSettingTitle(false);
      } else {
        setIsSettingTitle(false);
        setAlert('list title can not be empty', 'warning');
      }
    } else {
      setIsSettingTitle(false);
      setTextHasChanged(false);
    }
  };

  return (
    <div className="d-i-b m-0">
      <div
        className={`pt-1 mb pl m-0 ${isSettingTitle && 'd-n'}`}
        onClick={onClick}
      >
        {title}
      </div>
      <input
        type="text"
        id={`list-title-${listId}`}
        value={text}
        className={`m-0 mt p-0 pt pb pl text-bold text-80 border-0 rounded ${
          !isSettingTitle && 'd-n'
        }`}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default ListTitle;
