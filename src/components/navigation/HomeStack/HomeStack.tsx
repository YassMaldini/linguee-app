import { useNavigation } from '@react-navigation/native';
import { useMemo, useState } from 'react';
import { SearchResponse } from '../../../types/models/search/search.types';
import { TranslationResponse } from '../../../types/models/translation/translation.types';
import BottomTab from '../../commons/BottomTab/BottomTab';
import SearchHeader from '../../commons/Search/SearchHeader/SearchHeader';
import SettingsModal from '../../commons/SettingsModal/SettingsModal';
import HistoryScreen from '../../screens/connected/HistoryScreen/HistoryScreen';
import HistoryTranslationScreen from '../../screens/connected/HistoryTranslationScreen/HistoryTranslationScreen';
import HomeScreen from '../../screens/connected/HomeScreen/HomeScreen';
import TranslationScreen from '../../screens/connected/TranslationScreen/TranslationScreen';
import { HomeStackContext } from './HomeStack.context';
import { Navigator, Screen } from './HomeStack.navigator';
import { HomeStackContextProps, HomeStackProps, HomeStackScreenList } from './HomeStack.types';

const HomeStack = () => {
  const navigation = useNavigation<HomeStackProps['navigation']>();

  const [activeScreen, setActiveScreen] = useState<HomeStackScreenList>(
    HomeStackScreenList.HomeScreen
  );
  const [searchResponse, setSearchResponse] = useState<SearchResponse>();
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState<number>(0);
  const [activeTranslation, setActiveTranslation] = useState<TranslationResponse | undefined>();
  const [isSettingsModalVisible, setSettingsModalVisible] = useState<boolean>(false);

  const contextValue = useMemo<HomeStackContextProps>(
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
      navigation,
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
      navigation,
    ]
  );

  return (
    <HomeStackContext.Provider value={contextValue}>
      <SearchHeader />
      <Navigator
        initialRouteName={HomeStackScreenList.HomeScreen}
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name={HomeStackScreenList.HomeScreen} component={HomeScreen} />
        <Screen name={HomeStackScreenList.TranslationScreen} component={TranslationScreen} />
        <Screen
          name={HomeStackScreenList.HistoryTranslationScreen}
          component={HistoryTranslationScreen}
        />
        <Screen name={HomeStackScreenList.HistoryScreen} component={HistoryScreen} />
      </Navigator>
      <SettingsModal />
      <BottomTab />
    </HomeStackContext.Provider>
  );
};

export default HomeStack;
