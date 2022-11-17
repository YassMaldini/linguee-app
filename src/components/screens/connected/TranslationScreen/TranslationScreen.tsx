import { useNavigation, useRoute } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useTranslation from '../../../../hooks/useTranslation/useTranslation';
import { saveTranslation } from '../../../../store/translation/translation/translationActions';
import { savedTranslationsSelector } from '../../../../store/translation/translationReducerSelectors';
import TranslationExamples from '../../../commons/TranslationExamples/TranslationExamples';
import TranslationItem from '../../../commons/TranslationItem/TranslationItem';
import Box from '../../../designSystem/Box/Box';
import Text from '../../../designSystem/Text/Text';
import { BottomTabStackContext } from '../../../navigation/BottomTabStack/BottomTabStack.context';
import { HomeStackScreenList } from '../../../navigation/HomeStack/HomeStack.types';
import { TranslationScreenProps } from './TranslationScreen.types';

const TranslationScreen = () => {
  const dispatch = useDispatch();

  const { setActiveScreen, setActiveTranslation } = useContext(BottomTabStackContext);
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
      setActiveTranslation(data);
    }
  }, [data, savedTranslations]);

  return (
    <Box flex={1} backgroundColor="primaryBackground" padding="m">
      <FlashList
        data={data?.main}
        renderItem={({ item }) => <TranslationItem {...{ item }} />}
        estimatedItemSize={20}
        ListFooterComponent={
          <Box>
            {data?.examples && data.examples.length > 0 && (
              <TranslationExamples examples={data.examples} />
            )}
            <Text marginTop="s" textAlign="right" color="secondaryText">
              © Linguee Dictionary, 2022
            </Text>
          </Box>
        }
      />
    </Box>
  );
};

export default TranslationScreen;
