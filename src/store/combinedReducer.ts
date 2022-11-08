import { combineReducers } from 'redux';
import authenticationReducer from './authentication/authenticationReducer';
import mainReducer from './main/mainReducer';
import translationReducer from './translation/translationReducer';

const combinedReducer = combineReducers({
  main: mainReducer,
  authentication: authenticationReducer,
  translation: translationReducer,
});

export default combinedReducer;
