import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Dispatch, SetStateAction } from 'react';
import { Orientation } from 'expo-screen-orientation';
import { SearchResponse } from '../../../types/models/search/search.types';
import { TranslationResponse } from '../../../types/models/translation/translation.types';

export type HomeStackParamsList = {
  [HomeStackScreenList.HomeScreen]: undefined;
  [HomeStackScreenList.TranslationScreen]: { url: string; wt?: number };
  [HomeStackScreenList.HistoryTranslationScreen]: undefined;
};

export enum HomeStackScreenList {
  HomeScreen = 'HomeScreen',
  TranslationScreen = 'TranslationScreen',
  HistoryTranslationScreen = 'HistoryTranslationScreen',
}

export type HomeStackProps = NativeStackScreenProps<HomeStackParamsList, HomeStackScreenList>;

export interface HomeStackContextProps {
  searchResponse?: SearchResponse;
  setSearchResponse: Dispatch<SetStateAction<SearchResponse | undefined>>;
  activeScreen: HomeStackScreenList;
  setActiveScreen: Dispatch<SetStateAction<HomeStackScreenList>>;
  currentHistoryIndex: number;
  setCurrentHistoryIndex: Dispatch<SetStateAction<number>>;
  activeTranslation: TranslationResponse | undefined;
  setActiveTranslation: Dispatch<SetStateAction<TranslationResponse | undefined>>;
  isSettingsModalVisible: boolean;
  setSettingsModalVisible: Dispatch<SetStateAction<boolean>>;
  currentScreenOrientation: Orientation;
  navigation: NativeStackNavigationProp<HomeStackParamsList>;
}
