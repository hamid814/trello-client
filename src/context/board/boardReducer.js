import {
  SET_DEMO,
  DELETE_ALL_BOARDS,
  SET_BOARDS,
  ADD_BOARD,
  DELETE_BOARD,
  CLEAR_BOARD,
  SET_TITLE,
  SET_STAR,
  SET_BOARD_WATCHING,
  SET_WATCHING,
  SET_COLOR,
  SET_DESCRIPTION,
  ADD_LIST,
  DELETE_LIST,
  DELETE_ALL_CARDS,
  MOVE_ALL_CARDS,
  SET_LIST_TITLE,
  COPY_LIST,
  SORT_LIST,
  MOVE_LIST,
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  MOVE_CARD,
  SET_LABELS,
  ADD_LABEL,
  UPDATE_LABEL,
  DELETE_LABEL,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_DEMO:
      return {
        ...state,
        boards: action.payload,
      };
    case DELETE_ALL_BOARDS:
      return {
        ...state,
        boards: [],
      };
    case SET_BOARDS:
      return {
        ...state,
        boards: action.payload,
      };
    case ADD_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.payload],
      };
    case DELETE_BOARD:
      return {
        ...state,
        boards: state.boards.filter((b) => b.id !== action.payload),
      };
    case CLEAR_BOARD:
      return {
        ...state,
        boards: state.boards.map((b) => {
          if (b.id === action.payload) {
            b.lists = [];
          }
          return b;
        }),
      };
    case SET_TITLE:
      return {
        ...state,
        boards: state.boards.map((b) => {
          if (b.id === action.payload.id) {
            b.title = action.payload.text;
          }
          return b;
        }),
      };
    case SET_STAR:
      return {
        ...state,
        boards: state.boards.map((b) => {
          if (b.id === action.payload) {
            b.starred = !b.starred;
          }
          return b;
        }),
      };

    case SET_BOARD_WATCHING:
      return {
        ...state,
        boards: state.boards.map((b) => {
          if (b.id === action.payload) {
            b.watching = !b.watching;
          }
          return b;
        }),
      };
    case SET_WATCHING:
      return {
        ...state,
        boards: state.boards.map((b) => {
          if (b.id === action.payload.boardId) {
            b.lists.map((l) => {
              if (l.id === action.payload.listId) {
                l.watching = !l.watching;
              }
              return l;
            });
          }
          return b;
        }),
      };
    case SET_DESCRIPTION:
      return {
        ...state,
        boards: state.boards.map((b) => {
          if (b.id === action.payload.id) {
            b.description = action.payload.text;
          }
          return b;
        }),
      };
    case SET_COLOR:
      return {
        ...state,
        boards: state.boards.map((b) => {
          if (b.id === action.payload.id) {
            b.color = action.payload.color;
          }
          return b;
        }),
      };
    case ADD_LIST:
      return {
        ...state,
        boards: state.boards.map((b) => {
          if (b.id === action.payload.id) {
            b.lists.push(action.payload.newList);
          }
          return b;
        }),
      };
    case COPY_LIST:
      return {
        ...state,
        boards: state.boards.map((b) => {
          if (b.id === action.payload.boardId) {
            b.lists.splice(
              b.lists.findIndex((l) => l.id === action.payload.listId) + 1,
              0,
              action.payload.newList
            );
          }
          return b;
        }),
      };
    case SORT_LIST:
      return {
        ...state,
        boards: state.boards.map((b) => {
          if (b.id === action.payload.boardId) {
            b.lists = b.lists.map((l) => {
              if (l.id === action.payload.listId) {
                l.items = action.payload.newItems;
              }
              return l;
            });
          }
          return b;
        }),
      };
    case MOVE_LIST:
      return {
        ...state,
        boards: state.boards.map((board) => {
          if (board.id === action.payload.firstBoardId) {
            board.lists.splice(action.payload.firstIndex, 1);
          }
          if (board.id === action.payload.destBoardId) {
            board.lists.splice(
              action.payload.destIndex,
              0,
              action.payload.list
            );
          }
          return board;
        }),
      };
    case DELETE_LIST:
      return {
        ...state,
        boards: state.boards.map((board) => {
          if (board.id === action.payload.boardId) {
            board.lists = board.lists.filter(
              (list) => list.id !== action.payload.listId
            );
          }
          return board;
        }),
      };
    case DELETE_ALL_CARDS:
      return {
        ...state,
        boards: state.boards.map((b) => {
          if (b.id === action.payload.boardId) {
            b.lists.map((l) => {
              if (l.id === action.payload.listId) {
                l.items = [];
              }
              return l;
            });
          }
          return b;
        }),
      };
    case MOVE_ALL_CARDS:
      return {
        ...state,
        boards: state.boards.map((b) => {
          if (b.id === action.payload.boardId) {
            b.lists = b.lists.map((l) => {
              if (l.id === action.payload.firstListId) {
                l.items = [];
              }
              if (l.id === action.payload.destListId) {
                l.items = l.items.concat(action.payload.newItems);
              }
              return l;
            });
          }
          return b;
        }),
      };
    case ADD_CARD:
      return {
        ...state,
        boards: state.boards.map((b) => {
          if (b.id === action.payload.boardId) {
            b.lists = b.lists.map((l) => {
              if (l.id === action.payload.listId) {
                l.items.push(action.payload.newCard);
              }
              return l;
            });
          }
          return b;
        }),
      };

    case SET_LIST_TITLE:
      return {
        ...state,
        boards: state.boards.map((board) => {
          if (board.id === action.payload.boardId) {
            board.lists = board.lists.map((list) => {
              if (list.id === action.payload.listId) {
                list.title = action.payload.newTitle;
              }
              return list;
            });
          }
          return board;
        }),
      };
    case UPDATE_CARD:
      return {
        ...state,
        boards: state.boards.map((board) => {
          if (board.id === action.payload.boardId) {
            board.lists = board.lists.map((list) => {
              if (list.id === action.payload.listId) {
                list.items = list.items.map((item) =>
                  item._id === action.payload.cardId
                    ? action.payload.newCard
                    : item
                );
              }
              return list;
            });
          }
          return board;
        }),
      };
    case DELETE_CARD:
      return {
        ...state,
        boards: state.boards.map((b) => {
          if (b.id === action.payload.boardId) {
            b.lists = b.lists.map((l) => {
              if (l.id === action.payload.listId) {
                l.items = l.items.filter((i) => i.id !== action.payload.cardId);
              }
              return l;
            });
          }
          return b;
        }),
      };
    case MOVE_CARD:
      return {
        ...state,
        boards: state.boards.map((b) => {
          if (b.id === action.payload.destBoardId) {
            b.lists = b.lists.map((l) => {
              if (l.id === action.payload.destListId) {
                l.items.splice(
                  action.payload.destIndex,
                  0,
                  action.payload.card
                );
              }
              return l;
            });
          }
          return b;
        }),
      };
    case SET_LABELS:
      return {
        ...state,
        labels: action.payload,
      };
    case ADD_LABEL:
      return {
        ...state,
        labels: [...state.labels, action.payload],
      };
    case UPDATE_LABEL:
      return {
        ...state,
        labels: state.labels.map((label) => {
          if (label.id === action.payload.id) {
            label.name = action.payload.name;
            label.color = action.payload.color;
            label.colorName = action.payload.colorName;
          }
          return label;
        }),
      };
    case DELETE_LABEL:
      return {
        ...state,
        boards: state.boards.map((b) => {
          b.lists = b.lists.map((l) => {
            l.items = l.items.map((i) => {
              i.labels = i.labels.filter((l) => l !== action.payload);
              return i;
            });
            return l;
          });
          return b;
        }),
        labels: state.labels.filter((l) => l.id !== action.payload),
      };
    default:
      return state;
  }
};
