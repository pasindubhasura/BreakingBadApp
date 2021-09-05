const initialState = {
  characters: [],
  character: {},
  episodes: [],
  episode: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addCharacters':
      return {
        ...state,
        characters: action.payload,
      };
    case 'addOneCharacter':
      return {
        ...state,
        character: action.payload,
      };
    case 'addEpisodes':
      return {
        ...state,
        episodes: action.payload,
      };
    case 'addOneEpisode':
      return {
        ...state,
        episode: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
