export const addCharacters = characters => {
  return async dispatch => {
    dispatch({
      type: 'addCharacters',
      payload: characters,
    });
  };
};

export const addOneCharacter = character => {
  return dispatch => {
    dispatch({
      type: 'addOneCharacter',
      payload: character,
    });
  };
};

export const addEpisodes = episodes => {
  return dispatch => {
    dispatch({
      type: 'addEpisodes',
      payload: episodes,
    });
  };
};
