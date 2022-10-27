import { LanguagePair } from '../../../../../types/models/languages/languagePair.types';

export interface LanguagePairModalItemProps {
  languagePair: LanguagePair;
  closeModal: () => void;
}
