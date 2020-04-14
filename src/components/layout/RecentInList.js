import React, { useState, useContext } from 'react';
import uniqid from 'uniqid';
import ListOfBoardsItem from './ListOfBoardsItem';

import userContext from '../../context/user/userContext';
import boardContext from '../../context/board/boardContext';

const RecentInList = ({ searchText }) => {
  const [collapse, setCollapse] = useState(false);

  const { recentIds } = useContext(userContext);
  const { getBoard } = useContext(boardContext);

  const onCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div
      className={`mt-1 mb ${recentIds.length === 0 && 'd-n'} ${
        searchText !== '' && 'd-n'
      }`}
    >
      <div className="mb-1">
        <i className="fas fa-clock mr"></i>
        recent boards
        <div
          className="btn float-right btn-narrow text-sm"
          onClick={onCollapse}
        >
          <i className={`fas ${collapse ? 'fa-plus' : 'fa-minus'}`}></i>
        </div>
      </div>
      {!collapse &&
        recentIds.length !== 0 &&
        recentIds.map(
          (i) =>
            !getBoard(i).starred && (
              <ListOfBoardsItem
                key={uniqid()}
                board={getBoard(i)}
                isRecent={true}
              />
            )
        )}
    </div>
  );
};

export default RecentInList;
