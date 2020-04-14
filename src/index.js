import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import BoardState from './context/board/BoardState';
import AlertState from './context/alert/AlertState';
import UserState from './context/user/UserState';

const StateContainer = () => {
  return (
    <BoardState>
      <AlertState>
        <UserState>
          <App />
        </UserState>
      </AlertState>
    </BoardState>
  );
}

ReactDOM.render(<StateContainer />, document.getElementById('root'));