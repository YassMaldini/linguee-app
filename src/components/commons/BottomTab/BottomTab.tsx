import Box from '../../designSystem/Box/Box';
import Image from '../../designSystem/Image/Image';
import LeftArrowIcon from '../../../../assets/images/ic_keyboard_arrow_left_black_36dp.png';
import RightArrowIcon from '../../../../assets/images/ic_keyboard_arrow_right_black_36dp.png';
import ClockIcon from '../../../../assets/images/ic_query_builder_black_36dp.png';
import InfoIcon from '../../../../assets/images/ic_info_outline_black_36dp.png';
import SettingsIcon from '../../../../assets/images/ic_settings_black_36dp.png';
import ShareIcon from '../../../../assets/vectors/share.svg';
import { SvgIcon } from '../../designSystem/SvgIcon/SvgIcon';
import Pressable from '../../designSystem/Pressable/Pressable';
import { useCallback, useContext } from 'react';
import { HomeStackContext } from '../../navigation/HomeStack/HomeStack.context';
import { HomeStackScreenList } from '../../navigation/HomeStack/HomeStack.types';
import { useSelector } from 'react-redux';
import { savedTranslationsSelector } from '../../../store/translation/translationReducerSelectors';

const BottomTab = () => {
  const { navigation, activeScreen, currentHistoryIndex, setCurrentHistoryIndex } =
    useContext(HomeStackContext);

  const savedTranslations = useSelector(savedTranslationsSelector);

  const onPressLeftArrow = useCallback(() => {
    if (activeScreen !== HomeStackScreenList.HistoryTranslationScreen) {
      navigation.navigate(HomeStackScreenList.HistoryTranslationScreen);
    }
    if (currentHistoryIndex > 0) {
      setCurrentHistoryIndex(currentHistoryIndex - 1);
    } else {
      setCurrentHistoryIndex(0);
    }
  }, [navigation, activeScreen, savedTranslations, currentHistoryIndex]);

  const onPressRightArrow = useCallback(() => {
    if (activeScreen !== HomeStackScreenList.HistoryTranslationScreen) {
      navigation.navigate(HomeStackScreenList.HistoryTranslationScreen);
    }
    if (savedTranslations && currentHistoryIndex < savedTranslations?.length - 1) {
      setCurrentHistoryIndex(currentHistoryIndex + 1);
    }
  }, [navigation, activeScreen, savedTranslations, currentHistoryIndex]);

  const onPressHistory = useCallback(() => {
    navigation.navigate('HistoryScreen');
  }, [navigation]);

  const onPressInfo = useCallback(() => {
    if (activeScreen !== HomeStackScreenList.HomeScreen) {
      navigation.navigate(HomeStackScreenList.HomeScreen);
    } else {
      if (navigation.canGoBack()) navigation.goBack();
    }
  }, [navigation, activeScreen]);

  return (
    <Box
      backgroundColor="secondaryBackground"
      height={50}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingVertical="m"
      paddingHorizontal="mToL">
      <Box flexDirection="row" alignItems="center">
        <Pressable disabled={savedTranslations === null} onPress={onPressLeftArrow}>
          <Image source={LeftArrowIcon} width={36} height={36} />
        </Pressable>
        <Pressable onPress={onPressHistory}>
          <Image source={ClockIcon} width={28} height={28} />
        </Pressable>
        <Pressable disabled={savedTranslations === null} onPress={onPressRightArrow}>
          <Image source={RightArrowIcon} width={36} height={36} />
        </Pressable>
      </Box>
      <Pressable
        style={{
          position: 'relative',
          bottom: 0.5,
        }}>
        <SvgIcon icon={ShareIcon} width={26} height={26} color="iconDisabled" />
      </Pressable>
      <Pressable onPress={() => onPressInfo()}>
        <Image source={InfoIcon} width={28} height={28} />
      </Pressable>
      <Pressable>
        <Image source={SettingsIcon} width={28} height={28} />
      </Pressable>
    </Box>
  );
};

export default BottomTab;
