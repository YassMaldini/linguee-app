import { Action } from 'redux';

export const SET_IS_DARK_MODE = 'SET_IS_DARK_MODE';
export const RESET_MAIN_REDUCER = 'RESET_MAIN_REDUCER';

export interface SetIsDarkModeAction extends Action {
  type: typeof SET_IS_DARK_MODE;
  isDarkMode: boolean;
}

export interface ResetMainAction extends Action {
  type: typeof RESET_MAIN_REDUCER;
}

type MainReducerActionsTypes = SetIsDarkModeAction | ResetMainAction;

export default MainReducerActionsTypes;
