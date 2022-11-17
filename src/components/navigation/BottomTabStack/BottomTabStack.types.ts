import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Dispatch, SetStateAction } from 'react';
import { Orientation } from 'expo-screen-orientation';
import { SearchResponse } from '../../../types/models/search/search.types';
import { TranslationResponse } from '../../../types/models/translation/translation.types';
import { HomeStackParamsList, HomeStackScreenList } from '../HomeStack/HomeStack.types';
import { HistoryStackScreenList } from '../HistoryStack/HistoryStack.types';

export type BottomTabStackParamsList = {
  HomeStack: undefined;
  HistoryStack: undefined;
};

export type BottomTabStackProps = NativeStackScreenProps<BottomTabStackParamsList>;

export interface BottomTabStackContextProps {
  searchResponse?: SearchResponse;
  setSearchResponse: Dispatch<SetStateAction<SearchResponse | undefined>>;
  activeScreen: HomeStackScreenList | HistoryStackScreenList;
  setActiveScreen: Dispatch<SetStateAction<HomeStackScreenList | HistoryStackScreenList>>;
  currentHistoryIndex: number;
  setCurrentHistoryIndex: Dispatch<SetStateAction<number>>;
  activeTranslation: TranslationResponse | undefined;
  setActiveTranslation: Dispatch<SetStateAction<TranslationResponse | undefined>>;
  isSettingsModalVisible: boolean;
  setSettingsModalVisible: Dispatch<SetStateAction<boolean>>;
  currentScreenOrientation: Orientation;
  navigation: NativeStackNavigationProp<BottomTabStackParamsList>;
  homeStackNavigation: NativeStackNavigationProp<HomeStackParamsList>;
}
