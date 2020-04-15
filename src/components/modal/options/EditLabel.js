import React, { useState, useEffect, useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';
import AlertContext from '../../../context/alert/alertContext';

const EditLabel = () => {
  const [text, setText] = useState('');
  const [colorName, setColorName] = useState(null);

  const {
    setOptionsModal,
    setOptionsModalStep,
    currentCard,
    currentBoardId,
    currentListId,
    setCurrentCard,
    optionsModalStepData: data,
  } = useContext(UserContext);
  const {
    labels,
    colors,
    updateCard,
    addLabel,
    updateLabel,
    deleteLabel,
  } = useContext(BoardContext);
  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    data.type === 'edit' && setText(data.label.name);
    data.type === 'edit'
      ? setColorName(data.label.colorName)
      : setColorName('green');
    // eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onColorClick = (e) => {
    setColorName(e.target.id);
  };

  const onSave = async () => {
    if (data.type === 'edit') {
      updateLabel(text, colorName, data.label._id);
      setOptionsModal('on', 'editCardLabels');
      setOptionsModalStep('off');
      setAlert('Label updated', 'success');
    } else if (data.type === 'create') {
      let is = false;

      labels.forEach((label) => {
        if (label.colorName === colorName) {
          if (label.name === text) {
            is = true;
          }
        }
      });

      if (!is) {
        // add to list of labels in board state
        const label = await addLabel(text, colorName);

        const newCard = {
          ...currentCard,
          labels: [...currentCard.labels, label._id],
        };

        // add label to current card
        updateCard(currentBoardId, currentListId, currentCard._id, newCard);
        setCurrentCard(newCard);
        setAlert('Label created', 'success');
      } else {
        setAlert('Label already exits', 'light');
      }

      setOptionsModal('on', 'editCardLabels');
      setOptionsModalStep('off');
    }
  };

  const onDelete = () => {
    deleteLabel(data.label._id);
    setOptionsModal('on', 'editCardLabels');
    setOptionsModalStep('off');
    setAlert('Label deleted', 'dark');
  };

  return (
    <div>
      <input
        type="text"
        className="m-0 text-85 p"
        value={text}
        placeholder="enter label name"
        onChange={onChange}
      />
      <div className="text-85 mt mb">pick a color</div>
      <div className="mb">
        {colors.map((color) => (
          <div
            key={color.name}
            style={{ background: color.color }}
            className="color-for-select hover-lighten"
            id={color.name}
            onClick={onColorClick}
          >
            {color.name === colorName && (
              <i className="fas fa-check text-85 text-white m-0"></i>
            )}
          </div>
        ))}
      </div>
      <div>
        <div className="btn btn-success" onClick={onSave}>
          {data.type === 'edit' ? 'Save' : 'Create'}
        </div>
        {data.type === 'edit' && (
          <div className="btn btn-danger float-right" onClick={onDelete}>
            Delete
          </div>
        )}
      </div>
    </div>
  );
};

export default EditLabel;
