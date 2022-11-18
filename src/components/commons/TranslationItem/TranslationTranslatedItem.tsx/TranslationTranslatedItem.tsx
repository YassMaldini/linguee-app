import Box from '../../../designSystem/Box/Box';
import Text from '../../../designSystem/Text/Text';
import { TranslationTranslatedItemProps } from './TranslationTranslatedItem.types';

const TranslationTranslatedItem = ({ translatedItems }: TranslationTranslatedItemProps) => {
  return (
    <Box testID="translationTranslatedItem" marginBottom="s">
      {translatedItems.map(
        (item, index) =>
          item.main && (
            <Box marginLeft="l" marginTop="sToM" key={index}>
              {item.main && (
                <Box flexDirection="row" alignItems="flex-end">
                  <Text testID="translationTranslatedItemText" marginRight="sToM" fontSize={18}>
                    {item.main.text}
                  </Text>
                  <Text
                    testID="translationTranslatedItemType"
                    color="secondaryText"
                    fontFamily="Roboto-Italic"
                    lineHeight={22}>
                    {item.main.type}
                  </Text>
                </Box>
              )}
              {item.examples.length > 0 && (
                <Box>
                  {item.examples.map((example, index) => (
                    <Box
                      testID="translationTranslatedExample"
                      marginLeft="l"
                      marginTop="s"
                      flexDirection="row"
                      flexWrap="wrap"
                      justifyContent="space-between"
                      key={index}>
                      <Box flex={2} marginRight="sToM">
                        <Text
                          testID="translationTranslatedExampleOriginal"
                          fontSize={13}
                          color="highlightedText">
                          {example.original}
                        </Text>
                      </Box>
                      <Box flex={2}>
                        <Text testID="translationTranslatedExampleTranslation" fontSize={13}>
                          {example.translation}
                        </Text>
                      </Box>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          )
      )}
    </Box>
  );
};

export default TranslationTranslatedItem;
