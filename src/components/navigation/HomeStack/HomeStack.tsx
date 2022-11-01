import { useNavigation } from '@react-navigation/native';
import { useMemo, useState } from 'react';
import { SearchResponse } from '../../../types/models/search/search.types';
import BottomTab from '../../commons/BottomTab/BottomTab';
import SearchHeader from '../../commons/Search/SearchHeader/SearchHeader';
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

  const contextValue = useMemo<HomeStackContextProps>(
    () => ({
      activeScreen,
      setActiveScreen,
      searchResponse,
      setSearchResponse,
      currentHistoryIndex,
      setCurrentHistoryIndex,
      navigation,
    }),
    [
      activeScreen,
      setActiveScreen,
      searchResponse,
      setSearchResponse,
      currentHistoryIndex,
      setCurrentHistoryIndex,
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
      </Navigator>
      <BottomTab />
    </HomeStackContext.Provider>
  );
};

export default HomeStack;
