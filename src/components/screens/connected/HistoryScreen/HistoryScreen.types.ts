import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Dispatch } from 'redux';
import { TranslationResponse } from '../../../../types/models/translation/translation.types';
import {
  HomeStackParamsList,
  HomeStackScreenList,
} from '../../../navigation/HomeStack/HomeStack.types';

export type HistoryScreenProps = NativeStackScreenProps<
  HomeStackParamsList,
  HomeStackScreenList.HistoryScreen
>;

export interface RemoveSavedTranslation {
  translationToRemove: TranslationResponse;
  savedTranslations: TranslationResponse[] | null;
  dispatch: Dispatch;
}
