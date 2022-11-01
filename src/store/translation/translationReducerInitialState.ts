import { LanguagePair } from '../../types/models/languages/languagePair.types';
import TranslationReducerState from './translationReducer.types';

const TRANSLATION_REDUCER_INITIAL_STATE = Object.freeze<TranslationReducerState>({
  languagePair: LanguagePair.ENtoFR,
  savedTranslations: null,
});

export default TRANSLATION_REDUCER_INITIAL_STATE;
