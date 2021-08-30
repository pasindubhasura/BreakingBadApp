import {combineReducers} from 'redux';
import CharacterReducer from './CharacterReducer';

const reducers = combineReducers({
  characters: CharacterReducer,
});

export default reducers;
