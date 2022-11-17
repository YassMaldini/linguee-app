import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HistoryStackParamsList } from './HistoryStack.types';

export const { Navigator, Screen } = createNativeStackNavigator<HistoryStackParamsList>();
