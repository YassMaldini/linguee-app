import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../RootStack/RootStack.types';

export type ConnectedStackParamsList = {
  ConnectedBottomTab: undefined;
  HomeScreen: undefined;
};

export type ConnectedStackScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'ConnectedStack'
>;
