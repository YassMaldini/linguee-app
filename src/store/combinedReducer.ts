import { combineReducers } from 'redux';
import authenticationReducer from './authentication/authenticationReducer';

const combinedReducer = combineReducers({
  authentication: authenticationReducer,
});

export default combinedReducer;
