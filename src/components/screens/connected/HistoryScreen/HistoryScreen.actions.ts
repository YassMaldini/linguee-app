import { setSavedTranslations } from '../../../../store/translation/translation/translationActions';
import { RemoveSavedTranslation } from './HistoryScreen.types';

export const removeSavedTranslation = ({
  translationToRemove,
  savedTranslations,
  dispatch,
}: RemoveSavedTranslation) => {
  if (savedTranslations) {
    setSavedTranslations(
      savedTranslations.filter((translation) => translation.title !== translationToRemove.title)
    )(dispatch);
  }
};
