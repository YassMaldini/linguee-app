import { TranslationResponseTranslatedItem } from '../../../../types/models/translation/translation.types';
import Box from '../../../designSystem/Box/Box';
import Text from '../../../designSystem/Text/Text';

const TranslationTranslatedItem = (items: TranslationResponseTranslatedItem[]) => {
  return (
    <Box>
      {Object.values(items).map((item, index) => (
        <Box marginLeft="l" marginBottom="l" key={index}>
          {item.main && (
            <Box flexDirection="row" alignItems="flex-end">
              <Text marginRight="sToM" fontSize={18}>
                {item.main.text}
              </Text>
              <Text color="secondaryText" fontFamily="Roboto-Italic" lineHeight={22}>
                {item.main.type}
              </Text>
            </Box>
          )}
          {item.examples.length > 0 && (
            <Box marginBottom="m">
              {item.examples.map((example, index) => (
                <Box
                  marginLeft="l"
                  marginTop="s"
                  flexDirection="row"
                  flexWrap="wrap"
                  justifyContent="space-between"
                  key={index}>
                  <Box flex={2} marginRight="sToM">
                    <Text fontSize={13} color="highlightedText">
                      {example.original}
                    </Text>
                  </Box>
                  <Box flex={2}>
                    <Text fontSize={13}>{example.translation}</Text>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
          {item.lessCommon.length > 0 && (
            <Box>
              <Text fontSize={15} color="secondaryText" fontFamily="Roboto-Italic">
                Less common :
              </Text>
              <Box flexDirection="row" flexWrap="wrap" marginTop="xs">
                {item.lessCommon.map((lessCommonItem, index) => (
                  <Box flexDirection="row" alignItems="flex-end" marginRight="l" key={index}>
                    <Text fontSize={13}>{lessCommonItem.text}</Text>
                    <Text
                      marginLeft="s"
                      fontSize={12}
                      color="secondaryText"
                      fontFamily="Roboto-Italic">
                      {lessCommonItem.type}
                    </Text>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default TranslationTranslatedItem;
