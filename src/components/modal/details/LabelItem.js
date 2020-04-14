import React, { useContext } from 'react';

import BoardContext from '../../../context/board/boardContext';

const Labelitem = ({ label, onClick }) => {
  const { labels } = useContext(BoardContext);

  const thisLabel = labels.filter(l => l.id === label)[0];

  return (
    <div
      onClick={onClick}
      className={`d-i-b details-label hover label-color-${thisLabel.colorName}`}>
    </div>
  )
}

export default Labelitem
