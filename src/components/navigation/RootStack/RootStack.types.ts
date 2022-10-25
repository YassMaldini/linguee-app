import { NavigatorScreenParams } from '@react-navigation/native';
import { AuthenticationStackParamsList } from '../AuthenticationStack/AuthenticationStack.types';
import { ConnectedStackParamsList } from '../ConnectedStack/ConnectedStack.types';

export type RootStackParamsList = {
  NoNetworkAccess: undefined;
  AuthenticationStack: NavigatorScreenParams<AuthenticationStackParamsList>;
  ConnectedStack: NavigatorScreenParams<ConnectedStackParamsList>;
};
