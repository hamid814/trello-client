import React, { useState, useContext } from 'react';

import UserContext from '../../context/user/userContext';
import BoardContext from '../../context/board/boardContext';
import AlertContext from '../../context/alert/alertContext';

import './modals.css';

const AddBoardModal = () => {
  const { setModal, setCurrentBoardId, clearCurrentBoardId } = useContext(
    UserContext
  );
  const { boardColors, addBoard } = useContext(BoardContext);
  const { setAlert } = useContext(AlertContext);

  const [bg, setBg] = useState('#0079bf');
  const [text, setText] = useState('');

  const onBgClicked = (e) => {
    if (
      !e.target.classList.contains('func-no-click') &&
      !e.target.classList.contains('func-colors')
    ) {
      setBg(e.target.id);
    }
  };

  const onClose = () => {
    setModal('off');
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      onAdd();
    }
  };

  const onAdd = async () => {
    if (text !== '') {
      const id = await addBoard(text, bg);
      onClose();
      setAlert(
        `board ${text.charAt(0).toUpperCase() + text.slice(1)} was created`,
        'success',
        4000
      );
      clearCurrentBoardId();
      setCurrentBoardId(id);
    }
  };

  const bgColor = {
    backgroundColor: bg,
  };

  return (
    <div className="modal-content add-board-modal-content">
      <div className="grid-3-1">
        <div className="p-1 grid-3-1 rounded-lg" style={bgColor}>
          <div>
            <input
              type="text"
              placeholder="Add board title"
              value={text}
              onChange={onChange}
              onKeyUp={onKeyUp}
              className="m-0 border-0 text-bold text-light pl-1 rounded"
            />
          </div>
          <div>
            <div className="close" onClick={onClose}>
              &times;
            </div>
          </div>
        </div>
        <div className="func-colors grid-3 gap-half" onClick={onBgClicked}>
          {boardColors.map((c, index) => (
            <div
              id={c}
              key={c}
              style={{ background: c }}
              className="rounded-lg p-1 cursor-p"
            ></div>
          ))}
          {/* <div id='#ee3a59' className='rounded-lg p-1 background-red cursor-p'></div>
          <div id='#e27b47' className='rounded-lg p-1 background-orange cursor-p'></div>
          <div id='#efca58' className='rounded-lg p-1 background-yellow cursor-p'></div>
          <div id='#46b29e' className='rounded-lg p-1 background-blue-l cursor-p'></div>
          <div id='#344e5c' className='rounded-lg p-1 background-blue-d cursor-p'></div> */}
        </div>
      </div>
      <div
        onClick={onAdd}
        className={`btn btn-narrow m text-bold ${
          text !== '' ? 'btn-success' : 'cursor-not-allowed'
        }`}
      >
        Create Board
      </div>
    </div>
  );
};

export default AddBoardModal;
