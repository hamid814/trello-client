import React, { useContext } from 'react';

import BoardContext from '../../../context/board/boardContext';

const CardLabel = ({
  label,
  onClick,
  onMouseEnter,
  onMouseLeave,
  bigLabels,
}) => {
  const { labels } = useContext(BoardContext);

  const thisLabel = labels.filter((l) => l._id === label)[0];

  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`func-card-label d-i-b label label-color-${
        thisLabel.colorName
      } ${bigLabels ? 'label-lg' : 'label-sm'}`}
    >
      <div className="func-label-text label-text m-0">
        {bigLabels && thisLabel.name}
      </div>
    </div>
  );
};

export default CardLabel;
