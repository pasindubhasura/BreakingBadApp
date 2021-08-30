import axios from 'axios';

export const addCharacters = response => {
  return async dispatch => {
    // const response = await axios.get(
    //   'https://www.breakingbadapi.com/api/characters',
    // );
    dispatch({
      type: 'addCharacters',
      payload: response,
    });
  };
};

export const addOneCharacter = () => {
  return dispatch => {
    dispatch({
      type: 'addOneCharacter',
      payload: [],
    });
  };
};
