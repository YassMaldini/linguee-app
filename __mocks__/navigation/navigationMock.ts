import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamsList } from '../../src/components/navigation/HomeStack/HomeStack.types';

export type NavigationScreenPropAlias = NativeStackNavigationProp<HomeStackParamsList>;

export const navigationMock: Partial<NavigationScreenPropAlias> = {
  navigate: jest.fn(),
  dispatch: jest.fn(),
  reset: jest.fn(),
  goBack: jest.fn(),
  isFocused: jest.fn(),
  canGoBack: () => true,
  getId: jest.fn(),
  getState: jest.fn(),
};
