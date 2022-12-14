import Box from '../../../designSystem/Box/Box';
import { SwipeListView } from 'react-native-swipe-list-view';
import { ListRenderItemInfo, Animated, Easing } from 'react-native';
import Text from '../../../designSystem/Text/Text';
import Pressable from '../../../designSystem/Pressable/Pressable';
import { useSelector } from 'react-redux';
import { savedTranslationsSelector } from '../../../../store/translation/translationReducerSelectors';
import { TranslationResponse } from '../../../../types/models/translation/translation.types';
import Button from '../../../designSystem/Button/Button';
import Image from '../../../designSystem/Image/Image';
import StopImage from '../../../../../assets/images/forbidden.png';
import { useNavigation } from '@react-navigation/native';
import { HistoryScreenProps } from './HistoryScreen.types';
import ScreenHeader from '../../../commons/ScreenHeader/ScreenHeader';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ButtonColors } from '../../../designSystem/Button/Button.types';
import { useDispatch } from 'react-redux';
import { removeSavedTranslation } from './HistoryScreen.actions';
import { BottomTabStackContext } from '../../../navigation/BottomTabStack/BottomTabStack.context';
import { HomeStackScreenList } from '../../../navigation/HomeStack/HomeStack.types';
import { useTranslation } from 'react-i18next';
import { HistoryStackScreenList } from '../../../navigation/HistoryStack/HistoryStack.types';

const HistoryScreen = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('translations', { keyPrefix: 'history' });
  const navigation = useNavigation<HistoryScreenProps['navigation']>();

  const { setCurrentHistoryIndex, setActiveScreen, homeStackNavigation } =
    useContext(BottomTabStackContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setActiveScreen(HistoryStackScreenList.HistoryScreen);
    });

    return unsubscribe;
  }, [navigation]);

  const [areAllRemoveButtonsVisible, setAllRemoveButtonsVisible] = useState<boolean>(false);

  const savedTranslations = useSelector(savedTranslationsSelector);
  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [0, 40];

  const animatedWidth = animation.interpolate({ inputRange, outputRange });

  const fadeIn = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    animation.addListener(({ value }) => {
      if (value === 0) {
        setAllRemoveButtonsVisible(false);
      } else if (value === 1) {
        setAllRemoveButtonsVisible(true);
      }
    });
  }, [animation, setAllRemoveButtonsVisible]);

  const HeaderActionButtom = useCallback(() => {
    if (areAllRemoveButtonsVisible) {
      return (
        <Button
          color={ButtonColors.HighlightedText}
          onPress={fadeOut}
          isBold={false}
          textProps={{
            fontSize: 18,
          }}>
          {t('header.button.done')}
        </Button>
      );
    } else {
      return (
        <Button
          color={ButtonColors.HighlightedText}
          onPress={fadeIn}
          isBold={false}
          textProps={{
            fontSize: 18,
          }}>
          {t('header.button.edit')}
        </Button>
      );
    }
  }, [areAllRemoveButtonsVisible, fadeIn, fadeOut, t]);

  const navigateToTranslation = useCallback(
    (index: number) => {
      setCurrentHistoryIndex(index);
      homeStackNavigation.navigate(HomeStackScreenList.HistoryTranslationScreen);
    },
    [homeStackNavigation, setCurrentHistoryIndex]
  );

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<TranslationResponse>) => (
      <Pressable onPress={() => navigateToTranslation(index)}>
        <Box
          backgroundColor="primaryBackground"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          padding="m"
          borderBottomWidth={1}
          borderBottomColor="highlightBackground">
          <Box flexDirection="row">
            <Animated.View
              style={{
                width: animatedWidth,
              }}>
              <Pressable
                onPress={() =>
                  removeSavedTranslation({
                    translationToRemove: item,
                    savedTranslations,
                    dispatch,
                  })
                }>
                <Image source={StopImage} width={20} height={20} marginRight="s" />
              </Pressable>
            </Animated.View>
            <Box width={'100%'} backgroundColor="primaryBackground">
              <Text fontSize={16}>{item.title}</Text>
            </Box>
          </Box>
        </Box>
      </Pressable>
    ),
    [animatedWidth, navigateToTranslation]
  );

  return (
    <Box testID="historyScreen" flex={1} backgroundColor="primaryBackground">
      <ScreenHeader
        showGoBackTouchable
        showGoBackLabel
        goBackIconColor="defaultButton"
        title={t('header.title')}
        rightElement={<HeaderActionButtom />}
      />
      <SwipeListView
        testID="historySwipeList"
        data={savedTranslations}
        {...{ renderItem }}
        renderHiddenItem={({ item }) => (
          <Pressable
            flex={1}
            alignItems="flex-end"
            justifyContent="center"
            backgroundColor="removeButtonBackground"
            onPress={() =>
              removeSavedTranslation({
                translationToRemove: item,
                savedTranslations,
                dispatch,
              })
            }>
            <Box marginHorizontal="m">
              <Text color="white">Delete</Text>
            </Box>
          </Pressable>
        )}
        disableRightSwipe
        // disableLeftSwipe={areAllRemoveButtonsVisible}
        rightOpenValue={-75}
      />
    </Box>
  );
};

export default HistoryScreen;
