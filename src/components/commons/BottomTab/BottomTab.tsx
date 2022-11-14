import Box from '../../designSystem/Box/Box';
import ExportIcon from '../../../../assets/vectors/export.svg';
import { SvgIcon } from '../../designSystem/SvgIcon/SvgIcon';
import LeftArrowIcon from '../../../../assets/vectors/left-arrow.svg';
import RightArrowIcon from '../../../../assets/vectors/right-arrow.svg';
import HistoryIcon from '../../../../assets/vectors/history.svg';
import InfoIcon from '../../../../assets/vectors/info.svg';
import SettingsIcon from '../../../../assets/vectors/settings.svg';
import Pressable from '../../designSystem/Pressable/Pressable';
import { useCallback, useContext } from 'react';
import { HomeStackContext } from '../../navigation/HomeStack/HomeStack.context';
import { HomeStackScreenList } from '../../navigation/HomeStack/HomeStack.types';
import { useSelector } from 'react-redux';
import { savedTranslationsSelector } from '../../../store/translation/translationReducerSelectors';
import { Share } from 'react-native';
import { useTranslation } from 'react-i18next';
import { capitalizeFirstLetter } from '../../../utils/string/capitalizeFirstLetter';

const BottomTab = () => {
  const { t } = useTranslation(['languages', 'translations']);

  const {
    navigation,
    activeScreen,
    currentHistoryIndex,
    setCurrentHistoryIndex,
    isSettingsModalVisible,
    setSettingsModalVisible,
    activeTranslation,
  } = useContext(HomeStackContext);

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
    navigation.navigate(HomeStackScreenList.HistoryScreen);
  }, [navigation]);

  const onPressInfo = useCallback(() => {
    if (activeScreen !== HomeStackScreenList.HomeScreen) {
      navigation.navigate(HomeStackScreenList.HomeScreen);
    } else {
      if (navigation.canGoBack()) navigation.goBack();
    }
  }, [navigation, activeScreen]);

  const onPressShare = useCallback(async () => {
    try {
      const language = capitalizeFirstLetter(
        t(`language.${activeTranslation?.language.target}`, { ns: 'languages' })
      );

      const result = await Share.share({
        message: t('item.share.message', {
          ns: 'translations',
          language,
          word: activeTranslation?.title,
          link: `https://linguee.com${activeTranslation?.url}`,
        }),
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('shared with activity type of result.activityType', result.activityType);
        } else {
          console.log('shared');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('dismissed');
      }
    } catch (error) {
      console.log(error);
    }
  }, [activeTranslation, t]);

  return (
    <Box
      testID='bottomTab'
      backgroundColor="secondaryBackground"
      height={50}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingVertical="m"
      paddingHorizontal="mToL">
      <Box flexDirection="row" alignItems="center">
        <Pressable disabled={savedTranslations === null} onPress={onPressLeftArrow}>
          <SvgIcon icon={LeftArrowIcon} color="iconDefault" width={24} height={24} />
        </Pressable>
        <Pressable testID='historyIcon' onPress={onPressHistory}>
          <SvgIcon
            icon={HistoryIcon}
            color="iconDefault"
            width={26}
            height={26}
            marginHorizontal="s"
          />
        </Pressable>
        <Pressable disabled={savedTranslations === null} onPress={onPressRightArrow}>
          <SvgIcon icon={RightArrowIcon} color="iconDefault" width={24} height={24} />
        </Pressable>
      </Box>
      <Pressable
        testID='shareIcon'
        onPress={onPressShare}
        style={{
          position: 'relative',
          bottom: 0.5,
        }}>
        <SvgIcon
          icon={ExportIcon}
          width={26}
          height={26}
          color={
            activeScreen === HomeStackScreenList.TranslationScreen ||
            activeScreen === HomeStackScreenList.HistoryTranslationScreen
              ? 'iconDefault'
              : 'iconDisabled'
          }
        />
      </Pressable>
      <Pressable testID='infoIcon' onPress={() => onPressInfo()}>
        <SvgIcon icon={InfoIcon} color="iconDefault" width={26} height={26} marginHorizontal="s" />
      </Pressable>
      <Pressable testID='settingsIcon' onPress={() => setSettingsModalVisible(!isSettingsModalVisible)}>
        <SvgIcon
          icon={SettingsIcon}
          color="iconDefault"
          width={26}
          height={26}
          marginHorizontal="s"
        />
      </Pressable>
    </Box>
  );
};

export default BottomTab;
