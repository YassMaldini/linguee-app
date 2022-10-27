export type SearchResponse = SearchResponseObject[];

export interface SearchResponseObject {
  mainItem: SearchResponseMainItem;
  translationItems?: SearchResponseTranslationItem[];
}

export interface SearchResponseMainItem {
  text: string;
  lid?: string;
  lc?: string;
}

export interface SearchResponseTranslationItem {
  text: string;
  type?: string;
  bid?: string;
}
