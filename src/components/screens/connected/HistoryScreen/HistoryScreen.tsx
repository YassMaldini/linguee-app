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
import { HomeStackContext } from '../../../navigation/HomeStack/HomeStack.context';
import { HomeStackScreenList } from '../../../navigation/HomeStack/HomeStack.types';

const HistoryScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<HistoryScreenProps['navigation']>();

  const { setCurrentHistoryIndex, setActiveScreen } = useContext(HomeStackContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setActiveScreen(HomeStackScreenList.HistoryScreen);
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
        <Button color={ButtonColors.HighlightedText} onPress={fadeOut} isBold={false}>
          Done
        </Button>
      );
    } else {
      return (
        <Button color={ButtonColors.HighlightedText} onPress={fadeIn} isBold={false}>
          Edit
        </Button>
      );
    }
  }, [areAllRemoveButtonsVisible, fadeIn, fadeOut]);

  const navigateToTranslation = useCallback(
    (index: number) => {
      setCurrentHistoryIndex(index);
      navigation.navigate(HomeStackScreenList.HistoryTranslationScreen);
    },
    [navigation, setCurrentHistoryIndex]
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
    <Box flex={1} backgroundColor="primaryBackground">
      <ScreenHeader
        showGoBackTouchable
        showGoBackLabel
        goBackIconColor="defaultButton"
        title="History"
        rightElement={<HeaderActionButtom />}
      />
      <SwipeListView
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
