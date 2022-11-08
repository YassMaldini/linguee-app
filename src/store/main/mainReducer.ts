import { Reducer } from 'redux';
import MainReducerActionsTypes, {
  RESET_MAIN_REDUCER,
  SET_IS_DARK_MODE,
} from './mainActions/mainActions.types';
import MainReducerState from './mainReducer.types';
import MAIN_REDUCER_INITIAL_STATE from './mainReducerInitialState';

const mainReducer: Reducer<MainReducerState, MainReducerActionsTypes> = (
  state = MAIN_REDUCER_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case SET_IS_DARK_MODE: {
      return {
        ...state,
        isDarkMode: action.isDarkMode,
      };
    }

    case RESET_MAIN_REDUCER: {
      return MAIN_REDUCER_INITIAL_STATE;
    }

    default: {
      return state;
    }
  }
};

export default mainReducer;
