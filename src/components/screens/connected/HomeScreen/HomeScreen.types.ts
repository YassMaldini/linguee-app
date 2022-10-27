import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Dispatch, SetStateAction } from 'react';
import { SearchResponse } from '../../../../types/models/search/search.types';
import { HomeStackParamsList } from '../../../navigation/HomeStack/HomeStack.types';

export interface HomeScreenContextProps {
  searchResponse?: SearchResponse;
  setSearchResponse: Dispatch<SetStateAction<SearchResponse | undefined>>;
  // isLoading: boolean;
  // error: Error | null;
}

export type HomeScreenProps = NativeStackScreenProps<HomeStackParamsList, 'HomeScreen'>;
