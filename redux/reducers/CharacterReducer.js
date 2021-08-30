const initialState = {
  characters: [
    {id: 1, name: 'tim'},
    {id: 2, name: 'jim'},
    {id: 3, name: 'jack'},
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;
