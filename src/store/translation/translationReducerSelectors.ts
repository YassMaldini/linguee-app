import RootState from '../store.types';

export const languagePairSelector = ({ translation: reducer }: RootState) => reducer.languagePair;

export const savedTranslationsSelector = ({ translation: reducer }: RootState) =>
  reducer.savedTranslations;

export const clipboardEnabledSelector = ({ translation: reducer }: RootState) =>
  reducer.isClipboardEnabled;
