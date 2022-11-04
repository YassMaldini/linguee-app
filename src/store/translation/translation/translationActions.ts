import {
  ResetTranslationsAction,
  RESET_TRANSLATIONS,
  SaveTranslationAction,
  SAVE_TRANSLATION,
  SetClipboardEnabledAction,
  SetLanguagePairAction,
  SetSavedTranslationsAction,
  SET_CLIPBOARD_ENABLED,
  SET_LANGUAGE_PAIR,
  SET_SAVED_TRANSLATIONS,
} from './translationActions.types';
import { Dispatch } from 'redux';
import { LanguagePair } from '../../../types/models/languages/languagePair.types';
import { TranslationResponse } from '../../../types/models/translation/translation.types';

export const setLanguagePair = (languagePair: LanguagePair) => async (dispatch: Dispatch) => {
  dispatch<SetLanguagePairAction>({
    type: SET_LANGUAGE_PAIR,
    languagePair,
  });
};

export const saveTranslation =
  (translationToSave: TranslationResponse) => async (dispatch: Dispatch) => {
    dispatch<SaveTranslationAction>({
      type: SAVE_TRANSLATION,
      translationToSave,
    });
  };

export const setSavedTranslations =
  (savedTranslations: TranslationResponse[]) => async (dispatch: Dispatch) => {
    dispatch<SetSavedTranslationsAction>({
      type: SET_SAVED_TRANSLATIONS,
      savedTranslations,
    });
  };

export const setCliboardEnabled = (isClipboardEnabled: boolean) => async (dispatch: Dispatch) => {
  dispatch<SetClipboardEnabledAction>({
    type: SET_CLIPBOARD_ENABLED,
    isClipboardEnabled,
  });
};

export const resetTranslations = () => async (dispatch: Dispatch) => {
  dispatch<ResetTranslationsAction>({
    type: RESET_TRANSLATIONS,
  });
};
