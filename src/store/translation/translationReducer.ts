import { Reducer } from 'redux';
import TranslationReducerActionsTypes, {
  RESET_TRANSLATIONS,
  SAVE_TRANSLATION,
  SET_LANGUAGE_PAIR,
  SET_SAVED_TRANSLATIONS,
} from './translation/translationActions.types';
import TranslationReducerState from './translationReducer.types';
import TRANSLATION_REDUCER_INITIAL_STATE from './translationReducerInitialState';

const translationReducer: Reducer<TranslationReducerState, TranslationReducerActionsTypes> = (
  state = TRANSLATION_REDUCER_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case SET_LANGUAGE_PAIR: {
      return {
        ...state,
        languagePair: action.languagePair,
      };
    }

    case SAVE_TRANSLATION: {
      return {
        ...state,
        savedTranslations: state.savedTranslations
          ? [...state.savedTranslations, action.translationToSave]
          : [action.translationToSave],
      };
    }

    case SET_SAVED_TRANSLATIONS: {
      return {
        ...state,
        savedTranslations: action.savedTranslations,
      };
    }

    case RESET_TRANSLATIONS: {
      return TRANSLATION_REDUCER_INITIAL_STATE;
    }

    default: {
      return state;
    }
  }
};

export default translationReducer;
