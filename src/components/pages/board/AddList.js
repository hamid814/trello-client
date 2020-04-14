import React, { Fragment, useState, useContext } from 'react';

import BoardContext from '../../../context/board/boardContext';
import AlertContext from '../../../context/alert/alertContext';

const AddList = ({ board, setScrollIflonger }) => {
  const boardContext = useContext(BoardContext);
  const alertContext = useContext(AlertContext);

  const { addList } = boardContext;
  const { setAlert } = alertContext;

  const [isAdding, setIsAdding] = useState(false);
  const [text, setText] = useState('');

  const onClick = () => {
    setIsAdding(true);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onBlur = () => {
    if (text !== '') {
      onAddList();
    } else {
      cancelAddList();
    }
  };

  const onAddList = () => {
    if (text !== '') {
      addList(text, board.id);
      setAlert(`list ${text} added`, 'success');
      setText('');
      setScrollIflonger();
    } else {
      setAlert(`list title can not be empty`, 'warning');
    }
  };

  const cancelAddList = () => {
    setIsAdding(false);
    setText('');
  };

  return (
    <Fragment>
      <div
        className={`trello-board-add-list-btn btn-light op-8 darken-20 text-dark ${
          isAdding && 'd-n'
        }`}
        onClick={onClick}
      >
        {board && board.lists.length === 0
          ? '+ Add a list'
          : '+ Add another list'}
      </div>
      <div
        className={`trello-board-add-list-form btn-light op-9 darken-20 text-dark ${
          !isAdding && 'd-n'
        }`}
      >
        <input
          type="text"
          className="m-0 rounded-lg mb-1"
          placeholder="Enter list name"
          value={text}
          onChange={onChange}
          onBlur={onBlur}
        />
        <div className="btn btn-success" onClick={onAddList}>
          Add List
        </div>
        <div
          className="d-i-b cursor-p ml-1 text-lg lighten-60 hover"
          onClick={cancelAddList}
        >
          &times;
        </div>
      </div>
    </Fragment>
  );
};

export default AddList;
