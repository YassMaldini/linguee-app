import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Dispatch, SetStateAction } from 'react';
import { SearchResponse } from '../../../types/models/search/search.types';

export type HomeStackParamsList = {
  [HomeStackScreenList.HomeScreen]: undefined;
  [HomeStackScreenList.TranslationScreen]: { url: string; wt?: number };
};

export enum HomeStackScreenList {
  HomeScreen = 'HomeScreen',
  TranslationScreen = 'TranslationScreen',
}

export type HomeStackProps = NativeStackScreenProps<HomeStackParamsList, HomeStackScreenList>;

export interface HomeStackContextProps {
  searchResponse?: SearchResponse;
  setSearchResponse: Dispatch<SetStateAction<SearchResponse | undefined>>;
  activeScreen: HomeStackScreenList;
  setActiveScreen: Dispatch<SetStateAction<HomeStackScreenList>>;
  navigation: NativeStackNavigationProp<HomeStackParamsList>;
}
