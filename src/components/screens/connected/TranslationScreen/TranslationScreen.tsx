import { useNavigation, useRoute } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useTranslation from '../../../../hooks/useTranslation/useTranslation';
import { saveTranslation } from '../../../../store/translation/translation/translationActions';
import { savedTranslationsSelector } from '../../../../store/translation/translationReducerSelectors';
import TranslationMainItem from '../../../commons/Translation/TranslationMainItem/TranslationMainItem';
import TranslationTranslatedItem from '../../../commons/Translation/TranslationTranslatedItem.tsx/TranslationTranslatedItem';
import Box from '../../../designSystem/Box/Box';
import { HomeStackContext } from '../../../navigation/HomeStack/HomeStack.context';
import { HomeStackScreenList } from '../../../navigation/HomeStack/HomeStack.types';
import { TranslationScreenProps } from './TranslationScreen.types';

const TranslationScreen = () => {
  const dispatch = useDispatch();

  const { setActiveScreen } = useContext(HomeStackContext);
  const navigation = useNavigation<TranslationScreenProps['navigation']>();

  const savedTranslations = useSelector(savedTranslationsSelector);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setActiveScreen(HomeStackScreenList.TranslationScreen);
    });

    return unsubscribe;
  }, [navigation]);

  const { params } = useRoute<TranslationScreenProps['route']>();
  const { url, wt } = params;

  const { data } = useTranslation({ url, wt });

  useEffect(() => {
    const isTranslationAlreadySaved = savedTranslations?.find(
      (translation) => translation.title === data?.title
    );
    if (data && !isTranslationAlreadySaved) {
      saveTranslation(data)(dispatch);
    }
  }, [data, savedTranslations]);

  return (
    <Box flex={1}>
      <FlashList
        data={data?.main}
        renderItem={({ item }) => {
          return (
            <Box flex={1} padding="m">
              <TranslationMainItem {...item.mainItem} />
              {item.translatedItems && <TranslationTranslatedItem {...item.translatedItems} />}
            </Box>
          );
        }}
        estimatedItemSize={20}
      />
    </Box>
  );
};

export default TranslationScreen;
