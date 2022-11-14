import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { fireEvent } from "@testing-library/react-native"
import { Orientation } from "expo-screen-orientation"
import { useSelector } from "react-redux"
import { translationResponseMock } from "../../../../__mocks__/api/translationResponseMock"
import { SearchResponse } from "../../../types/models/search/search.types"
import renderInProviders from "../../../utils/test/renderInProviders"
import { HomeStackContext } from "../../navigation/HomeStack/HomeStack.context"
import { HomeStackContextProps, HomeStackParamsList, HomeStackScreenList } from "../../navigation/HomeStack/HomeStack.types"
import BottomTab from "./BottomTab"
import { Share } from 'react-native'

type NavigationScreenPropAlias = NativeStackNavigationProp<HomeStackParamsList>;

const shareFn = jest.fn()

const mockedUseSelector = useSelector as jest.Mock<any>;
const mockedShare = Share.share as jest.Mock<any>;

describe('<BottomTab />', () => {
  beforeEach(() => {
    const mockedState = {
      translation: []
    }
    mockedUseSelector.mockImplementation(callback => callback(mockedState))
    mockedShare.mockImplementation(shareFn)
  })
  
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
    getState: jest.fn()
  };

  const contextValueMock: HomeStackContextProps = {
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
  }

  it('should render main element', async () => {

    const { getByTestId } = renderInProviders(
      <HomeStackContext.Provider value={contextValueMock}>
        <BottomTab />
      </HomeStackContext.Provider>
    )

    expect(await getByTestId('bottomTab')).toBeTruthy();

  })

  it('should navigate to history screen when press history icon', () => {

    const { getByTestId } = renderInProviders(
      <HomeStackContext.Provider value={contextValueMock}>
        <BottomTab />
      </HomeStackContext.Provider>
    )

    fireEvent.press(getByTestId('historyIcon'));

    expect(navigation.navigate).toBeCalledWith(HomeStackScreenList.HistoryScreen)

  })

  it('should go back when press info icon AND active screen is home screen AND can go back', () => {

    const { getByTestId } = renderInProviders(
      <HomeStackContext.Provider value={contextValueMock}>
        <BottomTab />
      </HomeStackContext.Provider>
    )

    fireEvent.press(getByTestId('infoIcon'));

    expect(navigation.goBack).toBeCalled();

  })

  it('should navigate to home screen when press info icon AND active screen is NOT home screen', () => {

    const { getByTestId } = renderInProviders(
      <HomeStackContext.Provider value={{
        ...contextValueMock,
        activeScreen: HomeStackScreenList.HistoryScreen
      }}>
        <BottomTab />
      </HomeStackContext.Provider>
    )

    fireEvent.press(getByTestId('infoIcon'));

    expect(navigation.navigate).toBeCalledWith(HomeStackScreenList.HomeScreen);

  })

  it('should show/hide settings modal when press settings icon', () => {

    const { getByTestId } = renderInProviders(
      <HomeStackContext.Provider value={contextValueMock}>
        <BottomTab />
      </HomeStackContext.Provider>
    )

    fireEvent.press(getByTestId('settingsIcon'));

    expect(setSettingsModalVisible).toBeCalledWith(!isSettingsModalVisible);

  })

  it('should call share function when press share icon AND has an active translation', () => {

    const { getByTestId } = renderInProviders(
      <HomeStackContext.Provider value={{
        ...contextValueMock,
        activeTranslation: translationResponseMock
      }}>
        <BottomTab />
      </HomeStackContext.Provider>
    )

    fireEvent.press(getByTestId('shareIcon'));

    expect(shareFn).toBeCalled();

  })
})