import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type HistoryStackParamsList = {
  [HistoryStackScreenList.HistoryScreen]: undefined;
};

export enum HistoryStackScreenList {
  HistoryScreen = 'HistoryScreen',
}

export type HistoryStackProps = NativeStackScreenProps<
  HistoryStackParamsList,
  HistoryStackScreenList
>;
