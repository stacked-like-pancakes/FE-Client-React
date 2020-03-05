export const controllerState = {
  state: 'Hello World',
  map: [],
  player: { x: null, y: null }
};

export const controllerReducer = (state = controllerState, action) => {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        state: action.payload
      };

    case 'LOAD_PLAYER':
      return {
        ...state,
        player: action.payload
      };

    case 'PLAYER_MOVE_NORTH':
      return {
        ...state,
        player: { ...state.player, y: state.player.y + 1 }
      };

    case 'PLAYER_MOVE_SOUTH':
      return {
        ...state,
        player: { ...state.player, y: state.player.y - 1 }
      };

    case 'PLAYER_MOVE_WEST':
      return {
        ...state,
        player: { ...state.player, x: state.player.x - 1 }
      };

    case 'PLAYER_MOVE_EAST':
      return {
        ...state,
        player: { ...state.player, x: state.player.x + 1 }
      };

    case 'FETCH_MAP_DATA':
      return {
        ...state,
        map: action.payload
      };
    default:
      return state;
  }
};
