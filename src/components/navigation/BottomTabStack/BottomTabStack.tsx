import { useNavigation } from '@react-navigation/native';
import { useEffect, useMemo, useState } from 'react';
import { SearchResponse } from '../../../types/models/search/search.types';
import { TranslationResponse } from '../../../types/models/translation/translation.types';
import BottomTab from '../../commons/BottomTab/BottomTab';
import SettingsModal from '../../commons/SettingsModal/SettingsModal';
import { Navigator, Screen } from './BottomTabStack.navigator';
import {
  addOrientationChangeListener,
  removeOrientationChangeListener,
  Orientation,
  getOrientationAsync,
} from 'expo-screen-orientation';
import { BottomTabStackContextProps, BottomTabStackProps } from './BottomTabStack.types';
import { Platform } from 'react-native';
import HomeStack from '../HomeStack/HomeStack';
import { BottomTabStackContext } from './BottomTabStack.context';
import { HomeStackProps, HomeStackScreenList } from '../HomeStack/HomeStack.types';
import { HistoryStackScreenList } from '../HistoryStack/HistoryStack.types';
import HistoryStack from '../HistoryStack/HistoryStack';

const BottomTabStack = () => {
  const navigation = useNavigation<BottomTabStackProps['navigation']>();
  const homeStackNavigation = useNavigation<HomeStackProps['navigation']>();

  const [activeScreen, setActiveScreen] = useState<HomeStackScreenList | HistoryStackScreenList>(
    HomeStackScreenList.HomeScreen
  );
  const [searchResponse, setSearchResponse] = useState<SearchResponse>();
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState<number>(0);
  const [activeTranslation, setActiveTranslation] = useState<TranslationResponse | undefined>();
  const [isSettingsModalVisible, setSettingsModalVisible] = useState<boolean>(false);
  const [currentScreenOrientation, setCurrentScreenOrientation] = useState<Orientation>(
    Orientation.PORTRAIT_UP
  );

  useEffect(() => {
    (async () => {
      const orientation = await getOrientationAsync();
      setCurrentScreenOrientation(orientation);
    })();
    const subscription = addOrientationChangeListener((e) => {
      setCurrentScreenOrientation(e.orientationInfo.orientation);
    });
    return () => removeOrientationChangeListener(subscription);
  }, []);

  const contextValue = useMemo<BottomTabStackContextProps>(
    () => ({
      activeScreen,
      setActiveScreen,
      searchResponse,
      setSearchResponse,
      currentHistoryIndex,
      setCurrentHistoryIndex,
      isSettingsModalVisible,
      setSettingsModalVisible,
      activeTranslation,
      setActiveTranslation,
      currentScreenOrientation,
      navigation,
      homeStackNavigation,
    }),
    [
      activeScreen,
      setActiveScreen,
      searchResponse,
      setSearchResponse,
      currentHistoryIndex,
      setCurrentHistoryIndex,
      isSettingsModalVisible,
      setSettingsModalVisible,
      activeTranslation,
      setActiveTranslation,
      currentScreenOrientation,
      navigation,
      homeStackNavigation,
    ]
  );

  return (
    <BottomTabStackContext.Provider value={contextValue}>
      <Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          headerShown: false,
          animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default',
        }}>
        <Screen name="HomeStack" component={HomeStack} />
        <Screen name="HistoryStack" component={HistoryStack} />
      </Navigator>
      <SettingsModal />
      <BottomTab />
    </BottomTabStackContext.Provider>
  );
};

export default BottomTabStack;
