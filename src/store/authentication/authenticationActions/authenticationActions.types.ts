import { Action } from 'redux';
import { State } from '../../../types/api/core/state.types';
import { Secrets } from '../../../types/models/authentication/secrets.types';
import { Device } from '../../../types/models/device/device.types';
import User from '../../../types/models/user/User.types';

export const SET_AUTHENTICATION_INFOS = 'SET_AUTHENTICATION_INFOS';
export const SET_PROFILE = 'SET_PROFILE';
export const SET_SECRETS = 'SET_SECRETS';
export const SET_DEVICE = 'SET_DEVICE';
export const SET_API_STATE = 'SET_API_STATE';
export const SIGN_OUT = 'SIGN_OUT';

export interface SetAuthenticationInfosAction extends Action {
  type: typeof SET_AUTHENTICATION_INFOS;
  profile: User | null;
  secrets: Secrets | null;
  device: Device | null;
}

export interface SetProfileAction extends Action {
  type: typeof SET_PROFILE;
  profile: User | null;
}

export interface SetSecretsAction extends Action {
  type: typeof SET_SECRETS;
  secrets: Secrets | null;
}

export interface SetDeviceAction extends Action {
  type: typeof SET_DEVICE;
  device: Device | null;
}

export interface SetApiStateAction extends Action {
  type: typeof SET_API_STATE;
  apiState: State | null;
}

export interface SignOutAction extends Action {
  type: typeof SIGN_OUT;
}

type AuthenticationReducerActionsTypes =
  | SetAuthenticationInfosAction
  | SetProfileAction
  | SetSecretsAction
  | SetDeviceAction
  | SetApiStateAction
  | SignOutAction;

export default AuthenticationReducerActionsTypes;
