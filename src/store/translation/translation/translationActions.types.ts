import { Action } from 'redux';
import { LanguagePair } from '../../../types/models/languages/languagePair.types';
import { TranslationResponse } from '../../../types/models/translation/translation.types';

export const SET_LANGUAGE_PAIR = 'SET_LANGUAGE_PAIR';
export const SAVE_TRANSLATION = 'SAVE_TRANSLATION';
export const SET_SAVED_TRANSLATIONS = 'SET_SAVED_TRANSLATIONS';
export const RESET_TRANSLATIONS = 'RESET_TRANSLATIONS';
export const SET_CLIPBOARD_ENABLED = 'SET_CLIPBOARD_ENABLED';

export interface SetLanguagePairAction extends Action {
  type: typeof SET_LANGUAGE_PAIR;
  languagePair: LanguagePair;
}

export interface SaveTranslationAction extends Action {
  type: typeof SAVE_TRANSLATION;
  translationToSave: TranslationResponse;
}

export interface SetSavedTranslationsAction extends Action {
  type: typeof SET_SAVED_TRANSLATIONS;
  savedTranslations: TranslationResponse[] | null;
}

export interface SetClipboardEnabledAction extends Action {
  type: typeof SET_CLIPBOARD_ENABLED;
  isClipboardEnabled: boolean;
}

export interface ResetTranslationsAction extends Action {
  type: typeof RESET_TRANSLATIONS;
}

type TranslationReducerActionsTypes =
  | SetLanguagePairAction
  | ResetTranslationsAction
  | SaveTranslationAction
  | SetSavedTranslationsAction
  | SetClipboardEnabledAction;

export default TranslationReducerActionsTypes;
