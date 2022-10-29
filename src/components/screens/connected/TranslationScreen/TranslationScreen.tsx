import { useNavigation, useRoute } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { useContext, useEffect } from 'react';
import useTranslation from '../../../../hooks/useTranslation/useTranslation';
import TranslationMainItem from '../../../commons/Translation/TranslationMainItem/TranslationMainItem';
import TranslationTranslatedItem from '../../../commons/Translation/TranslationTranslatedItem.tsx/TranslationTranslatedItem';
import Box from '../../../designSystem/Box/Box';
import { HomeStackContext } from '../../../navigation/HomeStack/HomeStack.context';
import { HomeStackScreenList } from '../../../navigation/HomeStack/HomeStack.types';
import { TranslationScreenProps } from './TranslationScreen.types';

const TranslationScreen = () => {
  const { setActiveScreen } = useContext(HomeStackContext);
  const navigation = useNavigation<TranslationScreenProps['navigation']>();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setActiveScreen(HomeStackScreenList.TranslationScreen);
    });

    return unsubscribe;
  }, [navigation]);

  const { params } = useRoute<TranslationScreenProps['route']>();
  const { url, wt } = params;

  const { data } = useTranslation({ url, wt });

  // const data = translationHtmlStringToResponse(translationHtmlMock)

  // useEffect(() => console.log(data))

  // useEffect(() => console.log({
  //   ...data,
  //   examples: []
  // } as TranslationResponse), [data])

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
