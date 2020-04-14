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
  SET_FAST_EDIT_MODAL_POS,
  SET_MOUSE_POS,
  SET_BIG_LABELS,
  SET_OPTIONS_MODAL_STEP,
  SET_OPTIONS_MODAL_STEP_TYPE,
  SET_OPTIONS_MODAL_STEP_DATA,
  SET_DATA,
  SET_SHOW_MENU,
  TOGGLE_SHOW_BOARDS,
  SET_KEEP_BOARDS,
  SET_FOUND_CARD_ID,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_BOARD_ID:
     return {
       ...state,
       currentBoardId: action.payload
     }
    case CLEAR_CURRENT_BOARD_ID:
      return {
        ...state,
        currentBoardId: null
      }
    case SET_CURRENT_LIST_ID:
      return {
        ...state,
        currentListId: action.payload
      }
    case CLEAR_CURRENT_LIST_ID:
      return {
        ...state,
        currentListId: null
      }
    case SET_CURRENT_CARD:
      return {
        ...state,
        currentCard: action.payload
      }
    case CLEAR_CURRENT_CARD:
      return {
        ...state,
        currentCard: null
      }
    case SET_RECENT_IDS:
      return {
        ...state,
        recentIds: action.payload
      }
    case SET_MODAL:
      return {
        ...state,
        modalStatus: action.payload
      }
    case SET_MODAL_TYPE:
      return {
        ...state,
        modalType: action.payload
      }
    case SET_OPTIONS_MODAL:
      return {
        ...state,
        optionsModalStatus: action.payload
      }
    case SET_OPTIONS_MODAL_TYPE:
      return {
        ...state,
        optionsModalType: action.payload
      }
    case SET_OPTIONS_MODAL_STEP:
      return {
        ...state,
        optionsModalStepStatus: action.payload
      }
    case SET_OPTIONS_MODAL_STEP_TYPE:
      return {
        ...state,
        optionsModalStepType: action.payload
      }
    case SET_OPTIONS_MODAL_STEP_DATA:
      return {
        ...state,
        optionsModalStepData: action.payload
      }
    case SET_FAST_EDIT_MODAL_POS:
      return {
        ...state,
        fastEditModalPos: action.payload
      }
    case SET_MOUSE_POS:
      return {
        ...state,
        mousePos: action.payload  
      }
    case SET_BIG_LABELS:
      return {
        ...state,
        bigLabels: action.payload
      }
    case 'setAddCardFromListActions':
      return {
        ...state,
        addCardFromListActions: action.payload
      }
    case SET_DATA:
      return {
        ...state,
        data: action.payload
      }
    case SET_SHOW_MENU:
      return {
        ...state,
        showMenu: action.payload
      }
    case SET_KEEP_BOARDS:
      return {
        ...state,
        keepBoardsList: action.payload
      }
    case TOGGLE_SHOW_BOARDS:
      return {
        ...state,
        showBoardsList: !state.showBoardsList
      }
    case SET_FOUND_CARD_ID:
      return {
        ...state,
        foundCardId: action.payload
      }
    default:
      return state;
  }
};