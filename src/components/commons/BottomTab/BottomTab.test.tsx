import { fireEvent } from '@testing-library/react-native';
import { Orientation } from 'expo-screen-orientation';
import { useSelector } from 'react-redux';
import { translationResponseMock } from '../../../../__mocks__/api/translationResponseMock';
import { SearchResponse } from '../../../types/models/search/search.types';
import renderInProviders from '../../../utils/test/renderInProviders';
import { BottomTabStackContext } from '../../navigation/BottomTabStack/BottomTabStack.context';
import { HomeStackScreenList } from '../../navigation/HomeStack/HomeStack.types';
import BottomTab from './BottomTab';
import { Share } from 'react-native';
import { BottomTabStackContextProps } from '../../navigation/BottomTabStack/BottomTabStack.types';
import { HistoryStackScreenList } from '../../navigation/HistoryStack/HistoryStack.types';
import {
  HomeStackNavigationScreenPropAlias,
  NavigationScreenPropAlias,
} from '../../../../__mocks__/navigation/navigationMock';

const shareFn = jest.fn();

const mockedUseSelector = useSelector as jest.Mock<any>;
const mockedShare = Share.share as jest.Mock<any>;

describe('<BottomTab />', () => {
  beforeEach(() => {
    const mockedState = {
      translation: [],
    };
    mockedUseSelector.mockImplementation((callback) => callback(mockedState));
    mockedShare.mockImplementation(shareFn);
  });

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
  const navigation: Partial<NavigationScreenPropAlias> = {
    navigate: jest.fn(),
    dispatch: jest.fn(),
    reset: jest.fn(),
    goBack: jest.fn(),
    isFocused: jest.fn(),
    canGoBack: () => true,
    getId: jest.fn(),
    getState: jest.fn(),
  };
  const homeStackNavigation: Partial<HomeStackNavigationScreenPropAlias> = {
    navigate: jest.fn(),
    dispatch: jest.fn(),
    reset: jest.fn(),
    goBack: jest.fn(),
    isFocused: jest.fn(),
    canGoBack: () => true,
    getId: jest.fn(),
    getState: jest.fn(),
  };

  const contextValueMock: BottomTabStackContextProps = {
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
    navigation: navigation as NavigationScreenPropAlias,
    homeStackNavigation: homeStackNavigation as HomeStackNavigationScreenPropAlias,
  };

  it('should render main element', async () => {
    const { getByTestId } = renderInProviders(
      <BottomTabStackContext.Provider value={contextValueMock}>
        <BottomTab />
      </BottomTabStackContext.Provider>
    );

    expect(await getByTestId('bottomTab')).toBeTruthy();
  });

  it('should navigate to history screen when press history icon', () => {
    const { getByTestId } = renderInProviders(
      <BottomTabStackContext.Provider value={contextValueMock}>
        <BottomTab />
      </BottomTabStackContext.Provider>
    );

    fireEvent.press(getByTestId('historyIcon'));

    expect(navigation.navigate).toHaveBeenCalledWith('HistoryStack');
  });

  it('should go back when press info icon AND active screen is home screen AND can go back', () => {
    const { getByTestId } = renderInProviders(
      <BottomTabStackContext.Provider value={contextValueMock}>
        <BottomTab />
      </BottomTabStackContext.Provider>
    );

    fireEvent.press(getByTestId('infoIcon'));

    expect(navigation.goBack).toHaveBeenCalled();
  });

  it('should navigate to home screen when press info icon AND active screen is NOT home screen', () => {
    const { getByTestId } = renderInProviders(
      <BottomTabStackContext.Provider
        value={{
          ...contextValueMock,
          activeScreen: HistoryStackScreenList.HistoryScreen,
        }}>
        <BottomTab />
      </BottomTabStackContext.Provider>
    );

    fireEvent.press(getByTestId('infoIcon'));

    expect(homeStackNavigation.navigate).toHaveBeenCalledWith(HomeStackScreenList.HomeScreen);
  });

  it('should show/hide settings modal when press settings icon', () => {
    const { getByTestId } = renderInProviders(
      <BottomTabStackContext.Provider value={contextValueMock}>
        <BottomTab />
      </BottomTabStackContext.Provider>
    );

    fireEvent.press(getByTestId('settingsIcon'));

    expect(setSettingsModalVisible).toHaveBeenCalledWith(!isSettingsModalVisible);
  });

  it('should call share function when press share icon AND has an active translation', () => {
    const { getByTestId } = renderInProviders(
      <BottomTabStackContext.Provider
        value={{
          ...contextValueMock,
          activeTranslation: translationResponseMock,
        }}>
        <BottomTab />
      </BottomTabStackContext.Provider>
    );

    fireEvent.press(getByTestId('shareIcon'));

    expect(shareFn).toHaveBeenCalled();
  });
});
