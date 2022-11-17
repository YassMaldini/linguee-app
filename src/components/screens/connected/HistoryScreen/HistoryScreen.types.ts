import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Dispatch } from 'redux';
import { TranslationResponse } from '../../../../types/models/translation/translation.types';
import {
  HistoryStackParamsList,
  HistoryStackScreenList,
} from '../../../navigation/HistoryStack/HistoryStack.types';

export type HistoryScreenProps = NativeStackScreenProps<
  HistoryStackParamsList,
  HistoryStackScreenList.HistoryScreen
>;

export interface RemoveSavedTranslation {
  translationToRemove: TranslationResponse;
  savedTranslations: TranslationResponse[] | null;
  dispatch: Dispatch;
}
