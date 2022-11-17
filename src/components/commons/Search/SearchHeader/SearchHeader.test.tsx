import { fireEvent } from '@testing-library/react-native';
import { useMutation } from 'react-query';
import { homeStackContextValueMock } from '../../../../../__mocks__/context/homeStackContextValueMock';
import renderInProviders from '../../../../utils/test/renderInProviders';
import { BottomTabStackContext } from '../../../navigation/BottomTabStack/BottomTabStack.context';
import SearchHeader from './SearchHeader';
import SearchHeaderContent from './SearchHeaderContent/SearchHeaderContent';

const mockedUseMutation = useMutation as jest.Mock<any>;

describe('<SearchHeader />', () => {
  const mutate = jest.fn();

  beforeEach(() => {
    mockedUseMutation.mockImplementation(() => ({
      mutate,
      isLoading: false,
      error: null,
    }));
  });

  it('should render main item', () => {
    const { getByTestId } = renderInProviders(
      <BottomTabStackContext.Provider value={homeStackContextValueMock}>
        <SearchHeader />
      </BottomTabStackContext.Provider>
    );

    expect(getByTestId('screenHeader')).toBeTruthy();
  });

  describe('<SearchHeaderContent />', () => {
    it('should render full logo icon when keyboard is closed', () => {
      const { getByTestId } = renderInProviders(
        <BottomTabStackContext.Provider value={homeStackContextValueMock}>
          <SearchHeaderContent isKeyboardVisible={false} />
        </BottomTabStackContext.Provider>
      );

      expect(getByTestId('fullLogoIcon')).toBeTruthy();
    });

    it('should render short logo icon when keyboard is opened', () => {
      const { getByTestId } = renderInProviders(
        <BottomTabStackContext.Provider value={homeStackContextValueMock}>
          <SearchHeaderContent isKeyboardVisible={true} />
        </BottomTabStackContext.Provider>
      );

      expect(getByTestId('shortLogoIcon')).toBeTruthy();
    });

    it('should call mutation when input text change', () => {
      const { getByTestId } = renderInProviders(
        <BottomTabStackContext.Provider value={homeStackContextValueMock}>
          <SearchHeaderContent isKeyboardVisible={true} />
        </BottomTabStackContext.Provider>
      );

      const newSearchText = 'test';

      fireEvent.changeText(getByTestId('searchInput'), newSearchText);

      expect(mutate).toHaveBeenCalled();
      expect(mutate).toHaveBeenCalledWith({ search: newSearchText });
    });

    it('should render language picker button', () => {
      const { getByTestId } = renderInProviders(
        <BottomTabStackContext.Provider value={homeStackContextValueMock}>
          <SearchHeaderContent isKeyboardVisible={true} />
        </BottomTabStackContext.Provider>
      );

      expect(getByTestId('languagePicker')).toBeTruthy();
    });

    it('should render loader when mutation loading', () => {
      mockedUseMutation.mockImplementation(() => ({
        mutate,
        isLoading: true,
        error: null,
      }));

      const { getByTestId } = renderInProviders(
        <BottomTabStackContext.Provider value={homeStackContextValueMock}>
          <SearchHeaderContent isKeyboardVisible={true} />
        </BottomTabStackContext.Provider>
      );

      expect(getByTestId('loader')).toBeTruthy();
    });

    it('should render error message text when mutation error', () => {
      mockedUseMutation.mockImplementation(() => ({
        mutate,
        isLoading: true,
        error: {
          message: 'error message',
        },
      }));

      const { getByTestId, getByText } = renderInProviders(
        <BottomTabStackContext.Provider value={homeStackContextValueMock}>
          <SearchHeaderContent isKeyboardVisible={true} />
        </BottomTabStackContext.Provider>
      );

      expect(getByTestId('errorText')).toBeTruthy();
      expect(getByText('error message')).toBeTruthy();
    });
  });
});
