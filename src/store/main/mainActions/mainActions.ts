import {
  ResetMainAction,
  RESET_MAIN_REDUCER,
  SetIsDarkModeAction,
  SET_IS_DARK_MODE,
} from './mainActions.types';
import { Dispatch } from 'redux';

export const setDarkMode = (isDarkMode: boolean) => async (dispatch: Dispatch) => {
  dispatch<SetIsDarkModeAction>({
    type: SET_IS_DARK_MODE,
    isDarkMode,
  });
};

export const resetMain = () => async (dispatch: Dispatch) => {
  dispatch<ResetMainAction>({
    type: RESET_MAIN_REDUCER,
  });
};
