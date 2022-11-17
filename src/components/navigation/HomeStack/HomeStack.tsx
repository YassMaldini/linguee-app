import { Fragment } from 'react';
import SearchHeader from '../../commons/Search/SearchHeader/SearchHeader';
import HistoryTranslationScreen from '../../screens/connected/HistoryTranslationScreen/HistoryTranslationScreen';
import HomeScreen from '../../screens/connected/HomeScreen/HomeScreen';
import TranslationScreen from '../../screens/connected/TranslationScreen/TranslationScreen';
import { Navigator, Screen } from './HomeStack.navigator';
import { HomeStackScreenList } from './HomeStack.types';

const HomeStack = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default HomeStack;
