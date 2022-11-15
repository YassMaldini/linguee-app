import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { useCallback, useContext, useEffect, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { savedTranslationsSelector } from '../../../../store/translation/translationReducerSelectors';
import TranslationMainItem from '../../../commons/TranslationItem/TranslationMainItem/TranslationMainItem';
import TranslationTranslatedItem from '../../../commons/TranslationItem/TranslationTranslatedItem.tsx/TranslationTranslatedItem';
import Box from '../../../designSystem/Box/Box';
import { HomeStackContext } from '../../../navigation/HomeStack/HomeStack.context';
import { HomeStackScreenList } from '../../../navigation/HomeStack/HomeStack.types';
import { HistoryTranslationScreenProps } from './HistoryTranslationScreen.types';
import { useSwipe } from '../../../../hooks/useSwipe/useSwipe';

const HistoryTranslationScreen = () => {
  const { currentHistoryIndex, setCurrentHistoryIndex, setActiveScreen, setActiveTranslation } =
    useContext(HomeStackContext);

  const savedTranslations = useSelector(savedTranslationsSelector);

  const goToNextTranslation = useCallback(() => {
    if (savedTranslations) {
      if (currentHistoryIndex < savedTranslations.length - 1) {
        setCurrentHistoryIndex(currentHistoryIndex + 1);
      }
    }
  }, [currentHistoryIndex, savedTranslations]);

  const goToPreviousTranslation = useCallback(() => {
    if (currentHistoryIndex > 0) {
      setCurrentHistoryIndex(currentHistoryIndex - 1);
    }
  }, [currentHistoryIndex]);

  const { onTouchStart, onTouchEnd } = useSwipe(goToNextTranslation, goToPreviousTranslation, 6);

  const currentTranslation = useMemo(
    () => savedTranslations?.[currentHistoryIndex || 0],
    [currentHistoryIndex]
  );

  const navigation = useNavigation<HistoryTranslationScreenProps['navigation']>();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setActiveScreen(HomeStackScreenList.HistoryTranslationScreen);
      setActiveTranslation(currentTranslation);
    });

    return unsubscribe;
  }, [navigation, currentTranslation]);

  return (
    <Box flex={1} backgroundColor="primaryBackground">
      <FlashList
        data={currentTranslation?.main}
        renderItem={({ item }) => {
          return (
            <Box flex={1} padding="m">
              <TranslationMainItem {...item.mainItem} />
              {item.translatedItems && <TranslationTranslatedItem {...item.translatedItems} />}
            </Box>
          );
        }}
        ListEmptyComponent={<ActivityIndicator size="large" />}
        estimatedItemSize={20}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      />
    </Box>
  );
};

export default HistoryTranslationScreen;
