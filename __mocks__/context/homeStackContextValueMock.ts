import { Orientation } from 'expo-screen-orientation';
import {
  HomeStackContextProps,
  HomeStackScreenList,
} from '../../src/components/navigation/HomeStack/HomeStack.types';
import { SearchResponse } from '../../src/types/models/search/search.types';
import { navigationMock, NavigationScreenPropAlias } from '../navigation/navigationMock';

const activeScreen = HomeStackScreenList.HomeScreen;
const setActiveScreen = jest.fn();
const searchResponse: SearchResponse = [];
const setSearchResponse = jest.fn();
const currentHistoryIndex = 0;
const setCurrentHistoryIndex = jest.fn();
const isSettingsModalVisible = false;
const setSettingsModalVisible = jest.fn();
const activeTranslation = undefined;
const setActiveTranslation = jest.fn();
const currentScreenOrientation = Orientation.PORTRAIT_UP;

export const homeStackContextValueMock: HomeStackContextProps = {
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
  navigation: navigationMock as NavigationScreenPropAlias,
};
