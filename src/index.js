import React from 'react';
import ReactDOM from 'react-dom';
import RoutesContainer from './RoutesContainer';

import BoardState from './context/board/BoardState';
import AlertState from './context/alert/AlertState';
import UserState from './context/user/UserState';
import AuthState from './context/auth/AuthState';

const StateContainer = () => {
  return (
    <AuthState>
      <BoardState>
        <AlertState>
          <UserState>
            <RoutesContainer />
          </UserState>
        </AlertState>
      </BoardState>
    </AuthState>
  );
};

ReactDOM.render(<StateContainer />, document.getElementById('root'));
