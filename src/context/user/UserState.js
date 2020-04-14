import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import {
  SET_CURRENT_BOARD_ID,
  CLEAR_CURRENT_BOARD_ID,
  SET_CURRENT_LIST_ID,
  CLEAR_CURRENT_LIST_ID,
  SET_CURRENT_CARD,
  CLEAR_CURRENT_CARD,
  SET_RECENT_IDS,
  SET_MODAL,
  SET_MODAL_TYPE,
  SET_OPTIONS_MODAL,
  SET_OPTIONS_MODAL_TYPE,
  SET_OPTIONS_MODAL_STEP,
  SET_OPTIONS_MODAL_STEP_TYPE,
  SET_OPTIONS_MODAL_STEP_DATA,
  SET_FAST_EDIT_MODAL_POS,
  SET_MOUSE_POS,
  SET_BIG_LABELS,
  SET_DATA,
  SET_SHOW_MENU,
  TOGGLE_SHOW_BOARDS,
  SET_KEEP_BOARDS,
  SET_FOUND_CARD_ID,
} from '../types';

const UserState = (props) => {
  const initialState = {
    currentBoardId: null,
    currentListId: null,
    currentCard: null,
    recentIds: [],
    ModalStatus: 'off',
    modalType: null,
    optionsModalStatus: 'off',
    optionsModaltype: null,
    optionsModalStepStatus: 'off',
    optionsModalStepType: null,
    optionsModalStepData: null,
    fastEditModalPos: null,
    mosuePos: {},
    bigLabels: false,
    addCardFromListActions: null,
    data: null,
    showMenu: false,
    showBoardsList: false,
    keepBoardsList: false,
    foundCardId: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const getUserdata = () => {
    console.log('get user data');
  };

  const setCurrentBoardId = (id) => {
    dispatch({
      type: SET_CURRENT_BOARD_ID,
      payload: id,
    });
    setRecentBaord(id);
  };

  // set new board to recent
  const setRecentBaord = (id) => {
    const newRecentIds = state.recentIds;
    if (newRecentIds.length === 6 && id !== null) {
      newRecentIds.shift();
      newRecentIds.push(id);
    } else if (id !== null) {
      newRecentIds.push(id);
    }
    dispatch({
      type: SET_RECENT_IDS,
      payload: newRecentIds,
    });
  };

  const deleteFromRecent = (id) => {
    const newRecentIds = state.recentIds.filter((i) => i !== id);

    dispatch({
      type: SET_RECENT_IDS,
      payload: newRecentIds,
    });
  };

  const clearRecent = () => {
    dispatch({
      type: SET_RECENT_IDS,
      payload: [],
    });
  };

  // also can be done with "setCurrentBoardId(null)"
  const clearCurrentBoardId = () => {
    dispatch({
      type: CLEAR_CURRENT_BOARD_ID,
    });
    setShowMenu('there is a command');
  };

  const setCurrentListId = (id) => {
    dispatch({
      type: SET_CURRENT_LIST_ID,
      payload: id,
    });
  };

  const clearCurrentListId = () => {
    dispatch({
      type: CLEAR_CURRENT_LIST_ID,
    });
  };

  const setCurrentCard = (card) => {
    dispatch({
      type: SET_CURRENT_CARD,
      payload: card,
    });
  };

  const clearCurrentCard = () => {
    dispatch({
      type: CLEAR_CURRENT_CARD,
    });
  };

  const setModal = (status, type) => {
    dispatch({
      type: SET_MODAL,
      payload: status,
    });
    if (status === 'off') {
      clearModalType();
    } else if (status === 'on') {
      setModalType(type);
    }
  };

  const setModalType = (type) => {
    dispatch({
      type: SET_MODAL_TYPE,
      payload: type,
    });
  };

  const clearModalType = () => {
    dispatch({
      type: SET_MODAL_TYPE,
      payload: null,
    });
  };

  const setOptionsModal = (status, type) => {
    dispatch({
      type: SET_OPTIONS_MODAL,
      payload: status,
    });
    if (status === 'off') {
      clearOptionsModalType();
      setOptionsModalStep('off');
      setData(null);
    } else if (status === 'on') {
      setOptionsModalType(type);
    }
  };

  const setOptionsModalType = (type) => {
    dispatch({
      type: SET_OPTIONS_MODAL_TYPE,
      payload: type,
    });
  };

  const clearOptionsModalType = () => {
    dispatch({
      type: SET_OPTIONS_MODAL_TYPE,
      payload: null,
    });
  };

  // two prams 1. has step or not (on or off) 2. the last step
  const setOptionsModalStep = (status, step, data) => {
    dispatch({
      type: SET_OPTIONS_MODAL_STEP,
      payload: status,
    });
    if (status === 'off') {
      clearOptionsModalStepType();
    } else if (status === 'on') {
      setOptionsModalStepType(step);
    }
    if (data) {
      setOptionsModalStepData(data);
    } else {
      clearOptionsModalStepData();
    }
  };

  const setOptionsModalStepData = (data) => {
    dispatch({
      type: SET_OPTIONS_MODAL_STEP_DATA,
      payload: data,
    });
  };

  const clearOptionsModalStepData = () => {
    dispatch({
      type: SET_OPTIONS_MODAL_STEP_DATA,
      payload: null,
    });
  };

  const setOptionsModalStepType = (step) => {
    dispatch({
      type: SET_OPTIONS_MODAL_STEP_TYPE,
      payload: step,
    });
  };

  const clearOptionsModalStepType = () => {
    dispatch({
      type: SET_OPTIONS_MODAL_STEP_TYPE,
      payload: null,
    });
  };

  const setFastEditModalPos = (pos) => {
    dispatch({
      type: SET_FAST_EDIT_MODAL_POS,
      payload: pos,
    });
  };

  const setMousePos = (x, y) => {
    dispatch({
      type: SET_MOUSE_POS,
      payload: { x, y },
    });
  };

  const toggleBigLabels = () => {
    dispatch({
      type: SET_BIG_LABELS,
      payload: !state.bigLabels,
    });
  };

  //  add card will be addeed to the list with the id that its passed in
  const setAddCardFromListActions = (id) => {
    dispatch({
      type: 'setAddCardFromListActions',
      payload: id,
    });
  };

  const setData = (data) => {
    if (data) {
      dispatch({
        type: SET_DATA,
        payload: data,
      });
    } else {
      dispatch({
        type: SET_DATA,
        payload: null,
      });
    }
  };

  const setShowMenu = (command) => {
    if (command) {
      dispatch({
        type: SET_SHOW_MENU,
        payload: false,
      });
    } else {
      dispatch({
        type: SET_SHOW_MENU,
        payload: !state.showMenu,
      });
    }
  };

  const toggleKeepBoardsList = () => {
    dispatch({
      type: SET_KEEP_BOARDS,
      payload: !state.keepBoardsList,
    });
  };

  const toggleShowBoardsList = () => {
    dispatch({
      type: TOGGLE_SHOW_BOARDS,
    });
  };

  const setFoundCardId = (id) => {
    dispatch({
      type: SET_FOUND_CARD_ID,
      payload: id,
    });
    setTimeout(() => {
      dispatch({
        type: SET_FOUND_CARD_ID,
        payload: null,
      });
    }, 2000);
  };

  return (
    <UserContext.Provider
      value={{
        currentBoardId: state.currentBoardId,
        currentListId: state.currentListId,
        currentCard: state.currentCard,
        recentIds: state.recentIds,
        modalStatus: state.modalStatus,
        modalType: state.modalType,
        optionsModalStatus: state.optionsModalStatus,
        optionsModalType: state.optionsModalType,
        optionsModalStepStatus: state.optionsModalStepStatus,
        optionsModalStepType: state.optionsModalStepType,
        optionsModalStepData: state.optionsModalStepData,
        fastEditModalPos: state.fastEditModalPos,
        mousePos: state.mousePos,
        bigLabels: state.bigLabels,
        addCardFromListActions: state.addCardFromListActions,
        data: state.data,
        showMenu: state.showMenu,
        showBoardsList: state.showBoardsList,
        keepBoardsList: state.keepBoardsList,
        foundCardId: state.foundCardId,
        getUserdata,
        setCurrentBoardId,
        clearCurrentBoardId,
        setCurrentListId,
        clearCurrentListId,
        setCurrentCard,
        clearCurrentCard,
        setModal,
        setOptionsModal,
        setOptionsModalStep,
        setFastEditModalPos,
        setMousePos,
        toggleBigLabels,
        setAddCardFromListActions,
        setData,
        setShowMenu,
        deleteFromRecent,
        clearRecent,
        toggleKeepBoardsList,
        toggleShowBoardsList,
        setFoundCardId,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
