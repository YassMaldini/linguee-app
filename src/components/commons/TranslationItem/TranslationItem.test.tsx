import { translationResponseMock } from '../../../../__mocks__/api/translationResponseMock';
import { homeStackContextValueMock } from '../../../../__mocks__/context/homeStackContextValueMock';
import { TranslationTranslatedItemMain } from '../../../types/models/translation/translation.types';
import renderInProviders from '../../../utils/test/renderInProviders';
import { BottomTabStackContext } from '../../navigation/BottomTabStack/BottomTabStack.context';
import TranslationItem from './TranslationItem';
import TranslationLessCommonItem from './TranslationLessCommonItem/TranslationLessCommonItem';
import TranslationMainItem from './TranslationMainItem/TranslationMainItem';
import TranslationTranslatedItem from './TranslationTranslatedItem.tsx/TranslationTranslatedItem';

describe('<TranslationItem />', () => {
  it('should render translation item', () => {
    const { getByTestId } = renderInProviders(
      <BottomTabStackContext.Provider value={homeStackContextValueMock}>
        <TranslationItem item={translationResponseMock.main[0]} />
      </BottomTabStackContext.Provider>
    );

    expect(getByTestId('translationItem')).toBeTruthy();
  });

  it('should render translation main item', () => {
    const { getByTestId } = renderInProviders(
      <BottomTabStackContext.Provider value={homeStackContextValueMock}>
        <TranslationItem item={translationResponseMock.main[0]} />
      </BottomTabStackContext.Provider>
    );

    expect(getByTestId('translationItem')).toBeTruthy();
  });

  it('should render translation translated item', () => {
    const { getByTestId } = renderInProviders(
      <BottomTabStackContext.Provider value={homeStackContextValueMock}>
        <TranslationItem item={translationResponseMock.main[0]} />
      </BottomTabStackContext.Provider>
    );

    expect(getByTestId('translationTranslatedItem')).toBeTruthy();
  });

  it('should render translation less common item', () => {
    const { getByTestId } = renderInProviders(
      <BottomTabStackContext.Provider value={homeStackContextValueMock}>
        <TranslationItem item={translationResponseMock.main[0]} />
      </BottomTabStackContext.Provider>
    );

    expect(getByTestId('translationLessCommonItem')).toBeTruthy();
  });

  describe('<TranslationMainItem />', () => {
    it('should render translation main item text', () => {
      const { getByTestId, getByText } = renderInProviders(
        <TranslationMainItem {...translationResponseMock.main[0].mainItem} />
      );

      expect(getByTestId('translationMainItemText')).toBeTruthy();
      expect(getByText('mock')).toBeTruthy();
    });

    it('should render translation main item word type', () => {
      const { getByTestId, getByText } = renderInProviders(
        <TranslationMainItem {...translationResponseMock.main[0].mainItem} />
      );

      expect(getByTestId('translationMainItemWt')).toBeTruthy();
      expect(getByText('verb')).toBeTruthy();
    });
  });

  describe('<TranslationTranslatedItem />', () => {
    it('should render translation translated item text', () => {
      const { getByTestId, getByText } = renderInProviders(
        <TranslationTranslatedItem {...translationResponseMock.main[0].translatedItems} />
      );

      expect(getByTestId('translationTranslatedItemText')).toBeTruthy();
      expect(getByText('se moquer de qqch./qqn.')).toBeTruthy();
    });

    it('should render translation translated item type', () => {
      const { getByTestId, getByText } = renderInProviders(
        <TranslationTranslatedItem {...translationResponseMock.main[0].translatedItems} />
      );

      expect(getByTestId('translationTranslatedItemType')).toBeTruthy();
      expect(getByText('v')).toBeTruthy();
    });

    it('should render translation examples', () => {
      const { getAllByTestId } = renderInProviders(
        <TranslationTranslatedItem {...translationResponseMock.main[0].translatedItems} />
      );

      expect(getAllByTestId('translationTranslatedExample')).toHaveLength(2);
    });

    it('should render translation examples original text', () => {
      const { getAllByTestId, getByText } = renderInProviders(
        <TranslationTranslatedItem {...translationResponseMock.main[0].translatedItems} />
      );

      expect(getAllByTestId('translationTranslatedExampleOriginal')).toBeTruthy();
      expect(getByText('My son knows that mocking people is wrong.')).toBeTruthy();
    });

    it('should render translation examples translation text', () => {
      const { getAllByTestId, getByText } = renderInProviders(
        <TranslationTranslatedItem {...translationResponseMock.main[0].translatedItems} />
      );

      expect(getAllByTestId('translationTranslatedExampleTranslation')).toBeTruthy();
      expect(getByText("Mon fils sait que ce n'est pas bien de se moquer des gens.")).toBeTruthy();
    });
  });

  describe('<TranslationLessCommonItem />', () => {
    it('should render translation less common label', () => {
      const { getByTestId, getByText } = renderInProviders(
        <TranslationLessCommonItem
          lessCommon={translationResponseMock.main[0].lessCommon as TranslationTranslatedItemMain[]}
        />
      );

      expect(getByTestId('translationLessCommonLabel')).toBeTruthy();
      expect(getByText('Less common :')).toBeTruthy();
    });

    it('should render translation less common items', () => {
      const { getAllByTestId } = renderInProviders(
        <TranslationLessCommonItem
          lessCommon={translationResponseMock.main[0].lessCommon as TranslationTranslatedItemMain[]}
        />
      );

      expect(getAllByTestId('translationLessCommonItems')).toBeTruthy();
      expect(getAllByTestId('translationLessCommonItems')).toHaveLength(6);
    });

    it('should render translation less common item text', () => {
      const { getAllByTestId, getByText } = renderInProviders(
        <TranslationLessCommonItem
          lessCommon={translationResponseMock.main[0].lessCommon as TranslationTranslatedItemMain[]}
        />
      );

      expect(getAllByTestId('translationLessCommonItemText')).toBeTruthy();
      expect(getByText('railler qqn./qqch.')).toBeTruthy();
    });

    it('should render translation less common item type', () => {
      const { getAllByTestId, getAllByText } = renderInProviders(
        <TranslationLessCommonItem
          lessCommon={translationResponseMock.main[0].lessCommon as TranslationTranslatedItemMain[]}
        />
      );

      expect(getAllByTestId('translationLessCommonItemType')).toBeTruthy();
      expect(getAllByText('v')).toBeTruthy();
    });
  });
});
