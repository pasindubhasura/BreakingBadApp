import {initialState} from '../initialState';

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
    default:
      return state;
  }
};
export default reducer;
