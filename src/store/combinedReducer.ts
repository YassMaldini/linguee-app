import { combineReducers } from 'redux';
import authenticationReducer from './authentication/authenticationReducer';
import translationReducer from './translation/translationReducer';

const combinedReducer = combineReducers({
  authentication: authenticationReducer,
  translation: translationReducer,
});

export default combinedReducer;
