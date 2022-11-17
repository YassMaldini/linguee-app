import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabStackParamsList } from './BottomTabStack.types';

export const { Navigator, Screen } = createNativeStackNavigator<BottomTabStackParamsList>();
