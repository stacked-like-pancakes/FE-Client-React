import {
  makeLines,
  northLines,
  southLines,
  westLines,
  eastLines,
  chatFilter,
  chat
} from './utils';

export const controllerState = {
  map: [],
  player: { x: null, y: null },
  room: '',
  chat,
  lines: {
    north: [],
    south: [],
    east: [],
    west: []
  }
};

export const controllerReducer = (state = controllerState, action) => {
  switch (action.type) {
    case 'LOAD_PLAYER':
      return {
        ...state,
        player: { x: action.payload.x, y: action.payload.y },
        room: action.payload.title
      };

    case 'CHAT_INTERACTION':
      console.log(action.payload);
      if (
        action.payload.input.toLowerCase() === 'move up' ||
        action.payload.input.toLowerCase() === 'move north'
      ) {
        return {
          ...state,
          player: { ...state.player, y: state.player.y + 1 },
          room: action.payload.data.title,
          chat: chatFilter(state.chat, action.payload.data.description)
        };
      }
      return {
        ...state,
        chat: chatFilter(state.chat, action.payload.input)
      };

    case 'PLAYER_MOVE_NORTH':
      return {
        ...state,
        player: { ...state.player, y: state.player.y + 1 },
        room: action.payload.title,
        chat: chatFilter(state.chat, action.payload.description)
      };

    case 'PLAYER_MOVE_SOUTH':
      return {
        ...state,
        player: { ...state.player, y: state.player.y - 1 },
        room: action.payload.title,
        chat: chatFilter(state.chat, action.payload.description)
      };

    case 'PLAYER_MOVE_WEST':
      return {
        ...state,
        player: { ...state.player, x: state.player.x - 1 },
        room: action.payload.title,
        chat: chatFilter(state.chat, action.payload.description)
      };

    case 'PLAYER_MOVE_EAST':
      return {
        ...state,
        player: { ...state.player, x: state.player.x + 1 },
        room: action.payload.title,
        chat: chatFilter(state.chat, action.payload.description)
      };

    case 'FETCH_MAP_DATA':
      return {
        ...state,
        map: action.payload,
        lines: {
          ...state.lines,
          north: makeLines(action.payload, northLines),
          south: makeLines(action.payload, southLines),
          east: makeLines(action.payload, eastLines),
          west: makeLines(action.payload, westLines)
        }
      };
    default:
      return state;
  }
};
