export const addCharacters = () => {
  return dispatch => {
    dispatch({
      type: 'addCharacters',
      payload: [],
    });
  };
};

export const getOneCharacter = () => {
  return dispatch => {
    dispatch({
      type: 'getOneCharacter',
      payload: [],
    });
  };
};
