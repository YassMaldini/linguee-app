import Box from '../../designSystem/Box/Box';
import { TranslationItemProps } from './TranslationItem.types';
import TranslationLessCommonItem from './TranslationLessCommonItem/TranslationLessCommonItem';
import TranslationMainItem from './TranslationMainItem/TranslationMainItem';
import TranslationTranslatedItem from './TranslationTranslatedItem.tsx/TranslationTranslatedItem';

const TranslationItem = ({ item }: TranslationItemProps) => {
  const { mainItem, translatedItems, lessCommon } = item;

  return (
    <Box testID="translationItem" flex={1} padding="m" marginBottom={lessCommon ? 'none' : 'l'}>
      <TranslationMainItem {...mainItem} />
      {translatedItems && <TranslationTranslatedItem {...translatedItems} />}
      {lessCommon && lessCommon.length > 0 && <TranslationLessCommonItem {...{ lessCommon }} />}
    </Box>
  );
};

export default TranslationItem;
