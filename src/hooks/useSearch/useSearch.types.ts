import { LanguagePair } from '../../types/models/languages/languagePair.types';

export interface UseSearchOptions {
  key: string;
}

export interface QuerySearchOptions {
  languagePair: LanguagePair;
  options: object;
}
