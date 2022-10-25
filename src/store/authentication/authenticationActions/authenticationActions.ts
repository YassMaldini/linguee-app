import {
  SetApiStateAction,
  SetAuthenticationInfosAction,
  SetDeviceAction,
  SetProfileAction,
  SetSecretsAction,
  SET_API_STATE,
  SET_AUTHENTICATION_INFOS,
  SET_DEVICE,
  SET_PROFILE,
  SET_SECRETS,
  SIGN_OUT,
} from './authenticationActions.types';
import { QueryClient } from 'react-query';
import { HEADERS } from 'apisauce';
import api from '../../../utils/api/api';
import { User } from '../../../types/models/user/User.types';
import { Dispatch } from 'redux';
import { Secrets } from '../../../types/models/secrets/secrets.types';

export const setProfile = (profile: User) => (dispatch: Dispatch) => {
  dispatch<SetProfileAction>({
    type: SET_PROFILE,
    profile,
  });
};

export const setSecrets = (secrets: Secrets | null) => async (dispatch: Dispatch) => {
  dispatch<SetSecretsAction>({
    type: SET_SECRETS,
    secrets,
  });
};

export const signOut = (queryClient: QueryClient) => async (dispatch: Dispatch) => {
  queryClient.removeQueries();
  Object.keys(api.headers).forEach((key) => api.deleteHeader(key));
  dispatch<any>({
    type: SIGN_OUT,
  });
};
