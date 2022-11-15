import { useNavigation } from '@react-navigation/native';
import { fireEvent } from '@testing-library/react-native';
import { searchResponseMock } from '../../../../../__mocks__/api/searchResponseMock';
import renderInProviders from '../../../../utils/test/renderInProviders';
import { HomeStackScreenList } from '../../../navigation/HomeStack/HomeStack.types';
import SearchItem from './SearchItem';

const mockedUseNavigation = useNavigation as jest.Mock<any>;

describe('<SearchItem />', () => {
  const navigate = jest.fn();

  beforeAll(() => {
    mockedUseNavigation.mockImplementation(() => ({
      navigate,
    }));
  });

  it('should render search item', () => {
    const { getByTestId } = renderInProviders(<SearchItem {...searchResponseMock[0]} />);

    expect(getByTestId('searchItem')).toBeTruthy();
  });

  it('should call navigate method when press on search item', () => {
    const { getByTestId } = renderInProviders(<SearchItem {...searchResponseMock[0]} />);

    fireEvent.press(getByTestId('searchItem'));

    expect(navigate).toHaveBeenCalled();
    expect(navigate).toHaveBeenCalledWith(HomeStackScreenList.TranslationScreen, {
      url: '/english-french/translation/mocking.html',
      wt: 101,
    });
  });

  it('should render search item text', () => {
    const { getByTestId, getByText } = renderInProviders(<SearchItem {...searchResponseMock[0]} />);

    expect(getByTestId('searchItemText')).toBeTruthy();
    expect(getByText('mocking')).toBeTruthy();
  });

  it('should render search item translation', () => {
    const { getAllByTestId } = renderInProviders(<SearchItem {...searchResponseMock[0]} />);

    expect(getAllByTestId('searchItemTranslation')).toHaveLength(2);
  });

  it('should render search item translation text', () => {
    const { getAllByTestId, getByText } = renderInProviders(
      <SearchItem {...searchResponseMock[0]} />
    );

    expect(getAllByTestId('searchItemTranslationText')).toBeTruthy();
    expect(getByText('moquerie')).toBeTruthy();
  });

  it('should render search item translation type', () => {
    const { getAllByTestId, getAllByText } = renderInProviders(
      <SearchItem {...searchResponseMock[0]} />
    );

    expect(getAllByTestId('searchItemTranslationType')).toBeTruthy();
    expect(getAllByText('f')).toBeTruthy();
  });
});
