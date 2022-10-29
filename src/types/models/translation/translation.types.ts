export interface TranslationResponse {
  main: TranslationResponseMain[];
  examples: TranslationResponseExample[];
}

export interface TranslationResponseMain {
  mainItem: TranslationResponseMainItem;
  translatedItems: TranslationResponseTranslatedItem[];
}

export interface TranslationResponseMainItem {
  text: string;
  url: string;
  wordtype: string;
  context?: string;
}

export interface TranslationResponseTranslatedItem {
  main?: TranslationTranslatedItemMain;
  lessCommon: TranslationTranslatedItemMain[];
  examples: TranslationTranslatedItemExample[];
}

export interface TranslationTranslatedItemMain {
  text: string;
  url?: string;
  type: string;
}

export interface TranslationTranslatedItemExample {
  original: string;
  translation: string;
}

export interface TranslationResponseExample {
  main: TranslationResponseExampleItem;
  translations: TranslationResponseExampleItem[];
}

export interface TranslationResponseExampleItem {
  text: string;
  url?: string;
  type: string;
}
