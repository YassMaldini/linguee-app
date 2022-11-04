import { LanguagePair } from '../../types/models/languages/languagePair.types';
import { TranslationResponse } from '../../types/models/translation/translation.types';

interface TranslationReducerState {
  languagePair: LanguagePair;
  savedTranslations: TranslationResponse[] | null;
  isClipboardEnabled: boolean;
}

export default TranslationReducerState;
