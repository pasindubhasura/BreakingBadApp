import {combineReducers} from 'redux';
import CharacterReducer from './CharacterReducer';

const reducers = combineReducers({
  characterState: CharacterReducer,
});

export default reducers;
